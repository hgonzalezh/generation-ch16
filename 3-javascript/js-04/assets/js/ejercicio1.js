/*
 Ejercicios sobre arrays - https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
*/

/* 
Exercise #1
Part 1

There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.
Part 2

Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?
Part 3

It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
*/
'use strict';

// Parte 1
const fila = ["Sofia", "David", "Juan"];
console.log(fila);

// Parte 2
fila.shift();
fila.splice(2,0,"Pedro","Veronica");
console.log(fila);

//Parte 3
fila.splice(1,0,"Renata");
fila.push("Elena");
console.log(fila);