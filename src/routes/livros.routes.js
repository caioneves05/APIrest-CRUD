import express from "express";
import LivroController from "../controllers/livros.controller.js";

const router = express.Router();

router

  // É IMPORTANTISSÍMO PROJETAR AS ROTAS DA MAIS ESEPECÍFICA PARA A MENOS ESPECÍFICA

  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivrosEditora)
  .get("/livros/:id", LivroController.listarLivrosId)
  .post("/livros", LivroController.cadastrarLivros)
  // Colocando os : para indicar que vai chegar um ID.
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)
  
export default router;   


// EXEMPLO DE CONSULTA POR CAMPO ESPECÍFICO :     http://localhost:3000/livros/busca?editora=Alura