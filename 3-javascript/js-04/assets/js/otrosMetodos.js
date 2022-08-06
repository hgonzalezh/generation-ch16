// Método sort() - Ordena los elementos de un arreglo de acuerdo a su valor Unicode

const arr = ["X", "A", "H", "a", "W", "b"];
arr.sort();

console.log(arr);  // [ "A", "H", "W", "X", "a", "b" ]

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2.sort();

console.log(arr2);

const arr3 = [5, 1231, 567, 1, 80];
arr3.sort();

console.log(arr3);  // [ 1, 1231, 5, 567, 80 ]

// Funcion flecha 
arr3.sort((a, b) => a - b)
console.log(arr3);  // [ 1, 5, 80, 567, 1231 ]


// Método .forEach() - Ejecuta una funcion dada como  una vez por cada elemento del arreglo

// Multiplicar cada elemento por 2 sin forEach()
const arrNumeros = [1, 4, 6, 8, 10, 20, 30];
for (let i = 0; i < arrNumeros.length; i++){
  arrNumeros[i] *= 2; 
}
console.log(arrNumeros);

// Mulitplicar cada elemento por 2 con forEach()
arrNumeros.forEach(elemento => console.log(elemento * 2));

