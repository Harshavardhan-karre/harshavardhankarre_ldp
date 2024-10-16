import { Box, Stack } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon/index.tsx";
import Text from "../../atoms/Text/index.tsx";
import styled from "styled-components";
import TextIcon from "../../molecules/TextIcon/index.tsx";
import theme from "../../../theme/theme.tsx";
import Header from '../../molecules/Header/index.tsx';

const StyledImgBox = styled(Box)`
  height: 100%;
`;
const StyledOutBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 16px 19px 16px 19px;
  border: 1px solid black;
  border-radius: 12px;
  width: 400px;
`;
interface InputProps {
  title: string;
  logoname: string;
  Address: string;
  width: number;
  height: number;
  titleFont: number;
  AdrressFont: number;
  timeReq: string;
  thick?: string;
}

const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function index({
  title,
  logoname,
  Address,
  width,
  height,
  titleFont,
  AdrressFont,
  timeReq,
}: InputProps) {
  return (
    <StyledOutBox>
      <StyledImgBox>
        <Icon src={`${process.env.PUBLIC_URL}/assets/image.svg`} width={width} height={height} />
      </StyledImgBox>
      <StyledWrapper>
        <Header title={title} titleFont={titleFont} logoname={logoname} Address={Address}/>
        <TextIcon>
          <Text
            text={timeReq}
            fontSize={theme.typography.h2.fontSize as number}
            color={theme.palette.customColor2.main}
            weight={theme.typography.h2.fontWeight as number}
          />
        </TextIcon>
      </StyledWrapper>
    </StyledOutBox>
  );
}
