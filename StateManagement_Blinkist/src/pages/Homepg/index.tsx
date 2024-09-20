import React from "react";
import LayOut from "../../components/templates/MainTemp/index.tsx";
import { Box, ThemeProvider } from "@mui/material";
import Tab from "../../components/organisms/TabSection/index.tsx";
import { ThemeContext } from "@emotion/react";
import { theme } from "../../themes/index.tsx";
export default function index() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <LayOut>
          <Tab />
        </LayOut>
      </ThemeProvider>
    </Box>
  );
}
