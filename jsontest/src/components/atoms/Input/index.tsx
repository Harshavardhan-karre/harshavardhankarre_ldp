import { Input, TextField } from "@mui/material";
import React from "react";

interface InputProps {
  type: string;
  name: string;
  value?: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idforname?: string;
}

export default function index({
  type,
  name,
  value,
  handleInput,
  idforname,
}: InputProps) {
  return (
    <TextField
      type={type}
      name={name}
      value={value}
      onChange={handleInput}
      id={idforname}
      required
    />
  );
}
