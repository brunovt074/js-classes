const { arrayTareas } = require("../utils/arrayTareas.js")

function leerTareas(req, res) {
	res.json(arrayTareas)
}

module.exports = { leerTareas }