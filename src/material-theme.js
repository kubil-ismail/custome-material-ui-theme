import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // primary: will be calculated from palette.primary.main,
      main: "#3BBEAE",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      dark: "#f1f0f0",
      contrastText: "#3A3A3A",
    },
  },
  typography: {
    fontFamily: [
      "lato",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "1.2rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "0.9rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "0.8rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.8rem",
      fontWeight: 500,
      color: "#828282",
    },
    button: {
      textTransform: "none",
      fontSize: "0.8rem",
      fontWeight: 600,
      color: "#828282",
    },
  },

});

export default theme;
