const homeHandler = (req, res) => {
	console.log("Soy el homeHandler y me acabo de ejecutar")

	req.query.edad = Number(req.query.edad)

	res.json({

		query: req.query

	})
}

// Exportar
module.exports = { homeHandler }