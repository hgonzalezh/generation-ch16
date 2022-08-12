/* Tipo predefinido */
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

let objLiteral = {
  nombre: 'Juan',
  edad: 35 
}

let objConstructor = new Object();
objConstructor.nombre = 'Juan';
objConstructor.edad = 35;

console.log(objLiteral);
console.log(objConstructor);

objLiteral['nombre'];
let llave = 'nombre';
console.log('Esto es con llave: ' + objLiteral[llave]);

/* Tipo cadena */
let cadena = 'Esto es una cadena';
let cadenaObj = new String('Esto es otra cadena obj');
console.log(cadena);
console.log(cadenaObj);

/* Tipo numérico */
let numero = 13;
let numeroObj = new Number(13.13);
console.log(numero);
console.log(numeroObj);

/* Tipo arreglo */
let lista = ['2','3','5','7'];
let listaObj = new Array('1','4','6','8','9');
console.log(lista);
console.log(listaObj);