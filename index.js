//DEPENDENCIAS
const express = require('express')
const app = express()

//QUERIES
const db = require('./queries')

//PORT FOR SERVE
const port = process.env.PORT

//API OPERATIONS

app.get('/api/v1/salidas',db.getSalidas)
app.post('/api/v1/salida',db.postSalida)

//INIT API
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})