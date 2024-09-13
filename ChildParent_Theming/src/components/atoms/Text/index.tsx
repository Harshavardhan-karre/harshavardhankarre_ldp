import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
const StyledTypography = styled.span<{fontSize:number}>`
  font-size:${props=>props.fontSize}px;
  float: left;
`;
interface InputProps {
  size?: number;
  text: string;
}
export default function index(props: InputProps) {
  const {size,text}=props;
  return (
    <Box>
     <StyledTypography fontSize={size||16}>{text}</StyledTypography>
    </Box>
  );
}
