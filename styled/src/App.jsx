import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button bgcolor={"blue"} color={"white"}>Primary Button</Button>

      <Button border={"solid"}>Default Button</Button>

      <Button border={"dashed"}>Dashed Button</Button>

      <Button>Text Button</Button>

      <Button color={"blue"}>Link Button</Button>
    </div>
  );
}

export default App;
