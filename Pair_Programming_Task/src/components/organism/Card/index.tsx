import { Box, Stack } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon/index.tsx";
import Text from "../../atoms/Text/index.tsx";
import styled from "styled-components";
import TextIcon from "../../molecules/TextIcon/index.tsx";
import theme from "../../../theme/theme.tsx";
const StyledImgBox = styled(Box)`
  height: 100%;
`;
const StyledContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;
const StyledOutBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid black;
  border-radius: 15px;
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

const StyledHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 70px;
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
        <StyledContent>
          <StyledHeader>
            <Text text={title} weight={500} fontSize={titleFont} />
            <Icon src={`${process.env.PUBLIC_URL}/assets/Menu.svg`} width={20} height={10}></Icon>
          </StyledHeader>
          <Text
            text={logoname}
            weight={500}
            fontSize={12}
            color={theme.palette.customColor1.main}
          />
          <Text
            text={Address}
            weight={500}
            fontSize={AdrressFont}
            color={theme.palette.customColor2.main}
          />
        </StyledContent>
        <TextIcon>
          <Text
            text={timeReq}
            fontSize={12}
            color={theme.palette.customColor2.main}
            weight={700}
          />
        </TextIcon>
      </StyledWrapper>
    </StyledOutBox>
  );
}
