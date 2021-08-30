import Button from "./components/common/Button/Button";
import Input from "./components/common/Input/Input";
import SecondaryTitle from "./components/common/SecondaryTitle";

function App() {
  return (
    <div className="App">
      <SecondaryTitle fontColor="dark">Hola Mundo</SecondaryTitle>
      <Input typeInput="email"/>
      <Button color="dark">Hola</Button>
    </div>
  );
}

export default App;
