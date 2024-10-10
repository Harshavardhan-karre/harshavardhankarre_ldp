import { Button, ButtonProps } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Text from "../Text/index";
interface InputProps extends ButtonProps {
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
      <Text text={children as string} />
    </Button>
  );
}
