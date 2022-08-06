let texto = "hoy parece que va a salir el sol";

let buscar = /sol/;  // Método con diagonales
console.log(buscar.test(texto));

let texto2 = "La espero en el aeropuerto de LA"
let buscar2 = /LA/;

console.log(buscar2.test(texto2));

let texto3 = "Te marqué anoche";
let buscar3 = /[eo]/;

console.log(buscar3.test(texto3));
