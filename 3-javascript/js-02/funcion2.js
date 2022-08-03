'use strict';
function miFuncion(a, b){
  return (a + b);
}
let resultado = miFuncion(3, 6);
console.log(`El Resultado es: ${resultado}`);
/******************************************************************** */
// Función expresión o anónimas

let suma = function(a, b){return(a + b);}
let resultadoSuma = suma(2, 3);

console.log("La suma es: " + resultadoSuma);

// Funcion expresión para resta
let resta = function(minuendo, sustraendo){return (minuendo - sustraendo)};
let resultadoResta = resta(80, 60);

console.log("El resultado de la resta es: " + resultadoResta);

// Funcion expresion para multiplicacion
let multi = function(multiplicando, multiplicador){return (multiplicando * multiplicador)};
let resultadoMultiplicacion = multi (16, 4);

console.log("El resultado de la multiplicación es: " + resultadoMultiplicacion);

// Funcion expresion para division
let division = function(dividendo, divisor){return (dividendo / divisor)};
let resultadoDivision = division (100, 20);

console.log("El resultado de la división es: " + resultadoDivision);

/******************** Self Invoking *******************************/

(function (a,b){
  console.log("El resultado de la función autoinvocante es: " + (a + b));
}
)(3, 4);
