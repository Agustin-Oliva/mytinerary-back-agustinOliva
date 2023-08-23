import express from 'express'
import controllerCities from '../Controllers/citiesController.js';



//router
const routerCities = express.Router()

routerCities.get('/', controllerCities.getAllCities  )
routerCities.get('/:id', controllerCities.getCitieById) 

routerCities.post('/', controllerCities.insertCitie)

routerCities.delete('/:id', controllerCities.deleteCity)

routerCities.put('/:id', controllerCities.updateCitie)

export default routerCities;






/* (req,res)=>{
    const citie = req.params.name.toLowerCase()//normalizar mayus y minusculas
    const result = cities.filter(e => e.name.toLowerCase() === citie)//normalizar mayus y minusculas

    if(result.length === 0){
        res.send(`No se ha encontrado ninguna ciudad con el nombre: ${req.params}`)
    }
    res.send(result) 
}*/