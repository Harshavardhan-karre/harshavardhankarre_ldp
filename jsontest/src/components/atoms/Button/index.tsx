import { Button } from "@mui/material";
import React from "react";
import theme from "../../../themes";

interface InputProps {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: "text" | "contained" | "outlined";
  handleButton?: () => void;
  children: React.ReactNode;
}

export default function Index({
  type,
  variant,
  handleButton,
  children,
}: InputProps) {
  return (
    <Button type={type} variant={variant || "contained"} onClick={handleButton}>
      {children}
    </Button>
  );
}
