/*
 Ejercicios sobre arrays - https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
*/

/* Exercise #2

Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *


 */



// Metodo con un solo for
let asteriscos = "";
for(let x = 0; x < 5; x++){
  asteriscos += "*";
  console.log(asteriscos);
} 

// Método con for anidados
for(let i = 1; i < 6; i++){ 
  let patron = '';

  for(let j = 0; j < i; j++){
    patron = patron + "*";
  }
  console.log(patron);
}

// Método for de adorno

for(let u = 0;u == 0; u++) {
  let patron2 = "";

  for(let v = 0; v < 5; v++){
    patron2 += "*";
    console.log(patron2);
  } 

}

  