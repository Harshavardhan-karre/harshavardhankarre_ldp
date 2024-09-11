import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import React from 'react'
import { styled } from 'styled-components';
import Icon from '../../atoms/Icon/index.tsx';
interface InputProps{
    children:React.ReactNode;
}

const StyledBox=styled(Box)`
display:flex;
justify-content:space-between;
gap:100px;
`

export default function index({children}:InputProps) {
  return (
    <StyledBox>
      <Stack spacing={2} direction={"row"}>
        <Icon src={`${process.env.PUBLIC_URL}/assets/Scooter.svg`}/>
        <Icon src={`${process.env.PUBLIC_URL}/assets/Bus.svg`}/>
        <Icon src={`${process.env.PUBLIC_URL}/assets/Car.svg`}/>
        <Icon src={`${process.env.PUBLIC_URL}/assets/Train.svg`}/>
      </Stack>
      {children}
    </StyledBox>
  )
}
