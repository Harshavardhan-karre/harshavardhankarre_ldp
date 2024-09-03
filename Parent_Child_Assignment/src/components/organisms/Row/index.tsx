import React from 'react'
import  '../../../App.css';
import Button from '../../atoms/CheckBox/index.tsx';
import Row from '../../molecules/RowTab/index.tsx';
import Header from '../../atoms/Text/index.tsx'
export default function index() {
  return (
    <div>
      <Header size={30}/>
      <table border={2}>
        <Row/>
      </table> 
    </div>
  )
}
