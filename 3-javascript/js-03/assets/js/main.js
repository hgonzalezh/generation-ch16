/* ----------------- Bucles--------------------- */
// Los bucles son estructuras que nos permiten repetir nuestro código

/* ------ For - Ciclo controlado o definido ------ */
/* 
Se tiene que indicar lo siguiente:
    1.- La variable con la que va a trabajar (i, j , k)
    2.- Condicion para que se ejecute
    3.- El cambio de nuestra variable de trabajo
*/

for(let i = 0; i < 10; i++) {

  console.log("El valor de i es " + i);

}

/* --------- while - Ciclo indefinido ------------ */
/*
  Se necesita
    1.- Una condición => true o falso
*/
let saludo;

while(saludo !== "Hola") {

  saludo = prompt("Saludame");

}