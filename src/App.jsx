import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import { AdviceGenerator } from "./components/advice-generator";
import { GlobalStyle } from "./GlobalStyles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AdviceGenerator />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
