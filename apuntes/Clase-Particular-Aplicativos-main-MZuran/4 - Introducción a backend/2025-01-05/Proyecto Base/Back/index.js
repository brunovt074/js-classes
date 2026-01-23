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

const app = express();									// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

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

app.get(
	'/mensaje',
	(req, res) => { res.send('Hola, este es un mensaje desde el callback'); }
);

/* Métodos de rutas */

/*
	Los 5 métodos de rutas son funciones que están guardadas dentro del objeto app.
	Estas funciones le indican al servidor qué hacer cuando se accede a cierto url de una forma determinada.
	Tienen la siguiente sintaxis:

	app.get( <url>, <callback> )

	El callback se va a ejecutar cada vez que el url sea invocado por un usuario
*/

const { showDataHandler } = require("./src/routeHandlers/showData.js")

app.get("/showData", showDataHandler);
app.get("/showData/:pagina", showDataHandler);

// 1. Usando GET, devolver el array de usuarios en el objeto res.json

const { showUsersHandler } = require("./src/routeHandlers/users/getUsers.js")

app.get("/users", showUsersHandler)

// 2. Usando POST, recibir mediante req.body un usuario nuevo para añadir. NO SE PUEDEN REPETIR usernameS
// Si los datos están bien, se meten al array
// El usuario va a tener la siguiente sintaxis:
/*
	{
		username: <nombre de usuario>,
		password: <contraseña>
	}
*/

const { signUpHandler } = require("./src/routeHandlers/users/signUp.js")
app.post("/users", signUpHandler)

// 3. Usando PUT, recibir el siguiente objeto para actualizar una contraseña
/*
	{
		userId: <numero de id>
		newPassword: <nueva contraseña>
	}
*/

const { UpdateHandler } = require("./src/routeHandlers/users/updatePasswords.js")
app.put("/users", UpdateHandler)

// 4. Usando DELETE, recibir un( userId y sacarlo del array )
/*
	{
		username: <nombre de usuario>,
		password: <contraseña>
	}
*/