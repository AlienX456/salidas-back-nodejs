//DEPENDENCIAS
const express = require('express')
const app = express()
app.use(express.json())
//QUERIES
const db = require('./queries')

//PORT FOR SERVE
const port = 5000

//API OPERATIONS
app.get('/api/v1/salida',db.getConexion)
app.get('/api/v1/salida/:fecha_inicio/:fecha_final',db.getSalidas)
app.post('/api/v1/salida',db.postSalida)

//INIT API
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})