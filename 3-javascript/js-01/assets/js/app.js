'use strict';
//  Tipos de datos en JS

// Tipos de variables
var a;        // alcance global
const b = 0;  // alcance de bloque, no puede reasignarse o redeclararse
let c;        // alcance de blqoue, puede reasignarse, pero no redeclararse

// String
let cadena = "Hola mundo";

// Number
let numero = 5;
let numero1 = 5.185;
let numero2 = -5.98;

// Boolean
let valorBooleano = true;
let valorBooleano2 = false;

// undefined
let indefinido;  // undefined

// null
let valorNulo = null;  // null

/*
  Plantillas literales
  Template strings
  Literal strings
  Interpolación
*/
console.log(`Esta es una cadena ${5 + 4}`);

let nombre = "Raul";

console.log("Mi nombre es " + nombre);
console.log(`Mi nombre es ${nombre}`);

/* Arreglos - matrices - arrays */
let arr = [1, "A", null, undefined, [true, false]];
let arr2 = new Array();

//-------------Objetos---------
const persona={
  nombre: "Raúl",
  //fijate si pasa algo al no poner el espacio
  edad:12,
  hobbies:["Leer","Ver shrek","Comer"],
  auto: {
      marca: "VW",
      modelo: "Pointer",
      year:2000,
  },
  saludar: function(){
      return "Hola"
  }
}
//Notación de punto
console.log(`Mi hobbie es ${persona.hobbies[1]}`);
//imprimir elemento del arreglo dentro del objeto
console.log(`La marca de mi auto es ${persona.auto.marca}`)
//imprimir la función dentro del arreglo
console.log(persona.saludar());