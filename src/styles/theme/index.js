import { createTheme } from "@mui/material/styles";


export const Colors = {
  oliveGreen: "#D0CE27",
  teal: "#169086",
  beige: "#EBE6DE",
  charcoal: "#373737",
  lilac: "#C7A6C5",
  // Grey
  lightGrey: "#CCCCCC",
  //black and white
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.charcoal,
    },
    secondary: {
      main: Colors.lilac,
    },
  },
  components:{
    MuiButtons: {
        defaultProps: {
            disableRipple: true,
            disableElevation: true,
        }
    },
    MuiDrawer: {
      styleOverrides:{
        paper: {
          width: 200,
          background: Colors.charcoal,
          color: Colors.lilac,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `1px solid ${Colors.lilac}`
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: Colors.lilac
        }
      }
    }
  }
});

export default theme;
