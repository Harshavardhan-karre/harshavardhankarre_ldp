import React from "react";

interface InputProps {
  width?: number;
  height?: number;
  src: string;
}

export default function index({ width=20, height=20, src }: InputProps) {
  return (
    <>
      <img src={src} width={width} height={height}></img>
    </>
  );
}
