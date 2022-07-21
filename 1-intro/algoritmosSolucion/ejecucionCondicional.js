//let nombre = "Benito";
let nombre = prompt("Escribe tu nombre:");
console.log(nombre);

let edad = parseInt(prompt("Escribe tu edad:"))
console.log(edad);

if (nombre === "Jonathan" && edad == 23) {
  console.log("Eres un ");
  console.log("Instructor(a) 😎");
} else if (nombre === "Magali" || nombre === "Maria") {
  console.log("Eres Mentor(a) 📓");
} else {
  console.log("Eres estudiante ✏")
}

console.log("Fin del programa");