const routes = require('./routes')
const express = require('express')     // importando o express
const cors = require('cors')
const mongoose = require('mongoose') // importando o mongoose(MongoDB)
const app = express()

mongoose.connect('mongodb+srv://Valeriano:error404@devradar-cluster-f0t7h.mongodb.net/DevRadarDB?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

})
app.use(cors({}))                 //cors({origin:'http://localhost:3000'}) para restringir o acesso da aplicação 
app.use(express.json())          //habilitar requisições do formato 'json' p/ qlqr rota c/ express
app.use(routes)
app.listen(3333)               //definindo a rota