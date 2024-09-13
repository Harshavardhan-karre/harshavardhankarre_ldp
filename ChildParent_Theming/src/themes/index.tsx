import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    hedcolor: Palette["primary"];
  }

  interface PaletteOptions {
    hedcolor?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#201F24",
    },
    secondary: {
      main: "#6C5DD3",
    },
    hedcolor: {
      main: "#393552",
      light: "#663da5",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Gilroy",
  },
  spacing: 4,
});