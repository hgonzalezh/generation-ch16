CREATE DATABASE generation; -- crea una bd
USE generation; -- Establecer a generation como la bd activa

CREATE TABLE cohorte_16 (
alumno_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
compañeros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
); -- Se crea una nueva tabla llamada 'cohorte_16'

INSERT INTO cohorte_16
(nombre, apellido, compañeros, direccion, proyecto)
VALUES
('Hector','Gonzalez',8,'Ecatepec, EdoMex', 'Shades'),
('Daniel','Rosas',9,'Iztapalapa, CDMX', 'Dinos'),
('Brandon','Urquieta',7,'Tlalpan, CDMX','Vaquitas'),
('Jorge','Alonso',10,'Cuautemoc, CDMX', 'Krelboing'),
('Cyntya','Lopez',8,'Toluca, EdoMex', 'Shades'); -- Agregar 5 filas con valores

DELETE FROM cohorte_16
WHERE alumno_id=3; -- Eliminar fila con el id#3 (brandon)

UPDATE cohorte_16
SET nombre = 'Arturo'
WHERE alumno_id=5; -- Cambia el nombre del alumno con el id 5(Cyntya -> Arturo)

SELECT nombre, apellido FROM cohorte_16
ORDER BY apellido ASC;  -- Selecciona y muestra los campos nombre y apellido, ordenandolos por apellido en orden ascendente