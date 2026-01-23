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

// Importar
// const {<nombre>} = require(<ruta de importacion>)
const { reqHandler } = require("./src/routeHandlers/reqHandler.js")
const { homeHandler } = require("./src/routeHandlers/homeHandler.js");
const { getUsuariosHandler } = require('./src/routeHandlers/getUsuariosHandler.js');
const { postUsuariosHandler } = require('./src/routeHandlers/postUsuariosHandler.js');
const { putUsuariosHandler } = require('./src/routeHandlers/putUsuariosHandler.js');
const { deleteUsuariosHandler } = require('./src/routeHandlers/deleteUsuariosHandler.js');

/*
	../		Ir una carpeta para arriba
	./		Es la carpeta actual
*/

/*
	app es el "cerebro" de nuestro servidor backend

	Si por algun motivo muere o se sobreesecribe la variable app, nuestro servidor se rompe
	MUCHISIMO CUIDADO CUANDO TOCAN LA VARIABLE APP

	Un método no es ni más ni menos que una funcion guardada dentro de un objeto

	Nuestra variable app es un objeto y como sabemos que app tiene métodos, entonces sabemos que app
	tiene funciones dentro suyo

	Los metodos que nosotros veremos hoy son:

		app.get()
		app.post()
		app.put()
		app.delete()

	Son llamados los "métodos de rutas" para nuestra aplicacion
*/

/*
	app.get()

	Es un método que recibe 2 parámetros:
		1) Es una ruta pasada como string la cual se anida en el url del backend
		2) Callback

	app.get(<ruta del url>, <callback>)
	app.get("/home", () => {})

	El callback debe en sí recibir 2 parámetros:
		1. req
		2. res
*/

app.get("/home", homeHandler)

/*
	Parametro req.query
	contiene toda la informacion que el servidor puede conseguir del cliente que hizo la solicitud

	req.query
		SIEMPRE VA AL FINAL DEL URL
		Es información que se escribe directamente sobre el url la cual el servidor tiene acceso
		Es un objeto con una sintaxis especial:

		<url>?<clave>=<valor>

		Si queremos escribir más que una sola clave y valor entonces usamos el ampersand "&"

		<url>?<clave>=<valor>&<clave>=<valor>

		Hay que destacar que todos los datos escritos en el req.query serán tomados como string
*/

/*
	Parámetro req.params

	Es otro tipo de parámetro que se escribe sobre el link
	Va despues del url pero antes que el query

	La sintaxis se define tanto en front como en el back:
		a. El cliente desde el lado del front escribe el "valor"
		b. El servidor desde el lado del back escribe la "clave"

	Para recibir un param, entonces el servidor debe especificarlo
	NO SE PUEDE RECIBIR UN PARAM QUE NO SE PIDIO
	Y NO SE PUEDE RECIBIR UN NÚMERO DISTINTO DE PARAMS PEDIDOS

	Para que el servidor espere recibir un param, debe cambiar la parte de la ruta en el método de rutas

	La sintaxis es:

		backend
		app.get( "<ruta>", <callback> )
		app.get( "<ruta>/:<clave>", <callback> )
		app.get( "<ruta>/:edad", <callback> )		// El servidor está esperando un param con la clave edad

		frontend
		si queremos que el usuario mande el param "edad", entonces debe hacer una peticion al siguiente link:
		<url>/<valor>
		<url>/21

	Si nosotros queremos recibir más params, entonces debemos escribir más veces el /:<clave> en el url

	Recordar que la sintaxis desde el lado del cliente es:

	<url><params><query>
*/

// Esta ruta no está esperando ningun param
app.get("/req", reqHandler)						// Params pedidos: 0

// Una ruta que esté esperando el param llamado "pagina"
app.get("/req/:pagina", reqHandler)				// Params pedidos: 1

// Una ruta que esté esperando el param "nombre" y el param "apellido"
app.get("/req/:nombre/:apellido", reqHandler)	// Params pedidos: 2

/*
	El req.body es el único tipo de dato que NO se escribe sobre el url
	Se debe enviar cuando uno hace la peticion http


	(Buscar en google no manda ningun tipo de body)
*/

/* DIFERENCIAS ENTRE MÉTODOS DE RUTAS */
/*
	Todos los métodos de rutas siguen la sintaxis base de:
	app.<metodo>(<url>, <callback>)

	Todos los métodos de las rutas ejecutarán su callback cuando se hace la peticion adecuada a la ruta definida

	CASOS DE USO DE CADA UNO:

	app.get()
		- Se utiliza cuando el usuario hace un pedido de información de sólo lectura
		- La información viaja desde el servidor hasta el cliente
		- Hacer una búsqueda en google hace automáticamente un pedido de tipo GET
		- No se puede utilizar el req.body
	
	app.post()
		- Se utiliza cuando el usuario le envía información al servidor (Hace un posteo)
		- La información viaja desde el cliente al servidor
		- El servidor puede responder al pedido con más info

	app.put()
		- Se utiliza cuando el usuario quiere modificar informacion que guarda el backend con info nueva
		- La información viaja desde el cliente al servidor
		- El servidor modifica su base de datos
		- El servidor puede responder al cliente con más info

	app.delete()
		- Se utiliza cuando el usuario quiere hacer que el servidor borre algún tipo de dato almacenado
		- La información viaja desde el cliente al servidor
		- El servidor puede responder
*/

//app.get()
//app.post()

app.get("/usuarios", getUsuariosHandler)
app.post("/usuarios", postUsuariosHandler)
app.put("/usuarios/:pos", putUsuariosHandler)
app.delete("/usuarios/:pos", deleteUsuariosHandler)