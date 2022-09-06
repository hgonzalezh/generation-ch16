USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Definir un alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY 'Población del país' DESC;

SELECT DISTINCT Continent FROM country; -- DISTINCT filtra los datos repetidos

-- Cláusula WHERE
-- Operadores: < > <= >= != =
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;