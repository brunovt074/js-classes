const { usuarios } = require("../../usuarios.js")

function signUpHandler(req, res) {
	const username = req.body.username
	const password = req.body.password

	if ( !username || !password ) {

		res.json({
			mensaje: "No me llenaste bien los datos"
		})

	}	else	{

		usuarios.push(
			{ username, password, id: usuarios.length }
		)

		res.json({
			mensaje: "Hola soy el post",
			username: username,
			password: password
		})
	}

}

module.exports = {signUpHandler}