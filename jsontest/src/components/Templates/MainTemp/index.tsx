import { Box, styled } from "@mui/material";
import React from "react";
import FormOrg from "../../Organisms/FormOrg";
import TabularForm from "../../Organisms/TabularForm";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface InputProps {
  children: React.ReactNode;
}

export default function index({ children }: InputProps) {
  return <StyledBox>{children}</StyledBox>;
}
