function showDataHandler(req, res) {

	// req.query
	/*
		Es un objeto que se escribe directamente sobre el url del navegador.
		Se indica que comenzó un query con un "?"
		Y su sintaxis es

		clave=valor

		Si se quieren usar muchas claves, van separadas por un &

		Se debe tener en cuenta que el servidor interpretará TODOS LOS DATOS como strings
		Si se quieren usar de una forma distinta, hay que convertirlos
	*/

	// req.params
	/*
		El req.params es otro objeto que recibe el servidor el cual DEBE ESTAR CONFIGURADO CON ANTERIORIDAD
		A diferencia de los demás métodos para enviar datos, el req.params no recibe nada si no se espera nada

		La sintaxis debe ser usada tanto en el url del front como el url del back

		La sintaxis es:
			front: localhost4000/<valor>
			back: app.get(<url>/:clave, <callback>)

		La sintaxis es:
			front: localhost4000/<valor>/<segundovalor>
			back: app.get(<url>/:clave/:segundaclave, <callback>)
	*/

	res.json({
		reqQuery: req.query,
		reqParams: req.params,
		reqBody: req.body,
	})
}

/*
	Los datos enviados por url siempre van al final con un orden determinado.
	El orden es:

		<url><params><query>
*/

module.exports = { showDataHandler }