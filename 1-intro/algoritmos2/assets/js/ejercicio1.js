/*crea un archivo llamado ejercicio1.js

cada comando debe mostrarse en consola

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

*/
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);
//Escribe un comando para remover a "Dani" del arreglo
personas.splice(1,1)
console.log(personas);
//Escribe un comando para remover a "Juan del arreglo"
personas.splice(2,1);
console.log(personas);
//Escribe un comando para agregar a "Luis" al inicio del arreglo
personas.unshift(personas[1]);
console.log(personas);
personas.splice(2,1);
console.log(personas);
//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Hector");
console.log(personas);
//Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf("Maria"));
//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("Hector"));

/*VERISON ALTERNA Agregar a Luis
personas.splice(0,2,"Luis","Maria");
console.log(personas);
*/

/* VERSION ALTERNA 2 Agregar a Luis
personas.unshift(personas.splice(1,1)[0]);
console.log(personas);
*/