import React from "react";
import BodyLay from "../components/templates/MainTemp/index.tsx";
import Tabular from "../components/organisms/Row/index.tsx";
import { Stack } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes/index.tsx";
export default function Tablepg() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <BodyLay>
          <Tabular />
        </BodyLay>
      </Stack>
    </ThemeProvider>
  );
}
