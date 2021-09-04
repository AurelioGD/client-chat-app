import Button from "./components/common/Button";
import Input from "./components/common/Input/Input";
import LogoTitle from "./components/common/LogoTitle";
import SecondaryTitle from "./components/common/SecondaryTitle";
import { ThemeProvider } from "styled-components"
import AllTheme from './components/theme/theme'
import ShowUser from "./components/common/ShowUser/ShowUser";

function App() {
  return (
    <ThemeProvider  theme={AllTheme}>
      <div className="App">
        <LogoTitle fontColor="purple">asdasd</LogoTitle>
        <Button color="dark">Hola</Button>
        <Input typeInput="email"/>
        <SecondaryTitle fontColor="purple" >Hola Mundo</SecondaryTitle>
        <ShowUser></ShowUser>
      </div>
    </ThemeProvider>
  );
}

export default App;
