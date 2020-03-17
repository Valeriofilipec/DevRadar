const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){//buscar todos devs no de raio 10 km & filtrar por tecnologias 
        const { latitude, longitude, techs} = request.querty
        const techsArray = parseStringAsArray(techs)
        const devs = await  Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance : 10000
                }
            }
        })

        console.log(latitude, longitude, techsArray)//DEBUG
        return response.json({devs})
    }

    //TPC
    /*
    ansyc update(){
        //atualizar dados de um dev (como nome, avatar, bio, techs & localização,  )
    }
    ansyc destroy(){
        // apagar um dev
    }
    */
}