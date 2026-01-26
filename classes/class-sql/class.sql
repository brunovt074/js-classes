/*
 Clase: Persistencia y el Almacén de Datos (SQL)
 Objetivo: Comprender la necesidad de las bases de datos relacionales
 y dominar las operaciones CRUD en un entorno financiero / fintech.
*/

/*
 1. El Problema: Datos Volátiles vs. Persistencia
 En JavaScript, cuando creamos una variable u objeto, este vive en la memoria RAM.
 La RAM es volátil: si el usuario cierra la pestaña del navegador o la computadora se apaga,
 el dato desaparece para siempre.
 La Base de Datos (SQL) es la solución técnica a este problema.
 Proporciona Persistencia: la capacidad de escribir información en el almacenamiento físico (disco)
 para que sobreviva a reinicios y fallos del sistema.
 Sin SQL, cada vez que abrieras una App de banco, tu saldo volvería a cero.
*/

/*
 2. El Almacén Organizado: Tablas y Relaciones
 SQL organiza la información en Tablas compuestas por filas (registros)
 y columnas (atributos).
*/

/*
 Conceptos Clave de Estructura:
 Primary Key (PK):
 Es el identificador único de cada fila (como un DNI).
 No puede repetirse.

 Foreign Key (FK):
 Es una columna que hace referencia al ID de otra tabla.
 Permite conectar datos (ejemplo: saber a qué usuario le pertenece un gasto).

 REGLA DE ORO:
 El orden de creación importa.
 No puedes crear una tabla con una Foreign Key
 si la tabla a la que referencia no ha sido creada todavía.
*/

/*
 3. Comandos Esenciales (CRUD)
*/

/*
 A. CREATE: Diseñando el estante
 Antes de guardar datos, definimos la estructura.
 Usamos IF NOT EXISTS para evitar errores
 si el script se corre dos veces.
*/

-- Primero creamos la tabla "madre" (independiente)
CREATE TABLE IF NOT EXISTS usuarios (
                                        id INT PRIMARY KEY AUTO_INCREMENT,
                                        nombre VARCHAR(255)
    );

-- Luego la tabla que depende de ella (relacionada)
CREATE TABLE IF NOT EXISTS cartera (
                                       id INT PRIMARY KEY AUTO_INCREMENT,
                                       activo VARCHAR(255),
    cantidad DECIMAL(10,2),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );

/*
 B. INSERT: Guardando para la posteridad
*/

INSERT INTO usuarios (nombre) VALUES ('Pepe');
INSERT INTO cartera (activo, cantidad, usuario_id)
VALUES ('Bitcoin', 0.5, 1);

/*
 C. SELECT y JOIN: Consultando la memoria
 Para ver la información completa combinando tablas,
 usamos INNER JOIN.
*/

SELECT usuarios.nombre, cartera.activo, cartera.cantidad
FROM usuarios
         INNER JOIN cartera ON usuarios.id = cartera.usuario_id;

/*
 D. UPDATE: Corrigiendo el pasado
 Es vital usar el WHERE para no afectar
 a todos los registros.
*/

UPDATE cartera
SET cantidad = 0.8
WHERE id = 1;

/*
 E. DELETE: Borrando registros
*/

DELETE FROM cartera
WHERE id = 1;

/*
 🛠️ Ejercitación Final: "Mi Portfolio Cripto"
 Entorno: SQL Workbench
*/

/*
 Estructura:
 Crea una tabla llamada activos con:
 - id (PK)
 - nombre_cripto (VARCHAR)
 - precio_usd (DECIMAL)
*/

CREATE TABLE IF NOT EXISTS activos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_cripto VARCHAR(255),
    precio_usd DECIMAL(10,2)
    );

/*
 Carga:
 Inserta 3 activos con sus precios actuales.
*/

INSERT INTO activos (nombre_cripto, precio_usd)
VALUES ('Bitcoin', 65000);

INSERT INTO activos (nombre_cripto, precio_usd)
VALUES ('Ethereum', 3200);

INSERT INTO activos (nombre_cripto, precio_usd)
VALUES ('Solana', 180);

/*
 Consulta:
 Trae solo los activos cuyo precio sea mayor a 1000 USD.
*/

SELECT *
FROM activos
WHERE precio_usd > 1000;

/*
 Mantenimiento:
 El mercado subió.
 Usa UPDATE para actualizar el precio de uno de tus activos
 buscando por su id.
*/

UPDATE activos
SET precio_usd = 70000
WHERE id = 1;

/*
 Relación:
 Inserta un nuevo registro en la tabla cartera
 vinculándolo a tu usuario_id creado previamente.
*/

INSERT INTO cartera (activo, cantidad, usuario_id)
VALUES ('Ethereum', 2.5, 1);

/*
 Pregunta de reflexión:
 Si ejecutas un comando:
 DELETE FROM activos;
 sin la cláusula WHERE,
 ¿qué sucede con los datos del almacén?
*/
