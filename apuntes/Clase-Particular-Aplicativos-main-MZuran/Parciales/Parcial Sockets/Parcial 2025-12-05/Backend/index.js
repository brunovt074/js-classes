// Paquetes instalados: -g nodemon, express, body-parser, socket.io
// Agregado al archivo "package.json" la línea --> "start": "nodemon index"

// Proyecto "Node_base"
// Desarrollo de Aplicaciones Informáticas - Proyecto de Producción - 5to Informática

// Docentes: Nicolás Facón, Matías Marchesi, Martín Rivas

// Revisión 5 - Año 2024

// Cargo librerías instaladas y necesarias
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const session = require('express-session');				// Para el manejo de las variables de sesión
const cors = require('cors');


const app = express();                                  // Inicializo express para el manejo de las peticiones

app.use(cors());            							// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

const io = require('socket.io')(server, {
	cors: {
		// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
		origin: ['http://localhost:3000',"http://localhost:3001"],            	// Permitir el origen localhost:3000
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],  	// Métodos permitidos
		credentials: true                           	// Habilitar el envío de cookies
	}
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

let tareas = [];

io.on("connection", (socket) => {

	console.log("Cliente conectado:", socket.id);

	// Unirse a sala de tareas
	socket.on("join_tareas", ({ alumnoId }) => {
		socket.join(alumnoId);
		console.log(`Cliente ${socket.id} unido a sala ${alumnoId}`);
		socket.emit("joined_OK_tareas");
	});

	// Crear tarea
	socket.on("crear_tarea", ({ creador, texto, prioridad }) => {

		const tarea = {
			id: tareas.length + 1,
			texto,
			prioridad,
			creador,
			cantidadTareas: tareas.length + 1,
			timestamp: new Date().toLocaleString(),
		};

		tareas.push(tarea);

		console.log("Se creó una nueva tarea", tarea)

		// Emitir la nueva tarea a todos en la sala
		for (const room of socket.rooms) {
			if (room !== socket.id) io.to(room).emit("nueva_tarea", tarea);
		}

		/*
		// Emitir TODAS las tareas a todos en la sala
		for (const room of socket.rooms) {
			if (room !== socket.id) io.to(room).emit("nueva_tarea", tareas);
		}
		*/
		
		// Si se completaron 5 tareas, avisar y reiniciar
		if (tareas.length >= 5) {
			io.emit("tareas_completas");
			tareas = [];
		}
	});
	
	socket.on("disconnect", () => {
		console.log("Cliente desconectado:", socket.id);
	});

	socket.on("ping", (data) => {
		console.log("Me hicieron un ping")
		console.log("El mensaje es" + data.texto)
	})


});
