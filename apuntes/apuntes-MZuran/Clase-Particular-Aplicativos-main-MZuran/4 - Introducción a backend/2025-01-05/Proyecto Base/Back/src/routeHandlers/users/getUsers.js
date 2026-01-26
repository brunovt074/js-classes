const { usuarios } = require("../../usuarios.js")

function showUsersHandler(req, res) {
	res.json({arrayUsuarios: usuarios})
}

module.exports = { showUsersHandler }