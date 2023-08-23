import 'dotenv/config.js'
import express from 'express';
import routerCities from './Routers/routerCities.js';
import cors from 'cors'
import './config/database.js'

//inicializar el server
const server = express();

server.use(express.json())
server.use(cors())
server.use(express.static('public'))

//Usando el router
server.use('/api/cities', routerCities) //Se asocia el path del primer argumento, a la constante que se pase en el segundo lugar.



//peticiones
server.get('/', (req,res,next)=>{
    res.send("Servidor parado en Home")
});


//activamos el server en el puerto 3000
server.listen(process.env.PORT , ()=>{console.log(`server corriendo en puerto ${process.env.PORT}`)})