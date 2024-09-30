import React from "react";
import Box from "@mui/material/Box";

interface InputProps {
  children: React.ReactNode;
}

const Index = ({ children }: InputProps) => {
  return <Box>{children}</Box>;
};

export default Index;
