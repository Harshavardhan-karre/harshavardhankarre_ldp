import { Box } from "@mui/material";
import React from "react";

interface InputProps {
  children: React.ReactNode;
}

export default function index({ children }: InputProps) {
  return <Box>{children}</Box>;
}
