'use strict';
//  Casa Escorpio

/* donde generas un número aleatorio y el usuario
tendrá que adivinarlo.
Considera lo siguiente:
● Si el numero ingresado es mayor, mostrar
“El número que ingresaste es mayor al
número mágico”
● Si el numero ingresado es menor, mostrar
“El número que ingresaste es menor al
número mágico”
● Si el número ingresado es igual al número
mágico, mostrar “Felicidades, adivinaste el
número mágico”
● Agregar una opción para finalizar el
programa */

let numeroMagico = (function (max) {
  return Math.floor(Math.random() * max);
}
)(101);

let terminarJuego = false;
let numeroUsuario = Number(prompt(`Adivina el número mágico (entre 0 y 100)
Escribe un número negativo para salir`));
if (numeroUsuario < 0) window.close();

while (terminarJuego === false) {
  if (numeroUsuario > numeroMagico && numeroUsuario >= 0) {
    numeroUsuario = Number(prompt(`El número que ingresaste es MAYOR al número mágico. Prueba de nuevo.
    Escribe un número negativo para rendirte y salir`));
  } else if (numeroUsuario < numeroMagico && numeroUsuario >= 0) {
    numeroUsuario = Number(prompt(`El número que ingresaste es MENOR al número mágico. Prueba de nuevo.
    Escribe un número negativo para rendirte y salir`));
  } else if (numeroUsuario === numeroMagico) {
    alert("Felicidades, adivinaste el número mágico");
    terminarJuego = true;
  } else if (numeroUsuario < 0) {
    terminarJuego = true;
  }
}

if (numeroUsuario < 0) window.close();