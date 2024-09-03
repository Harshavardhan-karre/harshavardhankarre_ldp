import React from 'react'
import Text from '../../atoms/Text/index.tsx';
import CheckBox from '../../atoms/CheckBox/index.tsx';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledText=styled(Text)`
 padding:10px;
`;
const StyledTag=styled.td`
padding:10px;
`;

export default function index() {
  const info=[["Name","Type","Per Payment","Term length","Payment"],
    ["Contract 1","Monthly","$12000","12 months(12.0% fee)", "$63300"],
  ["Contract 6","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 5","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 4","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 3","Monthly","$6000","12 months(12.0% fee)", "$63300"],
  ["Contract 2","Monthly","$6000","12 months(12.0% fee)", "$21100"]];

  const Data = ({ Tag, data }) => {
    return (
      <>
        {data.map((item, index) => (
          <StyledTag key={index}>
            <StyledText text={item}/>
            </StyledTag>
        ))}
      </>
    );
  }
  const Rowy=({ished,data})=>{
   return (
    <tr>
      <CheckBox />
      <Data Tag={ished ? 'th':'td'} data={data}></Data>
    </tr>
   )
}
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
