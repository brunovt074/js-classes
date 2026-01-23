
/*
    req.query

    El req.query es un objeto que se escribe directamente en la url de la peticion
    El objeto SIEMPRE va al final del url y sabemos que comenzó el query cuando vemos un símbolo
    de pregunta "?"

    La sintaxis del objeto es la siguiente

    ?clave=valor

    Si queremos varios parámetros entonces van separados por un ampersand "&"

    ?nombre=matias&apellido=zuran

    Hay que tener en cuenta que CUALQUIER COSA QUE SE PASE POR AQUÍ será generalmente interpretada como un string
*/

/*
    req.params

    Es otro objeto que se escribe (parcialmente) en la url de la peticion
    Los params van SIEMPRE después de una barra diagonal "/" y antes que el query

    La sintaxis de los params está dada tanto por back como por el front
    El back, cuando se define la ruta, escribe las claves después de poner dos puntos "/:"
    El front, cuando hace la peticion, escribe los valores de las claves depués de cada barra "/"

    Una diferencia que tiene con el query, es que los params SÓLO SE PUEDEN RECIBIR SI ESTÁN CONFIGURADOS
*/

/*
    req.body
*/

function reqRouteHandler(req, res) {

    if (req.query.edad) {
        req.query.edad = Number(req.query.edad)
    }

    res.json({
        mensaje: "Hola soy un objeto",
        body: req.body,
        query: req.query,
        params: req.params
    })
}

module.exports = { reqRouteHandler }