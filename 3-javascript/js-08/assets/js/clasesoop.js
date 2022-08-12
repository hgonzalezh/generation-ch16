class Persona{

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  get _nombre(){
    return this.nombre;
  }
  set _nombre(nombre) {
    this.nombre = nombre;
  }
}

let persona1 = new Persona('Leticia','Ramirez');
console.log(persona1);

persona1.nombre = 'Hugo';
console.log(persona1.nombre);

let persona2 = new Persona('Ana','Cruz');
console.log(persona2);

