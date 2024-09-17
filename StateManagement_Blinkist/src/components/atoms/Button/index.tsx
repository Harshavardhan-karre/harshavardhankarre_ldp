import { Box, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface InputProps {
  variation: "text" | "contained" | "outlined";
  text: string;
  handleButtonClick: () => void;
}

const StyledButton = styled(Button)`
  &:hover {
    color: #22c870;
  }
  &:active {
    background-color: #22c870;
  }
`;

export default function index({
  variation,
  text,
  handleButtonClick,
}: InputProps) {
  return (
    <Box>
      <StyledButton variant={variation} onClick={handleButtonClick}>
        {text}
      </StyledButton>
    </Box>
  );
}
