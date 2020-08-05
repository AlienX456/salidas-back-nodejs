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


## GET "/Api/v1/salida" Resquest Body
```json
{
    fecha_inicio: String "AAAA-MM-DD"
    fecha_final: String "AAAA-MM-DD"
{
```
## GET "/Api/v1/salida" Response Body (200)
```json
{
    vuelo: String
    fecha: String "AAAA-MM-DDTHH:MM:SS.000Z"
    retraso_horas: Number
    destino_ciudad: String
    internacional: True|False
    aerolínea:String
    Pasajeros: Number
    avion: String
{
```
## POST "/Api/v1/salida" Request Body
```json
{
    vuelo: String
    fecha: String "AAAA-MM-DDTHH:MM:SS.000Z"
    retraso_horas: Number
    destino_ciudad: String
    internacional: True|False
    aerolínea:String
    Pasajeros: Number
    avion: String
{
```
## POST "/Api/v1/salida" Response Status
    HTTP STATUS : 201 Created