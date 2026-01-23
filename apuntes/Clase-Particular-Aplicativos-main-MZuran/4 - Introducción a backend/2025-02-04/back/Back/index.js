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

/*
	Definimos las rutas de nuestro servidor y cómo respondemos ante ellas

	Los métodos de rutas

	app.get()
	app.post()
	app.put()
	app.delete()

	Los 4 reciben los mismos parámetros
	Como ejemplo, vamos a usar el app.get

	app.get(
		<ruta>,
		<callback>
	)

	¿Qué hace el app.get?
	Ejecuta el callback según se lo indique la ruta
	Esto quiere decir que cada vez que un usuario acceda a nuestro url con esta ruta, entonces el callback se ejecuta

	La función callback siempre debe recibir los parámetros (req, res)
*/

/*
	Casos de uso de las rutas

	app.get()
		Se usa cuando el usuario le pide info de sólo lectura al servidor

	app.post()
		Se usa cuando el usuario "postea" informacion.
		Se usa cuando el usuario le envía informacion al servidor.

	app.put()
		Se usa cuando el usuario quiere modificar informacion que guarda el servidor

	app.delete()
		Se usa cuando el usuario quiere que el servidor borre informacion que guarda
*/

// Para importar (NUNCA OLVIDAR EL .JS)
const { mensajeHandler } = require("./src/routeHandlers/mensajeHandler.js")
const { reqHandler } = require("./src/routeHandlers/reqHandler.js")

app.get('/mensaje', mensajeHandler);

app.get('/pruebaReq', reqHandler)
app.get('/pruebaReq/:edad', reqHandler)
app.get('/pruebaReq/:edad/:id', reqHandler)

app.post('/pruebaReq', reqHandler)

// Api con el array de personas
const { personasHandler } = require("./src/routeHandlers/personasHandler.js")
const { personasPostHandler } = require("./src/routeHandlers/personasPostHandler.js")

app.get("/personas", personasHandler)		// Lee personas
app.post("/personas", personasPostHandler) 	// Agrega personas

// Hacer un app.get que devuelva a una persona segun su posicion
// app.get("/personas/:posicion", <callback>)

// Hacer un app.delete que borre a una persona segun su posicion
// app.delete("/personas/:posicion", <callback>)
// Si no sabes como borrar una posicion especifica de un array preguntar a gpt

// Hacer un app.put que modifique a una persona según su posicion en el array
// app.put("/personas/:posicion", <handler>)
// Esta ruta tambien recibe en el req.body una persona igual que el post