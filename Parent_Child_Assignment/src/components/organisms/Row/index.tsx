import React from 'react';
import  '../../../App.css';
import Row from '../../molecules/RowTab/index.tsx';
import Header from '../../molecules/Header/index.tsx';
import styled from 'styled-components';

const StyledDiv=styled.div
`background-color:black;
color:white;
`;

export default function index() {
  const info=[["Name","Type","Per Payment","Term length","Payment"],
  ["Contract 1","Monthly","$12000","12 months(12.0% fee)", "$63300"],
["Contract 6","Monthly","$6000","12 months(12.0% fee)", "$63300"],
["Contract 5","Monthly","$6000","12 months(12.0% fee)", "$63300"],
["Contract 4","Monthly","$6000","12 months(12.0% fee)", "$63300"],
["Contract 3","Monthly","$6000","12 months(12.0% fee)", "$63300"],
["Contract 2","Monthly","$6000","12 months(12.0% fee)", "$21100"]];

  return (
    <div className='mainorg'>
     <Header size={30} text={"Your Data"}/>
      <table >
      <Row/>
      </table> 
    </div>
  )
}
