import autores from '../models/Autor.js';

class autorController {

    static listarautores = (req, res) => {
        autores.find((err, autores)=>{
          res.status(200).json(autores)
        })
    }
    
      static listarAutoresId = (req,res) => {
        const id = req.params.id
    
        autores.findById(id, (err, autores) =>{
          if(err){
            res.status(400).send({message: `${err.message} - autor não encontrado.`})
          }
          else{
              if(autores === null){
                res.status(400).send({ message: `${id} - Id do autor não localizado.` });
              } else {
                res.status(200).send(autores);
              }       
          }
        })
      }
    
      static cadastrarAutores = (req, res) => {
        const autor = new autores(req.body)
    
        autor.save((err)=>{
          if(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar o autor.`})
          }else{
            res.status(201).send(autor.toJSON())
          }
        })
      }
    
      static atualizarAutor = (req, res) => {
        const id = req.params.id
        //Localiza pelo id e atualiza.
        // O operador $Set substitui o valor de um campo pelo valor especificado.
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
          if(!err){
            res.status(200).send({message: `${req.body} - Atualizado com sucesso.`})
          }else{
            res.status(500).send({message: `${err.message} - falha ao atualizar o autor.`})
          }
        });
    
      }
    
      static excluirAutor = (req,res) => {
        const id = req.params.id
    
        autores.findOneAndDelete(id, (err, autordeletado)=>{
          if(!err){
            res.status(200).send({message: 'autor excluído com sucesso.'})
          }
          else{
            if(!autordeletado){
              res.status(404).send({message: `autor de Id ${id} não encontrado`})
            }else{
              res.status(500).send({message: 'Falha ao deletar oautoro.'})
            }
          }
        })
      }
}

export default autorController;