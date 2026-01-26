var express = require('express'); //Tipo de servidor: Express
var bodyParser = require('body-parser'); //Convierte los JSON
const MySql = require('./modulos/mysql.js')
var cors = require("cors");

var app = express(); //Inicializo express
var port = process.env.PORT || 4000;
app.use(cors());

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Pongo el servidor a escuchar
server = app.listen(port, function () {
    console.log(`Server running in http://localhost:${port}`);
});

const io = require("socket.io")(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3001"],

        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true
    }
})

/* ************************************ ACÁ TERMINA LA CONFIGURACION ************************************ */

const { variable } = require("./src/importacion.js");
const { message } = require('statuses');

/*
    app.get
    app.post
    app.put
    app.delete
*/

/*
    Escribir una url en el navegador es exactamente lo mismo que hacer un fetch en modo GET
*/

/*
    El req.body no existe en el GET
    Es un método exclusivo de los demás

    El req.query se puede pensar como un "objeto" que se escribe en el url.
    Para usarlo, se debe escribir la ruta completa y después meter un signo de pregunta "?"
    Despues del ? se escribe clave=valor separado por & (ampersand)

    Toda informacion recibida en req.query y req.params son por default strings

    req.params
    Siempre van al final de un url PERO NO DESPUES DE LOS QUERIES
    Para que funcione el req.params, se debe definir su clave en la url del controlador (en este caso el "/helloWorld")

    Para configurarlo, desde el controlador se debe escribir <url>/:clave
    Y el cliente escribe <url>/valor
*/

app.get("/helloWorld", (req, res) => {
    // res.json se utiliza para DEVOLVER un valor al cliente
    // se usa como si fuera un return y por lo tanto va siempre al final

    // aca adentro podes meter todo el codigo que quieras (//console.log, etc)

    io.emit('pong', { mensaje: "te fuiste pongeado" });

    res.json({
        mensaje: "hola desde el backend",
        reqQuery: req.query,
        reqParams: req.params
    })
}
)

/*
    app.post
    ¿Cómo se usa app.post?
    Se usa exactamente igual que app.get
*/

app.post("/postWorld", (req, res) => {

    console.log("Alguien me hizo un post");

    console.log("Alguien me mando este reqBody", req.body)

    res.json({
        mensaje: "hola desde el post"
    })

}
)

/* *********************************** SOCKETS *********************************** */
/*
    el .on() se usa para recibir
    el .emit() se usa para enviar

    io representa al servidor ENTERO (parecido al res)
    socket representa a UN CLIENTE SOLO (parecido al req)
*/

/*
    Si el backend escucha un evento con un .on y decide responder:
        1) si usa socket.emit, sólo emitirá al cliente que tiró el mensaje
        2) si usa io.emit TODOS LOS CLIENTES CONECTADOS LO VAN A ESCUCHAR
*/

let mensajes = []

io.on("connection", (socket) => {
    const req = socket.request;

    socket.on('ping', data => {

        io.emit('pong', { mensaje: "te fuiste pongeado" });
    });

    socket.on("newMessage", data => {
        console.log("Me llego esta data", data)
        console.log("bueno la meto en el array de mensajes")

        mensajes.push(data)
        console.log("bueno le voy a dar a todos mis sockets conectados este array de mensajes jaja")
        /*
            {
                arrayDeMensajes: [
                    {content: "hola"},
                    {content: "hola"},
                    {content: "hola"},
                ]
            }
        */
        io.emit("arrayDeMensajes", { arrayDeMensajes: mensajes })
    })

});

/*
socket.emit("helloWorld", { message: "Hello world!" })

    socket.on('joinRoom', data => {

        console.log("🚀 ~ io.on ~ req.session.room:", req.session.room)

        if (req.session.room != undefined && req.session.room.length > 0) { socket.leave(req.session.room); }

        req.session.room = data.room;
        socket.join(req.session.room);

        io.to(req.session.room).emit('chat-messages', { user: req.session.user, room: req.session.room });
    });

    socket.on('pingAll', data => {
        console.log("PING ALL: ", data);
        io.emit('pingAll', { event: "Ping to all", message: data });
    });

    socket.on('sendMessage', data => {
        console.log(data)
        console.log("The room is", req.session.room)
        io.to(req.session.room).emit('newMessage', { room: req.session.room, message: data.message, user: data.user });
    });

    socket.on('disconnect', () => {
        console.log("Disconnect");
    })
*/

/* 
    Hagamos un app.get que devuelva en formato json los datos
    La dirección la llamermos <root>/api/page
    Y que reciba un param que se llame pageNumber

    Los datos van a ser la persona número pageNumber
*/

const personas = [
    {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid"
    },
    {
        nombre: "Ana",
        edad: 25,
        ciudad: "Barcelona"
    },
    {
        nombre: "Pedro",
        edad: 35,
        ciudad: "Valencia"
    },
    {
        nombre: "Laura",
        edad: 28,
        ciudad: "Sevilla"
    },
    {
        nombre: "Carlos",
        edad: 40,
        ciudad: "Bilbao"
    }
];

/* ACA EMPIEZA LA PRUEBA */




















app.get("/api",
    (req, res) => {

        res.json({
            results: personas
        })
    }
)

app.get("/api/page/:pageNumber",
    (req, res) => {

        // toda la logica

        const personaSeleccionada = personas[req.params.pageNumber]

        res.json({
            results: personaSeleccionada
        })
    }
)
























app.get('/', function (req, res) {
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});

/**
 * req = request. en este objeto voy a tener todo lo que reciba del cliente
 * res = response. Voy a responderle al cliente
 */
app.get('/saludo', function (req, res) {
    ////console.log(req.query) //Los pedidos get reciben los datos del req.query
    res.send(`Hola ${req.query.nombre}, que tal?`)
})

app.post('/nombreDelPedido', function (req, res) {
    ////console.log(req.body) //Los pedidos post reciben los datos del req.body
    res.send("ok")
})

// PUNTO 2:

app.get('/obtenerPilotos', async function (req, res) {
    ////console.log(" [GET] /obtenerPilotos ")
    const respuesta = await MySql.realizarQuery(
        'SELECT * FROM Pilotos;')
    res.send(respuesta)
})

app.get('/obtenerGP', async function (req, res) {
    ////console.log(" [GET] /obtenerGP ")
    const respuesta = await MySql.realizarQuery(
        'SELECT * FROM GP;')
    res.send(respuesta)
})

app.get('/obtenerPilotosXGP', async function (req, res) {
    //console.log(" [GET] /obtenerPilotosXGP ")
    const respuesta = await MySql.realizarQuery(
        'SELECT * FROM PilotosXGP;')
    res.send(respuesta)
})

// PUNTO 3:

app.get('/buscarPiloto', async function (req, res) {
    //console.log(" [GET] /buscarPiloto ")
    const respuesta = await MySql.realizarQuery(
        `SELECT * FROM Pilotos WHERE piloto_ID=${req.query.id};`)
    res.send(respuesta)
})

app.get('/buscarGP', async function (req, res) {
    //console.log(" [GET] /buscarPilotosGP ")
    const respuesta = await MySql.realizarQuery(
        `SELECT * FROM GP WHERE gp_ID=${req.query.id};`)
    res.send(respuesta)
})

app.get('/buscarPilotosXGP', async function (req, res) {
    //console.log(" [GET] /buscarPilotosXGP ")
    const respuesta = await MySql.realizarQuery(
        `SELECT * FROM PilotosXGP WHERE Piloto_ID=${req.query.id};`)
    res.send(respuesta)
})


// PUNTO 4 y 7:

app.post('/insertarGp', async function (req, res) {
    let GP = await MySql.realizarQuery(`SELECT * FROM GP WHERE gp_ID = '${req.body.gp_ID}'`);
    if (GP.length != 0) {
        res.send("Ya existe");
    } else {
        await MySql.realizarQuery(`INSERT INTO GP (gp_ID,nombre, fecha, pista)
        VALUES ('${req.body.gp_ID}', '${req.body.nombre}', '${req.body.fecha}', '${req.body.pista}')`);
        res.send("OK");
    }
})

app.post('/insertarPiloto', async function (req, res) {
    let Pilotos = await MySql.realizarQuery(`SELECT * FROM Pilotos WHERE piloto_ID = '${req.body.piloto_ID}'`);
    if (Pilotos.length != 0) {
        res.send("Ya existe");
    } else {
        await MySql.realizarQuery(`INSERT INTO Pilotos (nombre, apellido, escuderia, numero, nacionalidad, nacimiento, puntaje_Campeonato, piloto_ID)
        VALUES ('${req.body.nombre}', '${req.body.apellido}', '${req.body.escuderia}', '${req.body.numero}', '${req.body.nacionalidad}', '${req.body.nacimiento}', '${req.body.puntaje_Campeonato}', '${req.body.piloto_ID}')`);
        res.send("OK");
    }
})

app.post('/insertarPilotoXGP', async function (req, res) {
    let PilotosXGP = await MySql.realizarQuery(`SELECT * FROM PilotosXGP WHERE piloto_ID = '${req.body.piloto_ID}' AND gp_ID = '${req.body.gp_ID}'`);
    if (PilotosXGP.length != 0) {
        res.send("Ya existe");
    } else {
        await MySql.realizarQuery(`INSERT INTO PilotosXGP (piloto_ID,gp_ID, posicion, tiempo, puntos)
        VALUES ('${req.body.piloto_ID}', '${req.body.gp_ID}', '${req.body.posicion}', '${req.body.tiempo}', '${req.body.puntos}')`);
        res.send("OK");
    }
})


// PUNTO 5:

app.put('/cambiarDatoGP', async function (req, res) {
    //console.log("[POST] /cambiarDatoGP req.body:", req.body)
    await MySql.realizarQuery(`UPDATE GP SET  nombre = '${req.body.nombre}' WHERE gp_ID = '${req.body.gp_ID}'`)
    res.send("OK")
})

app.put('/cambiarDatoPiloto', async function (req, res) {
    //console.log("[POST] /cambiarDatoPiloto req.body:", req.body)
    await MySql.realizarQuery(`UPDATE Pilotos SET nombre = '${req.body.nombre}' WHERE piloto_ID = '${req.body.piloto_ID}'`)
    res.send("OK")
})

app.put('/cambiarDatoPilotosXGP', async function (req, res) {
    //console.log("[POST] /cambiarDatoPilotosXGP req.body:", req.body)
    await MySql.realizarQuery(`UPDATE PilotosXGP SET posicion = '${req.body.posicion}' WHERE piloto_ID = '${req.body.piloto_ID}'`)
    res.send("OK")
})

// PUNTO 6: 

app.delete('/borrarGP', async function (req, res) {
    //console.log("[DELETE] /borrarGP req.body:", req.body)
    await MySql.realizarQuery(`DELETE FROM GP WHERE gp_ID = '${req.body.gp_ID}'`)
    res.send("OK")
})

app.delete('/borrarPiloto', async function (req, res) {
    //console.log("[DELETE] /borrarPiloto req.body:", req.body)
    await MySql.realizarQuery(`DELETE FROM Pilotos WHERE piloto_ID = '${req.body.piloto_ID}'`)
    res.send("OK")
})

app.delete('/borrarPilotoGP', async function (req, res) {
    //console.log("[DELETE] /borrarPilotoGP req.body:", req.body)
    await MySql.realizarQuery(`DELETE FROM PilotosXGP WHERE piloto_ID = '${req.body.piloto_ID}'`)
    res.send("OK")
})



