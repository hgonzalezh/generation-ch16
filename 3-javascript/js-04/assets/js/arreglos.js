'use strict';
/* 
Arreglos:
Coleccion de elementos donde cada elementos ocupa una posición.
Esa posición se conoce como índice y comienza a partir de 0
*/
let arr = [1, 2, 3, 4];
console.log(arr);

// Propiedades - Describen el objeto, en este caso, al arreglo
// Métodos - Acciones que pueden realizar los objetos

console.log(arr[2]);
arr[4] = 190;
arr[4] = "Hola"
console.log(arr);

// Métodos de arreglos
 const arreglo = ["adiós"];

//  Método .push() - Agrega elementos al final del arreglo
arreglo.push(2);
arreglo.push(true);

let num = 500;

arreglo.push(num);

console.log(arreglo);

//  Método .unshift() - Agrega elementos al inicio del arreglo
arreglo.unshift('A');
arreglo.unshift('B');
console.log(arreglo);

// Método .pop() - Elimina el elemento al final del arreglo y retorna el elemento eliminado
let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

// Método .shift() - Elimina el elemento al inicio del arreglo y retorna el elemeneto eliminado

let dato2 = arreglo.shift();
console.log(dato2);

console.log(arreglo);

//  Método .splice() - Quita elementos de cualquier posición de nuestro arreglo

arreglo.splice(1, 2, "paranguricutirimicuaro");

console.log(arreglo);

/* Todos los métodos hasta ahora modifican el arreglo original */


/* Métodos que no modifican el arreglo original
    hacen una copia y la modifican
 */

  //  Método .slice() - Copia partes de un arreglo, retorna lo que se copia

  let dato3 = arreglo.slice(0, 1);
  console.log(dato3);
  console.log(arreglo);
