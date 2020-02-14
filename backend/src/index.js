const routes = require('./routes')
const express = require('express')  // importando o express

const mongoose = require('mongoose') // importando o mongoose(MongoDB)

mongoose.connect('mongodb+srv://Valeriano:error404@devradar-cluster-f0t7h.mongodb.net/DevRadarDB?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

const app = express()
app.use(express.json()) //habilitar requisições do formato 'json' p/ qlqr rota c/ express
app.use(routes)
app.listen(6269)    //definindo a rota
