import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22c870",
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 700,
    },
    h2: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  spacing: 2,
});
