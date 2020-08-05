let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

//CHAI HTTP
chai.use(chaiHttp);

//URL
const url = "http://localhost:"+process.env.PORT

const api_v1_url_get = "/api/v1/salidas"

const api_v1_url_post = "/api/v1/salida"

const get_json_body = {fecha_inicio:"2019-01-01", fecha_final:"2019-01-02"}

const get_json_body_bad = {fecha_inici:"2019-01-01", fecha_final:"2019-01-02"}

const post_json_body = { 
                        vuelo: "AC235", 
                        fecha: "2020-08-04T20:20:10.000Z", 
                        retraso_horas: 5, 
                        destino_ciudad: "Toronto", 
                        internacional: true, 
                        aerolínea:"Air Canada", 
                        Pasajeros: 100,
                        avion: "787-7"
                       }



                       
var app = require('../index.js')

describe('Obtener cartas de vuelo de salida: ',()=>{

    it('Obtener cartas dentro del rango 2019-01-01 - 2019-01-02',(done)=>{
        chai.request(url)
        .get(api_v1_url_get).send(get_json_body)
        .end( function(err,res){
            expect(res).to.have.status(200)
            expect(res.body).to.have.length(2)
            expect(res.body[0]).to.have.property("vuelo").to.be.equal("AV244")
            expect(res.body[1]).to.have.property("vuelo").to.be.equal("AV270")
            done()
        }

        )
    },

    it('Recibir bad request si el formato del body es incorrecto'),(done)=>{

        chai.request(url)
        .get(api_v1_url_get).send(get_json_body_bad)
        .end( function(err,res){
            expect(res).to.have.status(404)
            done()
        }
        )

    }
    )

    
})

describe('Registrar cartas de vuelo de salida: ',()=>{

    it('Registrar una carta',(done)=>{
        chai.request(url)
        .post(api_v1_url_post).send(post_json_body)
        .end( function(err,res){
            expect(res).to.have.status(201)
            done()
        }

        )
    }
    )
})
