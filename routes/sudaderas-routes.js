const express = require('express');
const router = express.Router();
const Sudaderas = require ('../models/sudaderas')

// Ruta para mostrar las sudaderas que hay en la base de datos
router.get('/', async (req,res,next) =>{
    try {
        const sudadera = await Sudaderas.find({});
        if(!sudadera){
            console.log('No hay sudaderas')
        } else res.status(200).json({data: sudadera})
    } catch (error) {
        console.error(error)
    }
})

router.get('/:sudaderaId' , async (req,res,next) =>{
    const {sudaderaId} = req.params;
    try{
        const sudadera = await Sudaderas.findById(sudaderaId)
        if(!sudaderaId) {
            console.log('No hay sudadera con este ID')
        } else res.status(200).json({ data:sudadera})
    }catch(error){
        console.error(error)
    }
})

module.exports = router