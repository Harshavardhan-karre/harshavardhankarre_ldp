import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import Icon from "../../atoms/Icon/index.tsx";
import Text from "../../atoms/Text/index.tsx";
import theme from "../../../theme/theme.tsx";


const StyledContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;


const StyledHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 70px;
`;
interface InputProps{
    title:string,
    titleFont:number,
    logoname:string,
    Address:string
}

export default function index({title,titleFont,logoname,Address}:InputProps) {
  return (
    <StyledContent>
          <StyledHeader>
            <Text text={title} weight={theme.typography.h1.fontWeight as number} fontSize={titleFont} />
            <Icon src={`${process.env.PUBLIC_URL}/assets/Menu.svg`} width={20} height={10}></Icon>
          </StyledHeader>
          <Text
            text={logoname}
            weight={theme.typography.h1.fontWeight as number}
            fontSize={theme.typography.h2.fontSize as number}
            color={theme.palette.customColor1.main}
          />
          <Text
            text={Address}
            weight={theme.typography.h1.fontWeight as number}
            fontSize={theme.typography.h2.fontSize as number}
            color={theme.palette.customColor2.main}
          />
        </StyledContent>
  )
}
