import { Box, InputAdornment } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { theme } from "../../../themes/index.tsx";
import Icon from "../Icon/index.tsx";
interface InputProps {
  children: string;
  fontSize?: number;
  fontWeight?: number;
}

const StyledTypography = styled(Box)<{
  fontSize: string | number;
  fontWeight: number;
}>`
  font-size: ${(props) =>
    typeof props.fontSize === "number"
      ? `${props.fontSize}px`
      : props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export default function Index({
  children,
  fontSize = theme.typography.h2.fontSize as number,
  fontWeight = theme.typography.h2.fontWeight as number,
}: InputProps) {
  return (
    <Box>
      <StyledTypography fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </StyledTypography>
    </Box>
  );
}
