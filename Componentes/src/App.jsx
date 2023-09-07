import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Titulo nome="Mario" idade="20" cor="red">
        <p>Inserindo um children no obj</p>
      </Titulo>
      <Titulo nome="Maria" idade="25" cor="blue" />
      <Titulo nome="João" idade="30" salario="200" />
    </>
  );
}

export default App;
