
const express = require ('express')
const cors = require ('cors')
const {dbConect} = require ('./Backend-RJH/db/index')

const indexRouter = require('./Backend-RJH/routes/index')
const shirtRouter = require('./Backend-RJH/routes/shirt-routes')
const sudaderasRouter = require('./Backend-RJH/routes/sudaderas-routes')

const app = express()

dbConect()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/', indexRouter)
app.use('/api/movies', shirtRouter)
app.use('/api/series', sudaderasRouter)







app.listen(7000,() =>{
    console.log('Conectado a la base de datos')
})