//index, show, store, update, destroy
const axios =  require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async index(request, response){
        const devs = Dev.find()
        return response.json(devs)
    },

    async store(request, response){ 
        const { github_username, techs, latitude, longitude}= request.body 
        let dev = await Dev.findOne({github_username}) // verificar a existencia do dev, p/ evitar duplicidade 
        if(!dev){
            const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
        const { name = login, avatar_url, bio } = apiresponse.data
        console.log(name, avatar_url, bio, github_username)
    
        const techsArray = techs.split(',').map(tech => tech.trim())
    
        const location = {
            type: 'Point',
            coordinates: [longitude,latitude ]
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
    } 

     
}