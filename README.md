# MICROSERVICIO DE SALIDAS

## Tecnologias

  * Node JS
  * Mocha Chai
  * AWS Pipeline (Despliegue)
  * Circle CI (Chequeo tests)
 
## Estandar V1
  * GET
        
```
/api/v1/salida

```
 * POST
 ```
/api/v1/salida

```


## GET "/Api/v1/salida/{fecha_inicio}/{fecha_final}" Resquest Response Body (200)
```
[
{
    vuelo: String
    fecha: String "AAAA-MM-DDTHH:MM:SS.000Z"
    retraso_horas: Number
    destino_ciudad: String
    internacional: True|False
    aerolínea:String
    Pasajeros: Number
    avion: String
{,
...
]
```
## POST "/Api/v1/salida" Request Body
```
{
    vuelo: String
    fecha: String "AAAA-MM-DDTHH:MM:SS.000Z"
    retraso_horas: Number
    destino_ciudad: String
    internacional: True|False
    aerolinea:String
    pasajeros: Number
    avion: String
{
```
## POST "/Api/v1/salida" Response Status
    HTTP STATUS : 201 Created
