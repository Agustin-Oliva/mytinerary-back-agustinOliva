import 'dotenv/config.js'
import '../../config/database.js'
import Citie from '../CitiesModel.js'
import citieObj from "../../Cities/Cities.js"
const {cities} = citieObj



Citie.insertMany(cities)
    .then(console.log('Cities Stored correctly'))
    .catch(error => console.log(error))
