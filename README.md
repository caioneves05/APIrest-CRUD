# API REST com MongoDB, Express e Mongoose

Esta API RESTful é baseada em Create, Read, Update e Delete (CRUD) e utiliza o MongoDB como banco de dados da aplicação. O Mongoose é utilizado como ODM (Object-Document Mapping) para facilitar a interação com o banco de dados.

## Instalação

Antes de executar a API, certifique-se de ter instalado o Node.js, o MongoDB e o gerenciador de pacotes npm.

1. Clone este repositório em sua máquina:

```
git clone https://github.com/caioneves05/APIrest-CRUD.git
```

2. Instale as dependências do projeto:

```
npm install
npm install mongoose express
```

3. Certifique-se de que o MongoDB esteja em execução em sua máquina local.

## Utilização

Para iniciar a API, execute o seguinte comando:

```
npm run dev
```


A API será executada em `http://localhost:3000`.

### Endpoints disponíveis

| Método HTTP | Endpoint      | Descrição                             |
| ----------- | ------------- | ------------------------------------- |
| GET         | /             | Retorna uma mensagem de boas-vindas.  |
| GET         | /documentos   | Retorna todos os documentos do banco. |
| GET         | /documentos/:id | Retorna um documento específico do banco. |
| POST        | /documentos   | Cria um novo documento no banco.      |
| PUT         | /documentos/:id | Atualiza um documento existente no banco. |
| DELETE      | /documentos/:id | Remove um documento existente do banco. |

Para mais informações sobre como utilizar a API, consulte a documentação disponível em `http://localhost:3000/docs`.

## Contribuindo

1. Crie um fork deste repositório
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Envie a sua branch (`git push origin feature/nova-feature`)
5. Abra uma Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.
