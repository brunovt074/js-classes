const reqHandler = (req, res) => {

    // req.query
    // req.body
    // req.params

    // res.send()
    // Escribimos o HTML o texto plano
    // Al cliente se le enviará todo lo escrito entre paréntesis

    // res.json()
    // Escribimos un objeto de javaScript
    // Por lo general siempre vamos a usar este en lugar de send

	res.json(
		{
			mensaje: "Estás viendo el reqHandler",
			query: req.query,
			params: req.params,
			body: req.body
		}
	)
}

// Exportar
module.exports = { reqHandler }