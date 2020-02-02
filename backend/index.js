/*  Express: micro-framework para as rotas da api */
const express = require('express')  // importando o express
const app = express()  

app.get('/',(request, response)=>{
    return response.json({message: 'Hello World'})
})
app.listen(6269)    //definindo a rota
