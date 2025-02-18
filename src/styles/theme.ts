import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#212121",
      paper: "#333",
    },
    text: {
      secondary: "#c2c2c2",
    },
  },
});
