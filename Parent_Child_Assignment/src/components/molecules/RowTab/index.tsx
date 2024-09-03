import {useState,useEffect} from 'react';
import React from 'react';
import Text from '../../atoms/Text/index.tsx';
import CheckBox from '../../atoms/CheckBox/index.tsx';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledText=styled(Text)`
 padding:10px;
`;
const StyledTh = styled.th`
  padding: 10px;
`;

const StyledTd = styled.td`
  padding: 10px;
`;

const Styledhighlight=styled.td`
    padding: 10px;
    background-color:blue;
`;

const info=[["Name","Type","Per Payment","Term length","Payment"],
    ["Contract 1","Monthly","$12000","12 months(12.0% fee)", "$63300"],
  ["Contract 6","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 5","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 4","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 3","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 2","Monthly","$6000","12 months(12.0% fee)", "$21100"]];

  const Data = ({ ished, data, highlight }) => {
   let Tag = ished ? StyledTh : StyledTd;
   if(highlight)
   {
      Tag=Styledhighlight;
   }
    return (
      <>
        {data.map((item, index) => (
          <Tag key={index}>
            <StyledText text={item}/>
            </Tag>
        ))}
      </>
    );
  }
  function Rowy({ished,data}){
    const [state,setState]=useState(false);
 
    function handle()
    {
      setState(!state);
    }
    return (
     <tr>
      <span onClick={handle}><CheckBox/></span>
       <Data ished={ished} data={data} highlight={state}></Data>
     </tr>
    )
 }

export default function index(props) {
  return (
    <div>      
       {info.map((data, i) => (
        <Rowy
        key={i}
          ished={i===0}
          data={data}
        />
      ))}
    </div>
  )
}
