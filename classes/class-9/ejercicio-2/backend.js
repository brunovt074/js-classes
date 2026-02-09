const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'examen_tareas'
});

db.connect(err => {
    if (err) console.log("Error DB:", err);
    else console.log("DB conectada");
});

// GET – traer todas las tareas
app.get('/tareas', (req, res) => {
    db.query("SELECT * FROM tareas", (err, data) => {
        if (err) return res.status(500).json(err);
        res.json({ tareas: data });
    });
});

// POST – crear nueva tarea
app.post('/tareas', (req, res) => {
    const { descripcion, estado } = req.body;
    db.query(
        "INSERT INTO tareas (descripcion, estado) VALUES (?, ?)",
        [descripcion, estado],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ mensaje: "Tarea creada" });
        }
    );
});

// PUT – modificar estado
app.put('/tareas', (req, res) => {
    const { id, nuevoEstado } = req.body;
    db.query(
        "UPDATE tareas SET estado = ? WHERE id = ?",
        [nuevoEstado, id],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ mensaje: "Tarea modificada" });
        }
    );
});

// DELETE – eliminar tarea
app.delete('/tareas', (req, res) => {
    const { id } = req.body;
    db.query(
        "DELETE FROM tareas WHERE id = ?",
        [id],
        err => {
            if (err) return res.status(500).json(err);
            res.json({ mensaje: "Tarea eliminada" });
        }
    );
});

app.listen(4000, () => {
    console.log("Servidor en puerto 4000");
});
