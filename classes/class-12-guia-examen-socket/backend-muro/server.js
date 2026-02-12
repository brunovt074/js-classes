const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

/* ===============================
   ESTADO DEL MURO (MEMORIA)
================================ */

let comentariosPorSala = {};

/* ===============================
   SOCKETS
================================ */

io.on("connection", (socket) => {
    console.log("Cliente conectado");

    // 1️⃣ JOIN MURO
    socket.on("join_muro", ({ alumnoId }) => {
        socket.join(alumnoId);

        if (!comentariosPorSala[alumnoId]) {
            comentariosPorSala[alumnoId] = [];
        }

        socket.emit("joined_OK_muro", comentariosPorSala[alumnoId]);
    });

    // 2️⃣ PUBLICAR COMENTARIO
    socket.on("publicar_comentario", ({ usuario, texto, categoria }) => {
        const salas = Array.from(socket.rooms);
        const sala = salas[1]; // la sala real (alumnoId)

        if (!sala) return;

        const nuevoComentario = {
            id: Date.now(),
            usuario,
            texto,
            categoria,
            timestamp: new Date().toISOString(),
        };

        comentariosPorSala[sala].push(nuevoComentario);

        // Avisar a todos los clientes
        io.to(sala).emit("nuevo_comentario", nuevoComentario);

        // Si llega a 6 comentarios → muro lleno
        if (comentariosPorSala[sala].length >= 6) {
            io.to(sala).emit("muro_lleno");
            comentariosPorSala[sala] = [];
        }
    });

    socket.on("disconnect", () => {
        console.log("Cliente desconectado");
    });
});

/* ===============================
   SERVIDOR
================================ */

server.listen(4000, () => {
    console.log("Servidor Socket.IO corriendo en puerto 4000");
});