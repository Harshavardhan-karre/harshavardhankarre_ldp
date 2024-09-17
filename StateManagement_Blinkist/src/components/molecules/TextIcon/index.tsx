import { Box, Stack } from "@mui/material";
import React from "react";
import Text from "../../atoms/Text/index.tsx";
import Icon from "../../atoms/Icon/index.tsx";
interface InputProps {
  text: string;
  src: string;
}

export default function index({ text, src }: InputProps) {
  return (
    <Stack direction={"row"} spacing={1}>
      <Icon src={src} width={20} height={20}></Icon>
      <Text children={text} />
    </Stack>
  );
}
