// server.js (Simulador del Backend del Examen)
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const votaciones = {}; // Memoria de las salas

// Helper: Estructura inicial (Según examen)
const iniciarVotacion = () => ({
    pregunta: "¿Cuál es el mejor lenguaje?",
    opciones: [
        { id: "A", nombre: "JavaScript", votos: 0, porcentaje: 0 },
        { id: "B", nombre: "Python", votos: 0, porcentaje: 0 },
        { id: "C", nombre: "Java", votos: 0, porcentaje: 0 },
        { id: "D", nombre: "C#", votos: 0, porcentaje: 0 }
    ],
    totalVotos: 0,
    opcionGanadora: null
});

io.on('connection', (socket) => {
    // 1. Unirse a la votación [cite: 231]
    socket.on("join_votacion", ({ alumnoId }) => {
        const ROOM = alumnoId;
        socket.join(ROOM);
        socket.data.room = ROOM;

        if (!votaciones[ROOM]) votaciones[ROOM] = iniciarVotacion();

        // Enviamos estado inicial [cite: 237]
        socket.emit("joined_OK_votacion", { room: ROOM, votacion: votaciones[ROOM] });
    });

    // 2. Emitir Voto [cite: 233]
    socket.on("emitir_voto", ({ opcion }) => {
        const ROOM = socket.data.room;
        if (!ROOM || !votaciones[ROOM]) return;

        const sala = votaciones[ROOM];
        const opcionElegida = sala.opciones.find(o => o.id === opcion);

        if (opcionElegida) {
            opcionElegida.votos++;
            sala.totalVotos++;

            // Recalcular porcentajes
            sala.opciones.forEach(op => {
                op.porcentaje = Math.round((op.votos / sala.totalVotos) * 100);
            });

            // Notificar a todos [cite: 237]
            io.to(ROOM).emit("votacion_actualizada", { votacion: sala });
        }
    });
});

server.listen(4000, () => console.log("Servidor Votación en puerto 4000"));