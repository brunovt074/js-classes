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
		//origin: ['http://localhost:3000',"http://localhost:3001"],            	// Permitir el origen localhost:3000
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

app.get('/mensaje', (req, res) => {
    res.send('Hola, este es un mensaje desde el servidor');
});

/* -------------------------- IMPORTAR CON COMMONJS -------------------------- */
//	En commonJs NO EXISTE el import
//	En su lugar debemos usar la función require() de la siguiente manera
//	NUNCA DEBEMOS OLVIDAR PONER EL .js
/*
	./	(Carpeta actual)
	../	(Carpeta arriba)
*/

const { testHandler } = require("./src/routeHandlers/testHandler.js");
const { reqHandler } = require('./src/routeHandlers/reqHandler.js');
const { sqlHandler } = require('./src/routeHandlers/sqlHandler.js');
const { handlerGetUsuarios } = require('./src/routeHandlers/getUsuarios.js');
const { handlerPostUsuarios } = require('./src/routeHandlers/postUsuarios.js');
const { handlerPutUsuarios } = require('./src/routeHandlers/putUsuarios.js');

/* -------------------------- MÉTODOS DE RUTAS -------------------------- */
/*
	Son métodos (funciones) que guarda el objeto app.
	Todas reciben 2 parámetros:

	1)	Una ruta (String)
	2)	Callback/Handler (Funciones)

	SIEMPRE que nos referimos a un "Callback" estamos hablando de "una funcion que se ejecuta
	según alguna condición"

	Notación del método get()

	app.get(<ruta>, <callback>)

	El callback es una función que se ejecuta CADA VEZ que algún usuario cualquiera hace una peticion a la ruta
	El callback recibe 2 parámetros:
		1. req
		2. res

	Siempre que usemos un navegador para ir a un endpoint de una dirección, se hace en modo GET

	CASOS DE USO:

	app.get()
		Se usa cuando el usuario quiere "leer" datos del servidor
		La información viaja desde el servidor al cliente
		El .get es el método que usan los navegadores cuando pegamos un link
		El .get no puede recibir req.body

	app.post()
		Se usa cuando el usuario quiere enviar información al servidor. (Comúnmente llamado "postear")
		La información viaja desde el cliente al servidor (el servidor puede responder)

	app.put()
		Se usa cuando el usario quiere editar información que esté almacenando la DB del backend

	app.delete()
		Se usa cuando el usuario quiere que el servidor elimine información almacenada
		(El servidor el 99.9999999999999% de las veces no lo borra de todos modos)
*/

app.get("/test", testHandler)

app.get("/req", reqHandler)
app.get("/req/:nombre", reqHandler)
app.get("/req/:nombre/:apellido", reqHandler)

/*
	Actividad:
	Hacer uno de cada método de ruta para gestionar un array de usuarios

	.get("/usuarios", <callback>)
		Devolver dentro de un JSON todo el array de usuarios al usuario que lo pidió

	.post("/usuarios", <callback>)
		Va a recibir por el req.body el nombre, apellido y edad de un nuevo usuario
		Si el usuario no otorga las 3 cosas, no se añade nada
		El backend va a meter el usuario nuevo dentro del array de usuarios
		Vamos a usar array.push()
		Devuelve en JSON el nuevo array

	.put("/usuarios/:posicion", <callback>)
		Va a recibir por el req.body el nombre, apellido y edad de un usuario
		El backend va a reemplazar los datos del usuario según la posicion

	.delete("/usuarios/:posicion", <callback>)
		No recibe nada por el req.body
		Borra el usuario según la posicion
		array.splice()
*/

app.get("/usuarios", handlerGetUsuarios)
app.post("/usuarios", handlerPostUsuarios)
app.put("/usuarios/:posicion", handlerPutUsuarios)