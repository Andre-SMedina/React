import { useEffect, useState } from "react";
import api from "../services/api";

function Teste() {
  const [nomes, setNomes] = useState([]);
  const [totNomes, setTotNomes] = useState(0);
  let novoNome = "";

  useEffect(() => {
    api.get("/names").then((res) => {
      const contNames = res.data.length;
      setTotNomes(contNames);
    });
  }, [nomes]);

  return (
    <>
      <h1>Testando Hooks (Total de nomes: {totNomes})</h1>
      {nomes.map((e) => (
        <h2 key={Math.floor(Math.random() * 1000)}>{e}</h2>
      ))}
      <button
        onClick={() => {
          api.post("/names", { name: novoNome }).then((res) => {
            //cria um novo array incluindo os valores anteriores com o "...nomes" e adicionando o novo valor com "res.data.name"
            setNomes([...nomes, res.data.name]);
          });
        }}
      >
        Adicionar
      </button>
      <input
        onChange={(e) => {
          novoNome = e.target.value;
        }}
        type="text"
      />
    </>
  );
}

export default Teste;
