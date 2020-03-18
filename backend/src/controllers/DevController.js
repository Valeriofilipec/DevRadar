//index, show, store, update & destroy, são funções basicas de um controller
const axios =  require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const devs = Dev.find()
        console.log(devs) //4DEBUG
        return response.json({devs})
    },

    async store(request, response){ 
        const { github_username , techs, latitude, longitude}= request.body 
        let dev = await Dev.findOne({github_username})  // verificar a existencia do dev, p/ evitar duplicidade 
        if(!dev){
            const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, avatar_url, bio } = apiresponse.data
            console.log(name, avatar_url, bio, github_username)//DEBUG
        
            const techsArray = parseStringAsArray (techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude,latitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs:techsArray,
                location
            }) 
        }
        return response.json(dev)
    }/*,
    async destroy( request,response){
        //atualizar dados de um dev (como nome, avatar, bio, techs & localização)
        const { github_username }= request.body
        
        try {
            let dev = await Dev.findOneAndRemove({"github_username":{$eq : {github_username}}})  // verificar a existencia do dev, p/ evitar duplicidade 
        } finally {
            console.log(dev)
            //return response.json(dev)
        }
    }*/
    
}