function miSuma(a, b) {
  let resultado = (a + b);
  console.log("la suma es:", resultado);
}
miSuma(2, 3);

function miSuma(a, b){
  console.log("la suma es: " + (a + b));
}
miSuma(4, 6);

function miProducto(a, b){
  return (a * b);
}

console.log("El producto es: " + miProducto(4, 5));

let res;

function miResta(a, b){
  return (a - b);
}
res = miResta(10, 4);

console.log("La resta es " + res);

// Funcion para imprimir nombre completo en pantalla
function nombreCompleto(nombres, apellido1, apellido2){
  console.log("Tu nombre completo es: " , nombres, apellido1, apellido2);
}
nombreCompleto("Héctor Osiel","González","Hernández");

// Funcion división
function division(divisor, dividendo){
  console.log("Resultado:", (dividendo / divisor));
}
division (5,50);