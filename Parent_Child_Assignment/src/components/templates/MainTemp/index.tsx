import React, { Children } from 'react'
import Box from '@mui/material/Box';
import styled from 'styled-components';

const StyledBox=styled(Box)`
background-color: rgb(74, 64, 64);
color: white;
border-radius: 25px;
padding: 16px;
`

const Index = ({ children }) => {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
};

export default Index;
