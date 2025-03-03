const express = require('express') 

const app = express()

app.use(express.static('public'))
// app.use(express.static('views'))

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/views/home.html');
  })

  app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html');
  })

  app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works.html');
  })

  app.listen(3000, ()=>{ 
    console.log('Servidor activo en el puerto 3000')
  })