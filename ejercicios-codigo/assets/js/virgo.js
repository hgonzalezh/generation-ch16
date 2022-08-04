// CASA VIRGO
'use strict';
let pedidoPayaso = Number(prompt("Ingresa el numero de payasos: "));
let pedidoMunecas = Number(prompt("Ingresa el número de muñecas: "));

let pesoPayaso = pedidoPayaso * 112;
let pesoMunecas = pedidoMunecas * 75;

let pesoTotal = pesoPayaso + pesoMunecas;
let numPaquetes = 0; 

if (pesoTotal <= 1000) {
  numPaquetes = 1;
} else if (pesoTotal > 1000) {
   numPaquetes = Math.ceil(pesoTotal/1000);
}

alert(`Peso total de muñecas: ${pesoMunecas}g
Peso total de payasos: ${pesoPayaso}g
Paquetas totales a enviar: ${numPaquetes}`);

