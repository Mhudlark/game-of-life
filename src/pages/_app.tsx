import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
