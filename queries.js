var MongoClient = require('mongodb').MongoClient;

const user = process.env.USERMONGO

const pass = process.env.PASSMONGO

const url = "mongodb+srv://"+user+":"+pass+"@cluster0.6zcns.mongodb.net/<dbname>?retryWrites=true&w=majority"

const mongdb = "salidas-db"

const collection = "salidas"


const getConexion = (request, response) => {
  response.status(200).send()
}

const getSalidas = (request, response) => {
  
  if (!isNaN(new Date(request.params.fecha_inicio).getTime()) && !isNaN(new Date(request.params.fecha_inicio).getTime())){

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mongdb);
      dbo.collection(collection).find({fecha: {"$gte": request.params.fecha_inicio, "$lt": request.params.fecha_final}},{projection:{_id:0}}).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        response.status(200).json(result);
      });
    });

  }
  else{
    response.status(400).send()
  }


}



const postSalida = (request, response) => {

  atributos_v1 = ["vuelo","fecha","retraso_horas","destino_ciudad","internacional","aerolinea","pasajeros","avion"]

  if (JSON.stringify(atributos_v1)==JSON.stringify(Object.keys(request.body))){

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mongdb);
        var myobj = request.body;
        dbo.collection(collection).insertOne(myobj, function(err, res) {
          if (err) throw err;
          db.close();
          response.status(201).send("Carta de vuelo registrada")
        });
      });
  }
  else{
    response.status(400).send()
  }
    
}

module.exports = {
    getSalidas,
    postSalida,
    getConexion
}