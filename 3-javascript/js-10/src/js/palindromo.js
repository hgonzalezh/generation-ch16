/* const palindromo = (palabra) => {
  let palabraInvertida = palabra.split('').reverse().join('').toLowerCase(); 

  if(palabra.toLowerCase() === palabraInvertida){
    return 'Es un palindromo';
  } else{
    return 'No es un palindromo'
  }   
} */

// Operador ternario
 /* 
 Sintaxis
(condición) ? (verdadera) : (falsa)

  */
const palindromo = (palabra) => {
  if(typeof palabra !== 'string'){
    return 'No es una palabra';
  } else{
    let palabraInvertida = palabra.split('').reverse().join(''); 

    return palabra === palabraInvertida ? 'Es un palindromo' : 'No es un palindromo'; 
  }
  
}

console.log(palindromo(true));


module.exports = palindromo;