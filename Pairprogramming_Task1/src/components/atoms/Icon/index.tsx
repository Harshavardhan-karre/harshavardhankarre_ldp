import Box from '@mui/material/Box'
import React from 'react';

interface InputProps{
    src:string,
    width?:number,
    height?:number
}

export default function index({src,width,height}:InputProps) {
  return (
    <Box>
      <img src={src}></img>
    </Box>
  )
}
