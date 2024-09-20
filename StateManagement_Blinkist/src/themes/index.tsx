import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22c870",
      light: "#e1ecfc",
      dark: "rgb(28, 220, 31)",
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
