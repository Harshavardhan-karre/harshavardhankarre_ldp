import { Typography } from "@mui/material";
import React from "react";
import theme from "../../../themes";

interface InputProps {
  text: string;
}

export default function index({ text }: InputProps) {
  return <Typography>{text}</Typography>;
}
