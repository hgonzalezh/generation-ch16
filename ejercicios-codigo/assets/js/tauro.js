'use strict';
/* 1 Tauro */
 
let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea","Jose"];
console.log(carreritas);

carreritas.splice(4,1);
carreritas.splice(2,0,"andrea");
console.log(carreritas);

/* jose descalificado */
carreritas.pop();
console.log(carreritas);

/* Detrás de Lucia y antes de Roberto se clasifican tres nuevo corredores: Cristobal, Fernanda y Armando
 */

carreritas.splice(1,0,"Cristobal","Fernanda","Armando");
console.log(carreritas);

/* Nuevo concursante */

carreritas.unshift("Federico");
console.log(carreritas);