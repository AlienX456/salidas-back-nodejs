let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


//CHAI HTTP
chai.use(chaiHttp);

//URL
const url = "http://localhost:"+process.env.PORT

const api_v1_url_get = "/api/v1/salidas"

const api_v1_url_post = "/api/v1/salida"



const get_json_body = {fecha_inicio:"2020-08-04", fecha_final:"2020-08-05"}


const get_esperado = [{
                        "vuelo": "AV244",
                        "fecha": "2020-08-04T20:20:10.000Z",
                        "retraso_horas": 5,
                        "destino_ciudad": "Toronto",
                        "internacional": true,
                        "aerolinea": "Air Canada",
                        "pasajeros": 100,
                        "avion": "787-7"
                     },
                     {
                        "vuelo": "AV270",
                        "fecha": "2020-08-04T20:20:10.000Z",
                        "retraso_horas": 5,
                        "destino_ciudad": "Toronto",
                        "internacional": true,
                        "aerolinea": "Air Canada",
                        "pasajeros": 100,
                        "avion": "787-7"
                     }
                     ]



const post_json_body = { 
                        vuelo: "AC235", 
                        fecha: "2020-09-04T20:20:10.000Z", 
                        retraso_horas: 5, 
                        destino_ciudad: "Toronto", 
                        internacional: true, 
                        aerolinea:"Air Canada", 
                        pasajeros: 100,
                        avion: "787-7"
                       }

const post_json_body_bad = { 
                    vuel: "AC235", 
                    fecha: "2020-09-04T20:20:10.000Z", 
                    retraso_horas: 5, 
                    destino_ciudad: "Toronto", 
                    intrnacional: true, 
                    aerolinea:"Air Canada", 
                    pasajeros: 100,
                    avion: "787-7"
                    }




                       
var app = require('../index.js')

describe('Obtener cartas de vuelo de salida: ',()=>{

    it('Obtener las cartas de prueba entre 2020-08-04 - 2020-08-05',(done)=>{
        chai.request(url)
        .get(api_v1_url_get).send(get_json_body)
        .end( function(err,res){
            expect(res).to.have.status(200)
            expect(JSON.stringify(res.body)).to.equal(JSON.stringify(get_esperado))
            done()
        }
        )
    })
})

describe('Registrar cartas de vuelo de salida: ',()=>{

    it('Recibir estado 201 al registrar una carta',(done)=>{
        chai.request(url)
        .post(api_v1_url_post).send(post_json_body)
        .end( function(err,res){
            expect(res).to.have.status(201)
            done()
        }

        )
    }
    )

    it('No permitir añadir documento sin atributos requeridos',(done)=>{
        chai.request(url)
        .post(api_v1_url_post).send(post_json_body_bad)
        .end( function(err,res){
            expect(res).to.have.status(400)
            done()
        }

        )
    }
    )


})
