//Formas de declarar un arreglo

//Forma 1
let num = [];
console.log(num);

//Forma 2
let arr1 = new Array();
console.log(arr1);

// Utilización de un arreglo
const arr = [1,2,3,4,5];
console.log(arr);

// Notación de corchetes []
console.log(arr[3]);
 
arr[5]= 25; // añadir un valor
arr[6] = 8;
arr[6] = 0; //sustitución de valor
arr[10] = 40; // añade elementos vacios en los indices 7, 8 y 9
console.log(arr[8]); // undefined

// Propiedades de los arreglos
console.log(arr.length); // Imprime el numero de elementos en el arreglo, en este caso 11

//Metodos 
// push(): agrega un valor al final del arreglo
const frutas = ["manzana", "platano"];
console.log(frutas); // Dos elementos
frutas.push("naranja");
console.log(frutas); // Tres elementos: manzana, platano, naranja
console.log(frutas.length); // Tres elementos: manzana, platano, naranja

// pop(): elimina el ultimo elemento de un arreglo y devuelve el elemento eliminado

let elementoBorrado = frutas.pop(); // Elimina "naranja"
console.log(frutas);  // Quedan 2 frutas
console.log(elementoBorrado); // Imprime naranja

// Arreglos multidimensionales
const newArr = [1,45,"Hola","Adios",true,null, [30,31,32],["Azul","Amarillo","Verde"]];
console.log(newArr); // Imprime todo el contenido del arreglo
console.log(newArr[6][0]); // Imprime el numero 30
console.log(newArr[7][1]); // Imprime la cadena "Amarillo"

/*
Objetos:
Estructura especial llamada objeto
nos permiten guardar pares de valores
key   :   value
llave  :  valor
*/
const obj = {
  nombre : "Pedro",
  edad : 25 ,
  color : "Azul",
  pasatiempos: ["Leer", "Correr"]
}

console.log(obj); // Imprimir todo el objeto
console.log(obj.edad); // Imprimir las propiedades individuales
