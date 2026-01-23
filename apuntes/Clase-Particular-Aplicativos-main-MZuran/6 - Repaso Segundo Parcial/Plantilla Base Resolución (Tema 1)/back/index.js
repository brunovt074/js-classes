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

// Suponemos que las tareas se guardan de esta forma
const { arrayTareas } = require("./src/utils/arrayTareas.js");
const { leerRutas } = require('./src/routeHandlers/root.js');
const { leerTareas } = require('./src/routeHandlers/leerTareas.js');
const { crearTarea } = require('./src/routeHandlers/crearTarea.js');

app.get("/", leerRutas)
app.get("/tareas", leerTareas)
app.post("/crearTarea", crearTarea)

/*
		Data para la tareaCreada debe ser:
		{
			nombre,
			responsable
		}

		Data para la tareaModificada debe ser:
		{
			nombre,
			responsable,
			estado
		}
*/

io.on("connection", (socket) => {

	// Creacion de tareas
	socket.on('tareaCreada', data => {
		console.log("Tarea Creada: ", data)
		io.emit('avisoCreacion', { event: "Creacion de tarea", mensaje: data })
	})

	// Modificacion de tareas
	socket.on('tareaModificada', data => {

		//	Nos fijamos que estén los tres campos, si falta uno, return
		//	Si NO EXISTE el nombre o NO EXISTE el responsable o NO EXISTE el estado...
		if (!data.nombre || !data.responsable || !data.estado) { return }

		const nombreTarea = data.nombre

		// El findIndex devuelve -1 si no existe
		const posicionTarea = arrayTareas.findIndex(tarea => tarea.nombre == nombreTarea)

		// Si la tarea existe en el array...
		if (posicionTarea != -1) {
			arrayTareas[posicionTarea] = data
			io.emit('avisoModificación', { event: "Creacion de tarea", mensaje: data })
		}
		
	})

});