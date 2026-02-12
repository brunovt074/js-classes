CREATE DATABASE IF NOT EXISTS `2024-5INF-Examenes`;
USE `2024-5INF-Examenes`;

CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    valoracion INT NOT NULL
);

INSERT INTO libros (nombre, valoracion) VALUES
('El Señor de los Anillos', 5),
('1984', 5),
('Cien Años de Soledad', 4),
('Don Quijote de la Mancha', 5),
('Harry Potter', 4),
('El Principito', 5),
('Fahrenheit 451', 4),
('Crónica de una muerte anunciada', 4),
('Orgullo y Prejuicio', 4),
('Drácula', 3);
