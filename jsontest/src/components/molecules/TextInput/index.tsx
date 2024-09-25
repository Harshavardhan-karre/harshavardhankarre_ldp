import React from "react";
import Input from "../../atoms/Input";
import { Box, Grid, styled } from "@mui/material";
import theme from "../../../themes";

interface InputProps {
  text: string;
  type: string;
  name: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${theme.spacing(100)}, 1fr));
  gap: ${theme.spacing(5)};
  padding: ${theme.spacing(10)};
`;

export default function index({ text, type, name, handleInput }: InputProps) {
  return (
    <StyledGrid>
      <label htmlFor={name}>{text}</label>
      <Input
        type={type}
        name={name}
        handleInput={handleInput}
        idforname={name}
      />
    </StyledGrid>
  );
}
