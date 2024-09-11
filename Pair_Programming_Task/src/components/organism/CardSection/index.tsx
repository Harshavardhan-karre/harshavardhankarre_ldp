import React from 'react'
import Card from '../Card/index.tsx'
import { Box } from '@mui/material'
import styled from 'styled-components'
import theme from "../../../theme/theme.tsx";
import {Data} from '../../../utils/constants.tsx';
export default function index() {
    const StyledBox=styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    `
  return (
    <StyledBox>
            {Data.map((item, i) => (
        <Card
          key={i}
          title={item.title}
          logoname={item.logoname}
          Address={item.Address}
          width={item.width}
          height={item.height}
          titleFont={theme.typography.h1.fontSize as number}
          AdrressFont={theme.typography.h1.fontSize as number}
          timeReq={item.timeReq}
        />
      ))}
    </StyledBox>
  )
}
