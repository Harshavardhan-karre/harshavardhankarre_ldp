import { Box, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { theme } from "../../../themes/index.tsx";
interface InputProps {
  variation: "text" | "contained" | "outlined";
  text: string;
  handleButtonClick: () => void;
}

const StyledButton = styled(Button)`
  &:hover {
    color: ${theme.palette.primary.main};
  }
  &:active {
    background-color: ${theme.palette.primary.main};
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
