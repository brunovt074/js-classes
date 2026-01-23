/* --------------- REQ.QUERY --------------- */
/*
    El req.query es un objeto el cual se escribe en el url legible por el backend
    El query siempre va al final de la url

    Importante: La clave y el valor de los datos los define el usuario

    La sintaxis es la siguiente
        <direccion><ruta>?<query>
        recordar que el query es opcional
        La ruta y el inicio del query siempre van separados por un signo de pregunta

    La sintaxis del query en sí es la siguiente
        ?clave=valor
        Si queremos más claves y valores van separados por el signo ampersand (&)
        ?clave=valor&key=value

    Recuerden que el url SIEMPRE es un string así que todo lo que escribimos adentro
    se considera un string

    Si quisieramos converir algo de string a número, debemos hacer:
        req.query.edad = Number(req.query.edad)
*/

/* --------------- REQ.PARAMS --------------- */
/*
    Al igual que el req.query, los params son datos que se escriben en el url
    Para los params:
        La clave las define el servidor
        El valor los define el cliente

    Para que un servidor pueda recibir un param, se debe configurar con anterioridad
    NO SE PUEDE RECIBIR UN NÚMERO DISTINTO DE PARAMS AL ESPERADO

    Para que el back esté configurado para recibir un param, se debe modificar la ruta de su método de rutas
    La ruta se le debe añadir lo siguiente para recibir un param "página"
        "/req/:pagina"
    Si queremos por ejemplo recibir 1 param página y un param id es de la siguiente forma:
        "/req/:pagina/:id"

    Si queremos combinar los params con una query, hay que recordar que la query siempre va al final
    La sintaxis de una url que usa tanto query como params se ve de la siguiente forma:

    <direccion><ruta><params>?<query>
*/


/* --------------- REQ.BODY --------------- */
/*
    Es la única clave que NO se escribe en el url
    El body se pasa mediante la funcion fetch
    El navegador NO puede pasar bodies
    El método .get NO puede recibir bodies
*/

async function reqHandler(req, res) {

    // req.query.edad = Number(req.query.edad)

	res.json(
		{
            mensaje: "Hiciste un pedido al reqHandler con la siguiente data",
			query: req.query,
            body: req.body,
            params: req.params
		}
	)
}

// En commonJs del backend NO EXISTE el export
// debemos utilizar el module.exports de la siguiente manera

module.exports = { reqHandler }