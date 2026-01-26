function mensajeHandler(req, res){
	console.log("Soy el callback y alguien accedió a la url con la ruta /mensaje")
	res.send('Hola, este es un mensaje desde el servidor');
}

// Para exportar
module.exports = { mensajeHandler }