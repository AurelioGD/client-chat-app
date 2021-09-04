import Button from "./components/common/Button";
import Input from "./components/common/Input/Input";
import LogoTitle from "./components/common/LogoTitle";
import SecondaryTitle from "./components/common/SecondaryTitle";
import { ThemeProvider } from "styled-components"
import AllTheme from './components/theme/theme'
function App() {
  return (
    <ThemeProvider  theme={AllTheme}>
      <div className="App">
        <LogoTitle fontColor="purple">asdasd</LogoTitle>
        <Button color="dark">Hola</Button>
        <Input typeInput="email"/>
        <SecondaryTitle fontColor="purple" >Hola Mundo</SecondaryTitle>
      </div>
    </ThemeProvider>
  );
}

export default App;
