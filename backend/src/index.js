const routes = require('./routes')
const express = require('express')     // importando o express
const cors = require('cors')
const mongoose = require('mongoose') // importando o mongoose(MongoDB)
require('dotenv').config() // Ocultar Credenciais do DB
const app = express()

console.log()
mongoose.connect(process.env.DB_CONNECT,{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

})
app.use(cors())                 //cors({origin:'http://localhost:3000'}) para restringir o acesso da aplicação 
app.use(express.json())          //habilitar requisições do formato 'json' p/ qlqr rota c/ express
app.use(routes)
app.listen(3333)               //ouvindo a porta 33333