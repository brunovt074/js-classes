const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. CONEXIÓN A LA BASE DE DATOS (Punto crítico del examen)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // En el examen pondrían: '2024-5INF-Examenes'
    password: '',          // En el examen pondrían: 'examenes'
    database: 'examen_libros' // En el examen: '2024-5INF-Examenes'
});

db.connect(err => {
    if (err) console.log("Error de conexión:", err);
    else console.log("Conectado a la Base de Datos");
});

// --- RESOLUCIÓN PUNTO 1 y 2 DEL EXAMEN (RUTAS) ---

// Punto 1: Pedido GET que traiga todos los libros
app.get('/libros', (req, res) => {
    const sql = "SELECT * FROM libros";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        // El examen pide devolver un objeto dentro de un parámetro "libros"
        res.json({ libros: data }); 
    });
});

// Punto 2: Pedido POST para guardar nuevos libros
app.post('/libros', (req, res) => {
    const { nombre, valoracion } = req.body; // Recibimos datos del front
    const sql = "INSERT INTO libros (nombre, valoracion) VALUES (?, ?)";
    
    db.query(sql, [nombre, valoracion], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ mensaje: "Libro guardado" });
    });
});

// Punto 4: Pedido PUT para modificar valoración
app.put('/libros', (req, res) => {
    const { nombre, nuevoNombre, nuevaValoracion } = req.body;
    console.log('PUT recibido:', { nombre, nuevoNombre, nuevaValoracion });

    const sql = 'UPDATE libros SET nombre = ?, valoracion = ? WHERE nombre = ?';

    db.query(sql, [nuevoNombre, nuevaValoracion, nombre], (err, result) => {
        if (err) {
            console.log('Error en UPDATE:', err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log('UPDATE exitoso:', result);
        res.json({ mensaje: 'Libro actualizado', result });
    });
});

app.delete('/libros/borrar', (req, res) => {
    const { nombre } = req.body;

    const sql = "DELETE FROM libros WHERE nombre = ?";

    db.query(sql, [nombre], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Libro no encontrado" });
        }

        res.json({ mensaje: "Libro eliminado" });
    });
});


app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));