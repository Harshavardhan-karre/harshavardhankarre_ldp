import React from "react";
import CheckBox from "@mui/material/Checkbox";
import styled from "styled-components";

interface InputProps {
  checked: boolean;
  onChange: () => void;
}

const StyledCheckBox = styled(CheckBox)`
  color: white;

  &.Mui-checked {
    color: white;
  }

  & .MuiSvgIcon-root {
    color: white;
  }
`;

export default function CustomCheckBox({ checked, onChange }: InputProps) {
  return <StyledCheckBox checked={checked} onChange={onChange} />;
}
