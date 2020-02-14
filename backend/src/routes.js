/* 
 Metodos HTTP: GET, PUT, POST, DELETE

 Tipos de Parametros:
    Query Params -> request.query (filtros, ordenação, paginação, ...)
    Route Params ->  request.params ( identificar um recurso na alteração ou remoção)
    Body -> request.body (Dados para criação ou alteração de um registro)
 */ 
// Express: micro-framework para as rotas da api
const { Router } = require('express') //requisição de apenas a função 'Router' do express
const routes = Router()
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

routes.get('/devs', DevController.index)
routes.post('/devs',DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes