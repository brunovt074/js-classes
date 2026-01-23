//  Por lo general es conveniente hacer que los handlers sean funciones asíncronas

async function testHandler(req, res) {

	console.log("Alguien ejecutó el callback de test")

	res.json(
		{
			mensaje: "Esto es lo que devuelve el callback de testHandler"
		}
	)
}

// En commonJs del backend NO EXISTE el export
// debemos utilizar el module.exports de la siguiente manera

module.exports = { testHandler }