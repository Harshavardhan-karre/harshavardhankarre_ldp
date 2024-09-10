import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Palette {
      customColor1: Palette['primary'];
      customColor2: Palette['primary'];
    }
  
    interface PaletteOptions {
      customColor1?: PaletteOptions['primary'];
      customColor2?: PaletteOptions['primary'];
    }
  }

const theme=createTheme({
    palette:{
    customColor1: {
        main:"#FF725E"
      },
      customColor2:{
        main:"#656E66"
      },
   },
   typography:{
     h2:{
      fontSize:12,
      fontWeight:700,
    },
     h1:{
      fontSize:20,
      fontWeight:500,
     },
   },
})

export default theme;