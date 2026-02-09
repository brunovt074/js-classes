const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// CONEXIÓN A LA BASE DE DATOS
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'examen_peliculas'
});

db.connect(err => {
    if (err) {
        console.log("Error de conexión:", err);
    } else {
        console.log("Conectado a la base de datos");
    }
});

// ------------------------------------
// 1️⃣ GET - Traer todas las películas
// ------------------------------------
app.get('/peliculas', (req, res) => {
    const sql = "SELECT * FROM peliculas";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        res.json({ peliculas: data });
    });
});

// ------------------------------------
// 2️⃣ POST - Guardar nueva película
// ------------------------------------
app.post('/peliculas', (req, res) => {
    const { titulo, puntuacion } = req.body;
    const sql = "INSERT INTO peliculas (titulo, puntuacion) VALUES (?, ?)";

    db.query(sql, [titulo, puntuacion], err => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: "Película guardada" });
    });
});

// ------------------------------------
// 4️⃣ PUT - Modificar puntuación
// ------------------------------------
app.put('/peliculas', (req, res) => {
    const { titulo, nuevaPuntuacion } = req.body;
    const sql = "UPDATE peliculas SET puntuacion = ? WHERE titulo = ?";

    db.query(sql, [nuevaPuntuacion, titulo], err => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: "Puntuación modificada" });
    });
});

// ------------------------------------
// 6️⃣ DELETE - Eliminar película
// ------------------------------------
app.delete('/peliculas', (req, res) => {
    const { titulo } = req.body;
    const sql = "DELETE FROM peliculas WHERE titulo = ?";

    db.query(sql, [titulo], err => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: "Película eliminada" });
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});