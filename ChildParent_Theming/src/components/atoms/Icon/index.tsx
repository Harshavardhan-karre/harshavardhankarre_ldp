import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "../../../App.css";
import styled from "styled-components";
import { theme } from "../../../themes/index.tsx";
type InputProps = {
  color:
    | "inherit"
    | "disabled"
    | "action"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  fontSize: "small" | "inherit" | "large" | "medium";
};
const StyledInfo = styled(InfoOutlinedIcon)`
  margin-top: ${theme.spacing(2)};
`;

export default function index(props: InputProps) {
  const { color, fontSize } = props;
  return <StyledInfo color={color} fontSize={fontSize} />;
}
