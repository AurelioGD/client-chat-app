import { ThemeProvider } from "styled-components"
import AllTheme from './components/theme/theme'
import GlobalStyle from "./components/DefaultComponentStyles/GlobalStyle"
import SignUpPage from "./components/pages/SignUp/SignUp";
import AppContainer from "./App.style";

function App() {
  return (
    <ThemeProvider  theme={AllTheme}>
        <AppContainer>
            <SignUpPage/>
        </AppContainer>
        <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
