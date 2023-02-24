import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = (req, res) => {
    livros.find()
    //Tornando o campo autor popular.
      .populate('autor')
    //Executa devolvendo os livros.
      .exec((err, livros) => {
        res.status(200).json(livros)
  })
  }

  static listarLivrosId = (req,res) => {
    const id = req.params.id

    livros.findById(id)
    //Especificando o campo que será popularizado e o campo que será visível
    .populate('autor', 'nome')
    .exec((err, livros) =>{
      if(err){
        res.status(400).send({message: `${err.message} - livro não encontrado.`})
      }
      else{
          if(livros === null){
            res.status(400).send({ message: `${id} - Id do livro não localizado.` });
          } else {
            res.status(200).send(livros);
          }       
      }
    })
  }

  static cadastrarLivros = (req, res) => {
    const livro = new livros(req.body)

    livro.save((err)=>{
      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`})
      }else{
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (req, res) => {
    const id = req.params.id
    //Localiza pelo id e atualiza.
    // O operador $Set substitui o valor de um campo pelo valor especificado.
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
      if(!err){
        res.status(200).send({message: `${req.body} - Atualizado com sucesso.`})
      }else{
        res.status(500).send({message: `${err.message} - falha ao atualizar o livro.`})
      }
    });

  }

  static excluirLivro = (req,res) => {
    const id = req.params.id

    livros.findOneAndDelete(id, (err, livrodeletado)=>{
      if(!err){
        res.status(200).send({message: 'Livro excluído com sucesso.'})
      }
      else{
        if(!livrodeletado){
          res.status(404).send({message: `Livro de Id ${id} não encontrado`})
        }else{
          res.status(500).send({message: 'Falha ao deletar o livro.'})
        }
      }
    })
  }

  static listarLivrosEditora = (req,res) => {
    // Pegando o parâmetro editora que vai ser passado pela url
    const editora = req.query.editora
    //Filtrando somente o campo editora
    livros.find({'editora': editora}, {}, (err, livros)=> {
      res.status(200).send(livros);
    })
  }

}

export default LivroController