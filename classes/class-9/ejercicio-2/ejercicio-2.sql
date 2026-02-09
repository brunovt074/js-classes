CREATE DATABASE examen_tareas;
USE examen_tareas;

CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(150),
    estado VARCHAR(20)
);

INSERT INTO tareas (descripcion, estado) VALUES
('Estudiar JavaScript', 'pendiente'),
('Hacer la tarea de matemática', 'pendiente'),
('Leer el apunte', 'completa');

