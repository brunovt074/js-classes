// Paquetes instalados: -g nodemon, express, body-parser, mysql2, socket.io
// Agregado al archivo "package.json" la línea --> "start": "nodemon index"

// Proyecto "Node_base"
// Desarrollo de Aplicaciones Informáticas - Proyecto de Producción - 5to Informática

// Docentes: Nicolás Facón, Matías Marchesi, Martín Rivas

// Revisión 5 - Año 2024

// Cargo librerías instaladas y necesarias
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql');				// Añado el archivo mysql.js presente en la carpeta módulos
const session = require('express-session');				// Para el manejo de las variables de sesión
const cors = require('cors');

const app = express();									// Inicializo express para el manejo de las peticiones

const configCors = {
	// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
	origin: "http://localhost:3000",            	// Permitir el origen localhost:3000
	methods: ["GET", "POST", "PUT", "DELETE"],  	// Métodos permitidos
	credentials: true                           	// Habilitar el envío de cookies
}

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());
app.use(cors(configCors));

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;



const io = require('socket.io')(server, {
	cors: configCors
});

const sessionMiddleware = session({
	//Elegir tu propia key secreta
	secret: "supersarasa",
	resave: false,
	saveUninitialized: false
});

app.use(sessionMiddleware);

io.use((socket, next) => {
	sessionMiddleware(socket.request, {}, next);
});

// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)

function homeCallback(req, res) {

	console.log("Se ejecutó el callback")

	res.json(
		{ mensaje: "Esto es home" }
	)
}

// El callback "depende" de la ruta
app.get("/home", homeCallback)

/*
	El callback depende de el array de dependencias

	useEffect(
		callback,
		[]
	)
*/

/*
	2 objetos importantes:

	io - Representa a todas las conexiones activas (los sockets) y es exclusivo del backend
	socket - Representa una conexion en particular

	Métodos de cada uno

		.on()
			Recibe 2 parámetros:
				1. Es una "id" de un evento (en string)
				2. Callback

			El callback se ejecutará cada vez que el "otro lado de la conexión" emite un evento con un determinado id

			io.on(<id>, <callback>)
			socket.on(<id>, <callback>)

		.emit()
			Recibe 1 o 2 parámetros:
				1. (Obligatorio) es la "id" de un evento el cual se va a emitir (en string)
				2. (Opcional) es un objeto el cual se puede emitir junto con la id del evento para mandar datos en el socket

			Si se mandan datos, el callback del .on los recibirá como su primer parámetro

			io.emit(<id>)
			io.emit(<id>, <data>)
			socket.emit(<id>)
			socket.emit(<id>, <data>)

*/

/*
	Actividad de la sala de chat

	1. Se tendrá un array llamado arrayMensajes el cual comienza vacío (BACKEND)

	2. Cada "mensaje" que esté guardando el array tendrá la siguiente sintaxis: (GENERAL)
		{
			text: <string>,
			userName: <string>
		}

	3. 	El cliente envía mensajes de la siguiente forma: (FRONTEND)
		- Habrá un componente comun llamado "messageInput"
		- messageInput tendrá:
			1. 	Un input donde escribir texto
			2. 	Un botón vinculado al input que diga "enviar"

	4.	Modificar el messageInput para que haga lo siguiente: (FRONTEND)
			1.	Hacer que reciba por prop un socket
			2.	Hacer que cuando carga por primera vez (useEffect sin dependencias), se le haga un prompt al usuario por su nombre
				y se guarde en una variable de estado
			3.	Hacer que el botón haga un socket.emit con id de "newMessage" y cuya data sea:
					{
						text: <lo escrito en input>,
						userName: <el nombre de usuario del prompt>
					}
	
	5.	Hacer que el servidor esté escuchando/esperando (.on) con id de "newMessage" desde una sóla conexión
		Hacer que su callback haga lo siguiente:
			1.	Hacer que los datos recibidos se pusheen a arrayMensajes (array.push)
			2.	Hacer que haga a todas las conexiones activas un emit con id de "newMessageServer" el cual mande el arrayMensajes

	6.	Hacer en el frontend un componente común llamado messageRender
		El componente tendrá un socketProp.on el cual esté escuchando al "newMessageServer"
		Su callback hará lo siguiente:
			1.	Guardará los datos recibidos dentro de una variable de estado llamada "arrayMensajesFront"
			2.	Hará un console.log de la variable de estado
	
	7.	Hacer que el messageRender haga un array.map del arrayMensajesFront de modo que se muestre en pantalla cada mensaje
		Cada mensaje tendrá la siguiente sintaxis:
		<p> <b> {nombre de usuario}:</b> {texto} </p>
*/
let arrayMensajes = []

// El io.on SÓLO se usa en connection
io.on("connection", (socket) => {
	// acá adentro

	socket.on("ping", (datosEnviados) => {
		console.log("Pingearon")
		console.log(datosEnviados)
		io.emit("pong", datosEnviados)
	})

	socket.on("newMessage", (data) => {
		arrayMensajes.push(data)
		// console.log("Se ejecuto el newMessage", arrayMensajes)
		io.emit("newMessageServer", arrayMensajes)
	})

	// socket.emit("ping")

});