const mongoose = require ('mongoose')

const dbConect = async () =>{
    try {
        mongoose.connect('mongodb://localhost:27017/Rute')
    } catch (error) {
        console.error(error)
        next(error)
    }
}

module.exports= {dbConect}