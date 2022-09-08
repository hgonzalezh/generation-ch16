USE tienda;

-- INNER JOIN Explícita
SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT
clientes.cliente_id AS 'Número de clinte',
clientes.nombre AS nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- INNER JOIN implícita
SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- RIGHT JOIN
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada pais
USE sakila;
SELECT * FROM sakila.city;

/*
address - city_id / address
city    - city_id / city / country_id  
country - country id
*/

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

-- Union de tres tablas
SELECT
country.country AS 'País',
city.city AS Ciudad,
address.address as 'Dirección'
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;