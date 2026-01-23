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
var cors = require("cors");

const app = express();									// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

app.use(cors());

const io = require('socket.io')(server, {
	cors: {
		// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
		origin: "http://localhost:3000",            	// Permitir el origen localhost:3000
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

app.get('/mensaje', (req, res) => {
    res.send('Hola, este es un mensaje desde el servidor');
});

let personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "María", apellido: "Gómez", edad: 30 },
    { nombre: "Carlos", apellido: "López", edad: 22 },
    { nombre: "Ana", apellido: "Martínez", edad: 28 },
    { nombre: "Luis", apellido: "Fernández", edad: 35 }
];



app.get('/personas', (req, res) => {
    res.json({contenido : personas});
});

app.post('/personas', (req, res) => {

	const producto = req.body

	personas.push(producto)

    res.json({contenido : personas});
});

app.put('/personas', (req, res) => {

	/*
		{
                indentificador: opcionSeleccionadaValor,
                dataNueva: {
                    nombre: nombre,
                    apellido: apellido,
                    edad: edad
                }
            }
	*/

	const dataEnviadaAlBack = req.body
	const indentificador = dataEnviadaAlBack.indentificador
	const personaActualizada = dataEnviadaAlBack.dataNueva

	personas.forEach(
		(elemento, index) => {
			if (indentificador == elemento.apellido) {
				personas[index] = personaActualizada
			}
		}
	)

    res.json({contenido : personas});
});

app.delete('/personas', (req, res) => {

	/*
		{ indentificador: opcionSeleccionadaValor, }
	*/

	const {indentificador} = req.body

	personas.forEach(
		(elemento, index) => {
			if (indentificador == elemento.apellido) {
				personas.splice(index, 1);
			}
		}
	)

    res.json({contenido : personas});
});

io.on("connection", (socket) => {
	const req = socket.request;

	// Lo ponemos acá
	io.emit("pingAll")

	// Asignar room predeterminada si no está en ninguna room
	if (!req.session.room) {
		req.session.room = "1"; // Room predeterminada
		socket.join(req.session.room);
		console.log(`Cliente conectado sin room, asignada room por defecto: ${req.session.room}`);
	}

	socket.on("announcement", (data) => {
		console.log(data)
	})

	socket.on("ping", () => {
		io.emit("pong")
	})

	socket.on("newMessage", (data) => {
		//console.log(data)
		const room = socket.request.session.room

		console.log("El mensajero está en la room", room)
		//io.emit("newDisplayMessage", data)

		io.to(room).emit("newDisplayMessage", data)
	})

	socket.on('joinRoom', data => {

		console.log("El socket estaba en la room:", req.session.room)

		if (req.session.room != undefined && req.session.room.length > 0) { socket.leave(req.session.room); }

		req.session.room = data.room;
		socket.join(req.session.room);

		io.to(req.session.room).emit('chat-messages', { user: req.session.user, room: req.session.room });

		console.log("El socket ahora está en la room:", req.session.room)
	});

});