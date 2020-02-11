/*  Express: micro-framework para as rotas da api */
const { Router } = require('express') //requisição de apenas a função 'Router' do express
const routes = Router()

const axios =  require('axios')
const Dev = require('./models/Dev')
/* 
 Metodos HTTP: GET, PUT, POST, DELETE

 Tipos de Parametros:
    Query Params -> request.query (filtros, ordenação, paginação, ...)
    Route Params ->  request.params ( identificar um recurso na alteração ou remoção)
    Body -> request.body (Dados para criação ou alteração de um registro)
 */
routes.post('/devs',async (request, response)=>{ // async ?
    const { github_username, techs}= request.body 
    const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`) //await??
    const { name = login, avatar_url, bio } = apiresponse.data
    console.log(name, avatar_url, bio, github_username)

    const techsArray = techs.split(',').map(tech => tech.trim())
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs:techsArray
    })

    return response.json(dev)
})

module.exports = routes