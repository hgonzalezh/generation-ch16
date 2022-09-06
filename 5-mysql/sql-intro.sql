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

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES
('Victor', 'Fernandez', '555540234', 'Comala'),
('Raúl', 'Sánchez', '559755234', 'Comala'),
('Juan', 'Cruz', '555553134', 'Comala');

SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id=1;

