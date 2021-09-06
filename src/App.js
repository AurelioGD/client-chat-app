import { ThemeProvider } from "styled-components"
import AllTheme from './components/theme/theme'
import GlobalStyle from "./components/DefaultComponentStyles/GlobalStyle"
import LogIn from "./components/pages/LogIn/LogIn";
function App() {
  return (
    <ThemeProvider  theme={AllTheme}>
      <div className="App">
        <LogIn/>
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
