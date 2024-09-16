import { Box, Button } from '@mui/material'
import React from 'react'

interface InputProps{
  variation: "text" | "contained" | "outlined";
  text:string,
  handleButtonClick:()=>void,
}

export default function index({variation,text,handleButtonClick}:InputProps) {
  return (
    <Box>
      <Button variant={variation} onClick={handleButtonClick}>{text}</Button>
    </Box>
  )
}
