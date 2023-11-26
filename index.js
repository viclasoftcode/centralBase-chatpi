const express = require('express');

const app = express();

app.use('/', function(req,res){
    res.send('esta es la central de chatpi')
})

app.listen(8080);
console.log('La aplicacion se escucha en el puerto 8080');