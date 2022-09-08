USE sakila;
SELECT * FROM sakila.address;
-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- Count() cuenta la cantidad de filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cnatridad de países' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 2;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

-- SUM()

SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- ¿Cuál cliente realizó más rentas?
SELECT Customer_id, count(*) FROM payment;
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;


-- Group by
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Qué cliente gastó más?
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;

-- AVG() regresa un promedio
SELECT AVG(amount) AS Promedio FROM payment;

-- ¿Cuál cliente gastó más en promedio?
SELECT customer_id, AVG(amount) AS promedio FROM payment GROUP BY customer_id ORDER BY promedio DESC;