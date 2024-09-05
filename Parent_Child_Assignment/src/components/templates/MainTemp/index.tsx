import React, { Children } from 'react'
import Tabular from '../../organisms/Row/index.tsx'
import styled from 'styled-components';

const StyledBox=styled.div`
background-color: rgb(74, 64, 64);
color: white;
 border-radius: 25px;
`

export default function index({children}) {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  )
}
