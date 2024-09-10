import React from 'react'
import Card from '../Card/index.tsx'
import { Box } from '@mui/material'
import styled from 'styled-components'
export default function index() {
    const StyledBox=styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    `
  return (
    <StyledBox>
      <Card title="User Experience Designer" logoname="Myntra" Address="Hitech city, Hyderabad - 500072" width={55} height={55} titleFont={20} AdrressFont={12} timeReq={"36 min ago"}/>
    </StyledBox>
  )
}
