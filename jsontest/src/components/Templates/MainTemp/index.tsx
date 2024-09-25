import { Box, styled } from "@mui/material";
import React from "react";
import FormOrg from "../../Organisms/FormOrg";
import TabularForm from "../../Organisms/TabularForm";

const StyledBox=styled(Box)`
display:flex;
justify-content:center;
align-items:center;
`

export default function index() {
  return (
    <StyledBox>
      <FormOrg />
    </StyledBox>
  );
}
