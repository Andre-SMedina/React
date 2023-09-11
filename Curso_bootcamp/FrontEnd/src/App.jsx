import Cargos from "./components/Cargos";
import Titulo from "./components/Titulo";
import "./App.css";
import fundo from "./assets/fundo.avif";
import Teste from "./components/Teste";

function App() {
  return (
    <>
      <img width={300} src={fundo} alt="" />
      <Titulo nome="Mario" idade="20" cor="red">
        <p>Inserindo um children noo obj</p>
      </Titulo>
      <Titulo nome="Maria" idade="25" cor="blue" />
      <Cargos />
      <Teste />
    </>
  );
}

export default App;
