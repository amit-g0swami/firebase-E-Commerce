import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64b5f6"
    },
    secondary: {
      main: "#ff8a65"
    },
    background: {
      default: "#121212",
      paper: "#212121"
    },
    text: {
      primary: "#ffffff",
      secondary: "#e0e0e0"
    }
  }
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={darkTheme}>{children}</MuiThemeProvider>
);
