CREATE DATABASE ejercicio_relaciones;
USE ejercicio_relaciones;

CREATE TABLE cohorte (
cohorte12_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
);

CREATE TABLE alumno (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
curp VARCHAR(255) NOT NULL,
rfc VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

CREATE TABLE instructor (
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
rfc VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);

CREATE TABLE equipo (
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL
);

CREATE TABLE direccion (
direccion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255),
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

INSERT INTO cohorte (alumnos_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES
(1, 1, 10, '9:30-5:30', 'Remota', 'CDMX'),
(2, 2, 10, '9:30-5:30', 'Remota', 'CDMX');

INSERT INTO alumno (nombre, edad, curp, rfc, nivel_ingles, amonestaciones)
VALUES
('Diana', 24, 'MIED971202MDFNSN03', 'MIED971002', 'B1', 0),
('Hector', 27, 'GOHH941009HDFNRC09', 'GOHH941009', 'B2', 0);

INSERT INTO instructor (nombre, edad, cumpleanios, rfc, supervisor, sesiones)
VALUES
('Raul',30,'1991-01-01','RAED910101', 'Marina', 'JavaScript'),
('Victor',40,'1981-01-01','VIED810101', 'Marina', 'Java');

INSERT INTO equipo (alumno_id, nombre, cantidad_integrantes, logo)
VALUES
(1, 'Shades', 8, 'si'),
(1, 'Vaquitas', 9, 'si');

INSERT INTO direccion (alumno_id, calle, pais, cp)
VALUES
(1,'Valle de Mitla','México',55210),
(2,'Av. Quinto Sol','México',55120);

-- Agregar llaves foránea TABLA COHORTE
ALTER TABLE cohorte
ADD CONSTRAINT fk_alumno_cohorte
FOREIGN KEY (alumnos_id)
REFERENCES alumno(alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_instructor_cohorte
FOREIGN KEY (instructor_id)
REFERENCES instructor(instructor_id);

-- Agregar llave foranea TABLA EQUIPO
ALTER TABLE equipo
ADD CONSTRAINT fk_alumno_equipo
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);

-- Agregar llave foranea TABLA DIRECCION
ALTER TABLE direccion
ADD CONSTRAINT fk_alumno_direccion
FOREIGN KEY (alumno_id)
REFERENCES alumno(alumno_id);



SELECT * FROM direccion;
