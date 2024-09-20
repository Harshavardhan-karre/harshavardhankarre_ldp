import React from "react";
import { theme } from "../../../themes/index.tsx";
interface InputProps {
  width?: number;
  height?: number;
  src: string;
}

export default function index({
  width = theme.spacing(10) as unknown as number,
  height = theme.spacing(10) as unknown as number,
  src,
}: InputProps) {
  return <img src={src} width={width} height={height}></img>;
}
