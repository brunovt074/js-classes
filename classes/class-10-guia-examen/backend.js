// Instalación previa (una sola vez)
// npm init -y
// npm install express mysql2 cors

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* ==========================
   CONEXIÓN A LA BASE DE DATOS
========================== */

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: '2024-5INF-Examenes'
});


db.connect(err => {
    if (err) {
        console.log('Error de conexión:', err);
    } else {
        console.log('Base de datos conectada');
    }
});

/* ==========================
   GET - TRAER TODOS LOS LIBROS
========================== */

app.get('/libros', (req, res) => {
    const sql = 'SELECT * FROM libros';

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ libros: result });
        }
    });
});

/* ==========================
   POST - GUARDAR NUEVO LIBRO
========================== */

app.post('/libros', (req, res) => {
    const { nombre, valoracion } = req.body;

    const sql = 'INSERT INTO libros (nombre, valoracion) VALUES (?, ?)';

    db.query(sql, [nombre, valoracion], err => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ mensaje: 'Libro guardado' });
        }
    });
});

/* ==========================
   PUT - MODIFICAR VALORACIÓN
========================== */

app.put('/libros', (req, res) => {
    const { nombre, nuevaValoracion } = req.body;

    const sql = 'UPDATE libros SET valoracion = ? WHERE nombre = ?';

    db.query(sql, [nuevaValoracion, nombre], err => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ mensaje: 'Libro modificado' });
        }
    });
});

/* ==========================
   DELETE - ELIMINAR LIBRO
========================== */

app.delete('/libros', (req, res) => {
    const { nombre } = req.body;

    const sql = 'DELETE FROM libros WHERE nombre = ?';

    db.query(sql, [nombre], err => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ mensaje: 'Libro eliminado' });
        }
    });
});

/* ==========================
   SERVIDOR
========================== */

app.listen(3001, () => {
    console.log('Servidor corriendo en puerto 3001');
});
