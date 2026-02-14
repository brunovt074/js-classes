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

/*
================================
ESTADO EN MEMORIA
================================
Cada alumnoId representa una "sala"
Cada sala tiene su propio muro
*/

const comentariosPorSala = {};

/*
================================
CONEXIÓN DE SOCKETS
================================
*/

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  /*
  =================================
  EVENTO 1 — join_muro
  El alumno se une a una sala
  =================================
  */
  socket.on("join_muro", ({ alumnoId }) => {
    socket.join(alumnoId);

    if (!comentariosPorSala[alumnoId]) {
      comentariosPorSala[alumnoId] = [];
    }

    socket.emit("joined_OK_muro", comentariosPorSala[alumnoId]);
  });

  /*
  =================================
  EVENTO 2 — publicar_comentario
  Se recibe un comentario nuevo
  =================================
  */
  socket.on("publicar_comentario", ({ usuario, texto, categoria }) => {
    const salas = Array.from(socket.rooms);
    const sala = salas[1]; // alumnoId

    if (!sala) return;

    const nuevoComentario = {
      id: Date.now(),
      usuario,
      texto,
      categoria,
      timestamp: new Date().toISOString(),
    };

    comentariosPorSala[sala].push(nuevoComentario);

    io.to(sala).emit("nuevo_comentario", nuevoComentario);

    // Regla del examen: muro lleno
    if (comentariosPorSala[sala].length >= 6) {
      io.to(sala).emit("muro_lleno");
      comentariosPorSala[sala] = [];
    }
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

/*
================================
SERVIDOR HTTP
================================
*/

server.listen(4000, () => {
  console.log("Servidor Socket.IO escuchando en puerto 4000");
});