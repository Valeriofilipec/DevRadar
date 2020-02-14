const Dev = require('../models/Dev')

module.exports = {
    async index(resquest, response){
        console.log(Request.query)
        //buscar todos devs no de raio 10 km
        //filtrar por tecnologias 
        return response.json({devs: []})
    } 
}