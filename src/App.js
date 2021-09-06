import Button from "./components/common/Button";
import Input from "./components/common/Input/Input";
import LogoTitle from "./components/common/LogoTitle";
import SecondaryTitle from "./components/common/SecondaryTitle";
import { ThemeProvider } from "styled-components"
import AllTheme from './components/theme/theme'
import ShowUser from "./components/common/ShowUser/ShowUser";
import LogIn from "./components/layouts/LogIn/LogIn";
import BasicNav from "./components/layouts/BasicNav/BasicNav";
import GlobalStyle from "./components/DefaultComponentStyles/GlobalStyle"
import { Container } from "./components/DefaultComponentStyles/Container"
function App() {
  return (
    <ThemeProvider  theme={AllTheme}>
      <div className="App">
        <BasicNav/>
        <Container display="flex" justCont="center" widthSize="100%">
          <LogIn/>
        </Container>
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
