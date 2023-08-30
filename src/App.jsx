import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import { AdviceGenerator } from "./components/advice-generator";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AdviceGenerator />
    </ThemeProvider>
  );
};

export default App;
