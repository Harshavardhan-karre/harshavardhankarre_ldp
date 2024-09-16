import { Box } from '@mui/material'
import React from 'react'

interface InputProps{
    width?:number,
    height?:number,
    src:string,
}

export default function index({width,height,src}:InputProps) {
  return (
    <Box>
      <img src={src} width={width} height={height}></img>
    </Box>
  )
}
