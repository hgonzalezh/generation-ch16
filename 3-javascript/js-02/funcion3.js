/* ******************* Funciones como Objetos ******************** */
function miFuncion(a, b){
  let res = 0;
  res = (a * b);
  return res;
}

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);