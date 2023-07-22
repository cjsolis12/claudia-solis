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
      main: Colors.teal,
    },
  },
  components:{
    MuiButtons: {
        defaultProps: {
            disableRipple: true,
            disableElevation: true,

        }
    }
  }
});

export default theme;
