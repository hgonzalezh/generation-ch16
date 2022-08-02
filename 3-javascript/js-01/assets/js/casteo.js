'use script';

// Conversión de datos
// Casteo (Casting)
// Parseo (Parsing)

let num = "5";
let num2 = "10";

// Concatenación
// Resultado de unir dos cadenas de texto
// O de unir una cadena de texto con un número
console.log(num + num2);

// Conversión implícita de tipo o coersión
console.log(num - num2);


// Conversión a número: Number()
let num3 = "56";
console.log(Number(num3));

// Conversión a cadena de texto: String()
let num4 = String(0);
console.log(num4);
console.log(typeof(num4));

// Coversión de dato a tipo booleano: Boolean()
// 0, "", null, undefined, NaN se convierten a un valor booleano de false
// 
let num5 = Boolean(NaN);
console.log(num5);
console.log(typeof(num5));
