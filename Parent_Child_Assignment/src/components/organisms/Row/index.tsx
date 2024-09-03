import React from 'react';
import  '../../../App.css';
import Button from '../../atoms/CheckBox/index.tsx';
import Row from '../../molecules/RowTab/index.tsx';
import Header from '../../atoms/Text/index.tsx';
import styled from 'styled-components';

const StyledDiv=styled.div
`background-color:black;
color:white;
`;

export default function index() {
  return (
    <div className='mainorg'>
      <Header size={30} text={"Your Data"}/>
      <table border={2} cellSpacing={0}>
        <Row/>
      </table> 
    </div>
  )
}
