import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";
import theme from "../src/theme";
import Nav from "../components/nav/nav";

export default function App({ Component, pageProps }) {
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Nav />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
