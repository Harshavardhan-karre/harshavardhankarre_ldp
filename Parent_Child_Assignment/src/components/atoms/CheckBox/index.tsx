import React from 'react'
import styled from 'styled-components'
import CheckBox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Index() {
  return (
    <div>
       <CheckBox {...label} style={{color:'white'}}/>
    </div>
  )
}