import ciudades from '../Cities/Cities.js';
import Citie from '../models/CitiesModel.js';


const {cities} = ciudades;

const controllerCities = {

    getAllCities: async (req,res,next)=>{
        
        try {
           let ciudad = await Citie.find()
           res.json({
            res:ciudad,
            success:true,
            error:null
           })
            console.log(ciudad)
        } catch (error) {
            res.json({
                succes: false,
                error: error
            })
        }
       
    },
    getCitieById: async (req, res, next) => {
        try {
            const citieId = req.params.id;
    
            const city = await Citie.findById(citieId);
    
             if (!city) {
                 res.status(404).json({
                    message: `No se ha encontrado ninguna ciudad con el Id: ${citieId}`,
                    success: false
                });
            } 
    
            res.status(200).json({
                res: city,
                success: true,
                error: null
            });
        } catch (error) {
            res.status(500).json({
                message: "No se ha encontrado ninguna ciudad",
                success: false,
                error: error
            });
        }
    },
    insertCitie: async (req, res, next)=>{
        try {
            const newCity = await Citie.create(req.body)
            res.status(201).json({
                res: newCity,
                succes:true,
                error: null
            })
            console.log(newCity)
        } catch (error) {
            res.status(500).json({
                res: "No se pudo agregar la ciudad",
                succes: false,
                error: error.message
            })
        }
        
    },
    deleteCity: async (req, res, next) =>{
        try {
            await Citie.deleteOne( {_id:req.params.id})
           res.status(200).json({
            message: 'Ciudad Eliminada con exito',
            success: true,
            error: null
           })
        } catch (error) {
            res.status(500).json({
            success: false,
            message: 'Error al eliminar la ciudad, ciudad no encontrada',
            error: error.message
            })
        }
    },
    updateCitie: async (req, res, next) => {
        try {
            const citieId = req.params.id;
            const updatedData = req.body; 
    
            const updatedCitie = await Citie.findByIdAndUpdate(citieId, updatedData, { new: true });
    
            if (!updatedCitie) {
                return res.status(404).json({
                    message: `No se encontró ninguna ciudad con el Id: ${citieId}`,
                    success: false
                });
            }
    
            res.status(200).json({
                res: updatedCitie,
                success: true,
                message: 'Ciudad actualizada exitosamente'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Error al actualizar la ciudad',
                error: error.message
            });
        }
    }

}

export default controllerCities