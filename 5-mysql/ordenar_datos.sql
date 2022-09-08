USE world;

-- Ver toda la informacion de toda la tabla
SELECT * FROM country;

-- Ver nombre y poblacion en orden descendente
SELECT Name, Population FROM country ORDER BY Population DESC;

-- Ver nombre y poblacion de México
SELECT Name, Population FROM country WHERE Name = 'Mexico';

-- Ver todas las columnas de México
SELECT * FROM country WHERE Name = 'Mexico';

-- Realizar operaciones y poner alias
SELECT 5+5 AS suma;

-- Operaciones con los datos y dar alias
SELECT sum(Population) AS PoblacionMundial FROM country;

-- Uso de alias para cambiar nombres
SELECT  Name AS 'Nombre del pais', Population AS 'Poblacion del pais' FROM country ORDER BY Population DESC;

-- Mostrar datos sin duplicados
SELECT DISTINCT Continent FROM country;

-- Clausula: WHERE
-- Se puede usar con: < > >= <= != =
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;

-- Between
-- se utiliza junto con WHERE

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND / != -- lógicos
SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent != 'North America';

-- operador IN 
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

-- FILTRAR VALORES NULOS Y NO NULOS
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;

-- OPERADOR LIKE: bUSCAR PATRONES
-- %: BUSCAR CUALQUIER CANTIDAD DE CARACTERES
-- '_': ESPECIFICAR UN CARACTER
-- PALABRAS QUE TERMINEN EN '_':
SELECT Name FROM country WHERE Name LIKE '%as';
-- PALABRAS QUE INICIEN CON '_':
SELECT Name FROM country WHERE Name LIKE 'A%';
-- PALABRAS QUE INICIEN CON '_' Y TERMINEN EN '_':
SELECT Name FROM country WHERE Name LIKE 'A%a';
-- PALABRAS QUE CONTENGAN '_' EN CUALQUIER POSICION:
SELECT Name FROM country WHERE Name LIKE '%as%';
-- PALABRAS QUE CONTENGAN e SEPARADO POR DOS LETRAS Y LUEGO a:
SELECT Name FROM country WHERE Name LIKE '%e__a';


