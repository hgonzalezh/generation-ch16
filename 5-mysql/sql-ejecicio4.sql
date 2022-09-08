-- Ejercicio obtenido de https://github.com/generation-org/DB-MYSQL/tree/master/DB-MYSQL-4%20-%20%20Advanced%20SQL%20(Joining%20Tables)


-- Run the following SQL Query to complete your first JOIN to see more information about the Students:
SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

-- Modify the previous SQL statment so it joins the Students table with the IDTypes table to know each students' type of ID.
SELECT Students.*, idtypes.* 
FROM Students
INNER JOIN Idtypes
ON Students.IdType_id = Idtypes.id_idTypes;

-- Write an additional SQL statment to JOIN the Students table with the CourseHasStudent table to get the code
-- of the courses that each students is enrolled in.
SELECT Students.idStudent, Students.name , students.last_name , courses_has_students.course_code
FROM Students
INNER JOIN courses_has_students
ON students.idStudent = courses_has_students.students_id_student;

-- Write a SQL query to join the CourseHasStudent table with the Courses table to get the name of the course information
-- with the student ID of students enrolled in the course.
SELECT courses_has_students.students_id_student, courses.name
FROM courses_has_students
INNER JOIN courses
ON courses_has_students.course_code = courses.code;

-- Now that you have the two queries, use an INNER JOIN to combine the results of the queries (this is called nested queries,
-- and will allow you to combine SQL queries to order the data the way you like).

-- SOLUCION

SELECT concat(students.name, ' ', students.last_name) as Student, courses.name as Course
	FROM courses_has_students
	INNER JOIN students
	ON courses_has_students.students_id_student = students.idStudent
	INNER JOIN courses
	ON courses_has_students.course_code = courses.code
	ORDER BY Course;
    
    -- ------------------------------- --
-- Part 2: (SOLUCION)
-- ------------------------------- --

-- Estudiantes de un país en específico
SELECT students.*, countries.name as Country
	FROM students
	INNER JOIN countries
	ON students.nationality = countries.idCountries
	WHERE countries.Name = 'China';

-- Todos los países cuyo nombre empiece con 'Ca'
SELECT * FROM countries
	WHERE countries.name LIKE 'Ca%';

-- Cantidad de estudiantes en el curso Java-1
SELECT COUNT(courses_has_students.students_id_student) as `Students enrolled in JAVA-1`
	FROM courses_has_students
	WHERe courses_has_students.course_code = 'JAVA-1';

-- Suma los créditos de todos los cursos que tienen JAVA en el nombre
SELECT SUM(courses.credits) as `Credits`
	FROM courses
	WHERE courses.name LIKE '%java%';
    
-- estudiantes por modulo
SELECT  courses.module_code as `Module Name`, count(students.idStudent) as `Students Enrolled`
FROM courses_has_students
JOIN students
ON students_id_student = students.idStudent
JOIN courses
ON courses_has_students.course_code = courses.code
GROUP BY courses.module_code;