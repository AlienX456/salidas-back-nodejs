var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/"

const mongdb = "salidas-db"

const collection = "salidas" 



const getSalidas = (request, response) => {

  if (!(typeof request.body.fecha_inicio == 'undefined') && !(typeof request.body.fecha_final == 'undefined')){

    if (!isNaN(new Date(request.body.fecha_inicio).getTime()) && !isNaN(new Date(request.body.fecha_inicio).getTime())){

      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mongdb);
        dbo.collection(collection).find({fecha: {"$gte": request.body.fecha_inicio, "$lt": request.body.fecha_final}}).toArray(function(err, result) {
          if (err) throw err;
          db.close();
          response.status(200).json(result);
        });
      });

    }
    else{
      response.status(400).json({error:'Formato del body erroneo (Formato incorrecto de fecha)'})
    }
  }else{
    response.status(400).json({error:'Formato del body erroneo (llaves erroneas)'})
  }

}



const postSalida = (request, response) => {

    /*
     * insertar correcciones y verificaciones
     */

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

module.exports = {
    getSalidas,
    postSalida
}