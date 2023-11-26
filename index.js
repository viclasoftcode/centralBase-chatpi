const express   = require('express');
const config    = require('./config');
const app       = express();
const router    = require('./routes') 

app.use(express.json())
router(app);

app.listen(config.port,()=>{
    console.log(`La aplicación está escuchando en el puerto ${config.port}`);
});
