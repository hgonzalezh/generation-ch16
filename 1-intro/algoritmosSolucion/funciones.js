//Declaración de una función
function sumar (numero1, numero2) {
  console.log("Voy a sumar");
  console.log("El resultado de la suma es: " + (numero1 + numero2));
}
 
/* sumar(3, 7);
sumar(1, 4);
sumar(1, 4);
sumar(9, 8);
 */

//Reto 2 - Versión con funciones

function calculoSueldo (sueldo, nombre){
  
  let sueldoMensual = sueldo * 30;
  let sueldoSemanal = sueldo * 7;

  console.log("Hola,", nombre);
  console.log("Sueldo Mensual:", sueldoMensual);
  console.log("Sueldo Semanal:", sueldoSemanal);
}

let sueldo = parseInt(prompt("Ingresa un sueldo:"));
let nombre = prompt("Introduzca su nombre:");
calculoSueldo (sueldo, nombre);

//Uso de 'return' en funciones
//Calculadora de porcentajes

function calcularPorcentaje (numero, porcentaje) {
  let resultado = numero * porcentaje;
  return resultado;
}

let resultadoFuncion = calcularPorcentaje(100, 0.4);
console.log(resultadoFuncion);