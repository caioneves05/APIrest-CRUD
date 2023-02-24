import express from "express";
import autorController from "../controllers/autor.controller.js";

const router = express.Router();

router
  .get("/autores", autorController.listarautores)
  .get("/autores/:id", autorController.listarAutoresId)
  .post("/autores", autorController.cadastrarAutores)
  // Colocando os : para indicar que vai chegar um ID.
  .put("/autores/:id", autorController.atualizarAutor)
  .delete("/autores/:id", autorController.excluirAutor)
  
export default router;   