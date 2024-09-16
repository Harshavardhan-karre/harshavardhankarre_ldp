import { Box } from '@mui/material';
import React, { useState } from 'react'
import {CardData} from '../../../utils/constants.tsx';
import Card from '../../molecules/Card/index.tsx';
import {theme} from '../../../themes/index.tsx';
import styled from 'styled-components';
import Header from '../../molecules/Header/index.tsx';
// import {HeaderTabs} from '../../../utils/constants.tsx';

const StyledBox=styled(Box)`
display:flex;
align-content:center;
justify-content:center;
flex-wrap:wrap;
gap:80px;
`

const StyledOuterBox=styled(Box)`
display:flex;
flex-direction:column;
align-content:center;
justify-content:center;
gap:40px;
`


export default function Index() {
    const [current,setCurrent]=useState<boolean>(true);
    const [cardState,setCardState]=useState<boolean[]>(Array(CardData.length).fill(false));
    let new_ar:React.ReactNode[]=[];
   function handleTab(value:boolean)
    {
        setCurrent(value);
    }
   function handleButton(index: number, currentState: boolean)
   {
    setCardState((prevState) => {
      const newState = [...prevState];
      newState[index] = !currentState;
      return newState;
    });    
  }
  function Invoker(condition:boolean)
  {
    return CardData.map((array,index)=>( cardState[index] === condition && (
      <Card
        key={index}
        src={array.src}
        FontSize={theme.typography.h2.fontSize as number}
        FontWeight={theme.typography.h1.fontWeight as number}
        BookTitle={array.text}
        AuthorTitle={array.authText}
        TimeText={array.timeLeft}
        ReadTexts={array.ReadTexts}
        index={index}
        currentState={cardState[index]}
        handleButtonClick={() => handleButton(index, cardState[index])}
      />
    )))
  }

  return (
    <StyledOuterBox>
       <Header tab1={"Currently Reading"} tab2={"Finished"} handleTab={(val)=>handleTab(val)}/>
    <StyledBox>
      {
              current==true?Invoker(false):Invoker(true)
      }
    </StyledBox>
    </StyledOuterBox>
  )
}
