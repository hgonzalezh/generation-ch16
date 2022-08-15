const palindromo = require('../js/palindromo.js');

describe('Pruebas de la función palindormo', () => {
  test('Debe regresar "Es un palindromo" si ingresamos ojo', () => {
    let mensaje = 'Es un palindromo';
    let palabra = 'ojo';

    expect( palindromo(palabra) ).toBe(mensaje);
  })

  test('No debe regresar "Es un palindromo" al ingresar la palabra generation', () => {
    let mensaje = 'Es un palindromo';
    let palabra = 'generation';

    expect( palindromo(palabra) ).not.toBe(mensaje);
  })

  test('Al ingresar un número debe ingresar el mensaje', () => {
    let mensaje = 'No es una palabra';
    let valor = 1;

    expect(palindromo(valor)).toBe(mensaje);
  })

})