const express = require('express');
const {uuid} = require('uuidv4');

const app = express();
const porta = 3333;

//serve para poder receber o body do tipo json
app.use(express.json());

/**
 * Métodos HTTP
 * 
 * GET: Buscar informações no back-end
 * POST: Criar informações no back-end
 * PUT: Alterar todas as informações no back-end
 * PATCH: Alerar informações específicas no back end
 * DELETE: Deletar informações no back-end
 * 
 * Tipos de parâmetros
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Rquest Params: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

const projects = [];

app.get('/projects', (req, res) => {
  // const {title, owner} = req.query;

  // console.log(title);
  // console.log(owner);

  return res.json(projects)
})
app.post('/projects', (req, res) => {
  const {title, owner} = req.body;
  const project = {"id": uuid(), title, owner};

  projects.push(project);

  return res.json(project)
})
app.put('/projects/:id', (req, res) => {
  const {id} = req.params;
  const {title, owner} = req.body;

  //localiza o index no array através do id passado na URL
  const projectIndex = projects.findIndex(project => project.id == id);

  //se não for encontrado o índice, a varável recebe -1
  if (projectIndex < 0) {
    res.status(400).json({"error": "Project not found"})
  }

  //cria um ojeto com os novos valores
  const project = {
    id,
    title,
    owner,
  };

  //substitui os novos dados do projeto no index do projeto anterior
  projects[projectIndex] = project

  return res.json(project)
})
app.delete('/projects/:id', (req, res) => {
  const {id} = req.params;

  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0) {
    res.status(400).json({"error": "Project not found"})
  }

  //apaga o indice especificado
  projects.splice(projectIndex, 1)

  return res.status(200).json({"message": "Apagado!"});
})

app.get('/', (req, res) => {
  res.send("Home!")
})

app.listen(porta, () => {
  console.log("Rodando na porta", porta);
});