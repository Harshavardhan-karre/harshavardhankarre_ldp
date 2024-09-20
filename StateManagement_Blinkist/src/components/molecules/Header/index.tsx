import { Box, Stack, Divider } from "@mui/material";
import React from "react";
import Text from "../../atoms/Text/index.tsx";
import styled from "styled-components";
import { theme } from "../../../themes/index.tsx";
import Button from "../../atoms/Button/index.tsx";
import { Names } from "../../../utils/constants.tsx";
interface InputProps {
  tab1: string;
  isTab1: boolean;
  tab2: string;
  handleTab: (e: boolean) => void;
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing(20)};
`;

const TabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDivider = styled(Divider)<{ isTab1: boolean }>`
  width: 120%;
  height: ${theme.spacing(1.5)};
  background-color: ${(props) =>
    props.isTab1 == true ? theme.palette.primary.dark : "none"};
`;

const TabsStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Index({ tab1, isTab1, tab2, handleTab }: InputProps) {
  const handlerTab1 = () => {
    handleTab(true);
  };
  const handlerTab2 = () => {
    handleTab(false);
  };

  const Nuller = () => null;

  return (
    <StyledBox>
      <Text
        children={Names[2]}
        fontSize={theme.typography.h1.fontSize as number}
        fontWeight={theme.typography.h1.fontWeight as number}
      />{" "}
      <TabsStack spacing={20} direction={"row"}>
        <TabContainer onClick={handlerTab1}>
          <Button
            variation="text"
            text={tab1}
            handleButtonClick={Nuller}
          ></Button>
          <StyledDivider orientation="horizontal" isTab1={isTab1} />
        </TabContainer>
        <TabContainer onClick={handlerTab2}>
          <Button
            variation="text"
            text={tab2}
            handleButtonClick={Nuller}
          ></Button>
          <StyledDivider orientation="horizontal" isTab1={!(isTab1 == true)} />
        </TabContainer>
      </TabsStack>
    </StyledBox>
  );
}
