import { Box, Stack, Divider } from '@mui/material';
import React from 'react';
import Text from '../../atoms/Text/index.tsx';
import styled from 'styled-components';
import { theme } from '../../../themes/index.tsx';
import Button from '../../atoms/Button/index.tsx';
interface InputProps {
  tab1: string;
  tab2: string;
  handleTab:(e:boolean)=>void;
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:${theme.spacing(20)}
`;

const TabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  width: 100%;
`;

const TabsStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Index({ tab1, tab2, handleTab }: InputProps) {
  return (
    <StyledBox>
   <Text 
  children="My Library" 
  FontSize={theme.typography.h1.fontSize as number} // Ensure fontSize is a number
  FontWeight={theme.typography.h1.fontWeight as number} 
/>     <TabsStack spacing={20} direction={"row"}>
        <TabContainer  onClick={()=>handleTab(true)}>
          <Button variation='text' text={tab1} handleButtonClick={()=>null}></Button>
          <StyledDivider orientation="horizontal" />
        </TabContainer>
        <TabContainer onClick={()=>handleTab(false)}>
          <Button variation='text' text={tab2} handleButtonClick={()=>null}></Button>
          <StyledDivider orientation="horizontal" />
        </TabContainer>
      </TabsStack>
    </StyledBox>
  );
}
