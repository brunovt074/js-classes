const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// --------------------------------------------- // CONFIGURACIÓN BÁSICA // ---------------------------------------------

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// --------------------------------------------- // MEMORIA DE TURNOS (simula base de datos) // ---------------------------------------------

const salasTurnos = {};

const crearTurnoInicial = () => ({
  id: Date.now(),
  especialidad: "Clínica Médica",
  turnoActual: 0,
  pacienteActual: "-",
  cantidadReservas: 0,
  timestamp: new Date().toISOString(),
});

// --------------------------------------------- // CONEXIÓN DE SOCKETS // ---------------------------------------------

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // ------------------------------------------- // EVENTO: join_turnos // -------------------------------------------

  socket.on("join_turnos", ({ alumnoId }) => {
    const ROOM = alumnoId;

    socket.join(ROOM);
    socket.data.room = ROOM;

    if (!salasTurnos[ROOM]) {
      salasTurnos[ROOM] = crearTurnoInicial();
    }

    socket.emit("joined_OK_turnos", salasTurnos[ROOM]);
  });

  // ------------------------------------------- // EVENTO: realizar_reserva // -------------------------------------------

  socket.on("realizar_reserva", ({ paciente, numeroTurno }) => {
    const ROOM = socket.data.room;
    if (!ROOM) return;

    const turno = salasTurnos[ROOM];

    // Validación básica
    if (numeroTurno <= turno.turnoActual) {
      return;
    }

    turno.turnoActual = Number(numeroTurno);
    turno.pacienteActual = paciente;
    turno.cantidadReservas += 1;
    turno.timestamp = new Date().toISOString();

    // Si se completan 5 turnos
    if (turno.cantidadReservas >= 5) {
      io.to(ROOM).emit("turnos_completos", crearTurnoInicial());
      salasTurnos[ROOM] = crearTurnoInicial();
      return;
    }

    // Avisar a todos los clientes de la sala
    io.to(ROOM).emit("nueva_reserva", turno);
  });
});

// --------------------------------------------- // LEVANTAR SERVIDOR // ---------------------------------------------

server.listen(4000, () => {
  console.log("Servidor Socket.IO listo en puerto 4000");
});
