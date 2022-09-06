-- SHOW DATABASES;
/*
BLOQUE DE COMENTARIOS
*/

CREATE DATABASE tienda;
USE tienda;

DROP DATABASE tienda;

CREATE TABLE  clientes  (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);

DROP TABLE clientes;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES
('Victor', 'Fernandez', '55555555234', 'Comala'),
('Raúl', 'Sánchez', '55555555234', 'Comala'),
('Juan', 'Cruz', '55555555234', 'Comala');

SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id=1;

