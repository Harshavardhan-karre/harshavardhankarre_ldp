import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import styled from 'styled-components'

interface InputProps {
  text: string,
  weight?: number,
  fontSize: number,
  color?: string,
}

const StyledTypography = styled(Typography)<{ fontWeight?: number, fontSize: number, color?: string}>`
  font-size: ${(props) => `${props.fontSize}px`};   
  font-weight: ${(props) => (props.fontWeight)};  
  color: ${(props) => props.color};
`;

export default function Index({ text, weight = 400, fontSize, color = "black"}: InputProps) {
  return (
    <Box>
      <StyledTypography fontWeight={weight} fontSize={fontSize} color={color}>
        {text}
      </StyledTypography>
    </Box>
  )
}
