let x = 10;
console.log(x.length);

const persona = {
  nombre: 'Jose',
  apellido: 'Torres',
  edad: '26',
  'correo electronico':  'josetorres@correo.com',
  //Declaracion de método notacion literal
  nombreCompleto: function () {
    return persona.nombre + ' ' + this.apellido;
  },
  idioma: 'es',
  get leng(){
    return this.idioma.toUpperCase();
  },
  set leng(lang) {
    this.idioma = lang.toUpperCase();
  }
}

console.log(persona.leng);
console.log(persona.leng);



persona.tel = '5559357821';

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona['correo electronico']);


//  For in

/* 

for (varPropiedad in persona) {
  console.log(persona[varPropiedad]);
} 

*/

let personaString = JSON.stringify(persona);
console.log(personaString);