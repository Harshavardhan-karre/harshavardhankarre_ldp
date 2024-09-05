import React, { Children } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';

const StyledBox=styled.div`
background-color: rgb(74, 64, 64);
color: white;
 border-radius: 25px;
`


const Index = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(74, 64, 64)',
        color: 'white',
        borderRadius: '25px',
        padding: '16px',
      }}
    >
      {children}
    </Box>
  );
};

export default Index;
