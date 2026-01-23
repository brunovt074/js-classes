//  Por lo general es conveniente hacer que los handlers sean funciones asíncronas

const { realizarQuery } = require("../../modulos/mysql")



async function sqlHandler(req, res) {

    const query = "SHOW TABLES;"
    const resultados = await realizarQuery(query)

	res.json(
		{
			mensaje: "Esto es lo que devuelve el callback de sqlHandler",
            query: query,
            resultados: resultados
		}
	)
}

// En commonJs del backend NO EXISTE el export
// debemos utilizar el module.exports de la siguiente manera

module.exports = { sqlHandler }