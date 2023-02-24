import express from "express";
import livros from "./livros.routes.js";
import autores from './autores.routes.js'


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    //Importanto as Rotas
    livros,
    autores
  )
}

export default routes