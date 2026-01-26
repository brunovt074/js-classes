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
	2 objetos importantes:

	io - Representa a todas las conexiones activas (los sockets)
	socket - Representa una conexion en particular

	2 métodos importantes:

	.emit()

		Envía un mensaje al otro lado de la conexión. Recibe 1 o 2 parámetros;
			a. Es una string que simboliza el nombre o "id" del evento emitido

			2. (Opcional) Es un objeto que viaja al otro lado de la conexión junto con el mensaje emitido

	.on()

		Hace que quien lo use esté "escuchando" o esperando cierto mensaje con un id determinado
		Recibe 2 parámetros obligatorios;
			a. Es el nombre o "id" del evento al cuál se está escuchando (debe ser el mismo del emit)

			b. El callback a ejecutar cuando se recibe la señal
			   Este callback puede ser una funcion flecha o una funcion definida en otro archivo
			   Este callback recibe como parámetro el objeto el cual se manda en el emit

	.to()

		Va después que el io o el socket pero antes del .emit
		Lo que hace es que el emit sólo le llegue a las conexiones de la sala indicada
		socket.to("futbolDomingo").emit(mensaje)
*/

const { mensajes } = require("./src/utils/arrayMensajes.js")

io.on("connection", (socket) => {
	const req = socket.request;

	// Cuando el usuario hace click en el boton de enviar
	socket.on("nuevoMensaje", (data) => {

		// Si no estaba en una sala, te mete en la default
		// Si no queremos rooms, esto se puede borrar
		if (!req.session.room) { 
			req.session.room = "roomDefault" 
			socket.join(req.session.room);
		}
		
		// Si no queremos rooms, esto se puede borrar
		data.room = req.session.room

		// Añade tu mensaje al array de mensajes
		mensajes.push(data)

		console.log(mensajes)

		// Filtramos el array de mensajes para que SÓLO salgan los que estén en la req.session.room
		// Si no queremos rooms directamente devolvemos el array de mensajes sin filtrar
		const mensajesFiltrados = mensajes.filter(
			elemento => elemento.room == req.session.room
		)

		// Envia por sockets los mensajes al usuario
		io.to(req.session.room).emit("nuevoMensajeServidor", mensajesFiltrados)
	})

	// Si el usuario hace click en el botón de cambiar salas
	socket.on('joinRoom', data => {

		console.log("El socket estaba en la room:", req.session.room)

		// Nos salimos de la sala original
		if (req.session.room != undefined && req.session.room.length > 0) { socket.leave(req.session.room); }

		// Entramos a la nueva sala
		req.session.room = data.room;
		socket.join(req.session.room);

		console.log("El socket ahora está en la room:", req.session.room)
	});
	
});

// array de salas: "roomDefault"

/*
	
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

*/