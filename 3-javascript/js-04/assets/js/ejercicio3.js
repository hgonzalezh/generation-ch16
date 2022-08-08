/* /*
 Ejercicios sobre arrays - https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
*/

/* 
Exercise #3
Write while loops to do the following:

3.1 - Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.

3.2 - Print all the odd numbers between 1 - 100.

3.3 - Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]

3.4 - Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190

*/

// EJERCICIO 3.1
let xValue = 5;

while(xValue >= 0){
  console.log(xValue);
  xValue -= 0.5;
  
}

// EJERCICIO 3.2
let num = 1;
while (num <= 100){
  if ((num % 2) === 1) console.log(num);
  num++;
}

// EJERCICIO 3.3
let cantidadCorchetes = 10;
let i = 1;
while (i <= cantidadCorchetes) {
  console.log(`[${i}] `);
  i++;
}

// EJERCICIO 3.4
let entero = 19;
let suma = 0;
let j = 1;

while(entero >= j) {
  suma += j;
  j++;
  console.log(suma);
}