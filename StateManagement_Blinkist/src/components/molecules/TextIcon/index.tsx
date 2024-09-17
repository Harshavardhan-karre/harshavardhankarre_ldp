import { Box, Stack } from "@mui/material";
import React from "react";
import Text from "../../atoms/Text/index.tsx";
import Icon from "../../atoms/Icon/index.tsx";
import { theme } from "../../../themes/index.tsx";
interface InputProps {
  text: string;
  src: string;
}

export default function index({ text, src }: InputProps) {
  return (
    <Stack direction={"row"} spacing={1}>
      <Icon
        src={src}
        width={theme.spacing(10) as unknown as number}
        height={theme.spacing(10) as unknown as number}
      ></Icon>
      <Text children={text} />
    </Stack>
  );
}
