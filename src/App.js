import Button from "./components/common/Button";
import Input from "./components/common/Input/Input";
import LogoTitle from "./components/common/LogoTitle";
import SecondaryTitle from "./components/common/SecondaryTitle";
import { ThemeProvider } from "styled-components"
import AllTheme from './components/theme/theme'
import ShowUser from "./components/common/ShowUser/ShowUser";
import LogIn from "./components/layouts/LogIn/LogIn";

function App() {
  return (
    <ThemeProvider  theme={AllTheme}>
      <div className="App">
        <LogIn/>
      </div>
    </ThemeProvider>
  );
}

export default App;
