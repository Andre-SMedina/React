import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";

export default function Cargos() {
  const [projects, setProjects] = useState([]);
  const [atualizar, setAtualizar] = useState("");
  useEffect(() => {
    api.get("/projects").then((res) => {
      setProjects(res.data);
    });
  }, [atualizar]);

  let newProject = { title: "vazio", owner: "vazio" };

  function handleAddFunc() {
    //cria um novo array adicionando os itens anteriores
    api.post("/projects", newProject);
    setAtualizar(Date.now().toString());
    // setProjects([...projects, newProject]);
  }
  return (
    <>
      <h1>Projetos</h1>
      <ul>
        {projects.map((e) => (
          <li key={Math.floor(Math.random() * 1000)}>
            Título: {e.title} / Criador: {e.owner}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddFunc}>
        Adicionar
      </button>
      <input
        type="text"
        onChange={(e) => {
          newProject.title = e.target.value;
        }}
        placeholder="Título"
      />{" "}
      <input
        type="text"
        onChange={(e) => {
          newProject.owner = e.target.value;
        }}
        placeholder="Criador"
      />
    </>
  );
}
