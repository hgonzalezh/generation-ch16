'use strict';

/* Ciclo for */
for (let i = 0; i < 5; i++) {
  console.log(i);  
}


/* While */
let control = 0;

while(control < 5){
  console.log("while: " + control);
  control++;
}


let control2 = true;

while(control2 === false) {
  alert("Estoy trabajando");
}

/* Ciclo Do While */
let numero = 0;

do {
  console.log("Do...While:" + numero);
  numero++;
}while(numero < 5);