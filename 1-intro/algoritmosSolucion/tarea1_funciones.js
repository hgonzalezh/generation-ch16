function divisionSieteOcho (input) {
  if (input % 7 == 0 && input % 8 ==0 ) {
    return true;
  } else {
    return false;
  }
}

let numero = parseInt(prompt("Ingresa un número entero:"));
console.log(divisionSieteOcho(numero));