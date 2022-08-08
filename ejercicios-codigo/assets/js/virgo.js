// CASA VIRGO

/* Una juguetería tiene mucho éxito en dos
productos: payasos y muñecas. Suele hacer
venta por correo y la empresa de logística les
cobra por paquete, así que deben calcular el
peso de los paquetes que se enviaran. Cada
payaso pesa 112 gramos y cada muñeca 75
gramos.
Escribe un programa que lea el número de
payasos y muñecas vendidos y calcula el peso
total del pedido que será enviado, considerando
que el peso máximo del paquete es de 1kg.
● Muestra en alertas el peso total por cada
artículo
● Muestra en alertas cuántos paquetes se
enviaran */

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

