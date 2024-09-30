import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
const StyledSpan = styled.span`
  float: left;
`;
interface InputProps {
  size?: number;
  text: string;
  isicon?: boolean;
}
export default function index(props: InputProps) {
  return (
    <Box>
      <StyledSpan style={{ fontSize: props.size }}>{props.text}</StyledSpan>
    </Box>
  );
}
