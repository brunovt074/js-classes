CREATE DATABASE examen_peliculas;
USE examen_peliculas;

CREATE TABLE peliculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    puntuacion INT
);

INSERT INTO peliculas (titulo, puntuacion) VALUES
('Matrix', 5),
('Titanic', 4),
('El Padrino', 5),
('Avengers', 4),
('Jurassic Park', 5),
('Volver al Futuro', 5),
('Gladiador', 4),
('Forrest Gump', 5),
('Inception', 5),
('Toy Story', 4);