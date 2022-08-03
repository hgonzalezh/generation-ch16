// Condicionales

// if
let condicion = "B";

if (condicion === "A"){

  console.log("Entró en la condición A");

} else if (condicion === "B"){

  console.log("Entró en la condición B");

} else if (condicion === "C"){
  
  console.log("Entró en la condición C");

} else {
  console.log("No cumple con ninguna");
}

function dividir (a, b){
  if (b === 0){
    console.log("No se puede realizar la operación");
  } else {
    console.log(a / b);
  }
}
dividir (10, 2);


// Declaración Switch
let nuevaCondicion = "Saludo";
switch (nuevaCondicion) {
  case "Hola":
    console.log("Buenos días");
    console.log("Espero que te encuentres bien");
    break;

  case "Adios":
    console.log("Nos vemos");
    break;
  
  case "Saludo":
    console.log("Te mando un saludo");
    break;

  default:
    console.log("No entendí tu mensaje");
    break;
}

// Ejercicio: Determinar si alguien es mayor o menor de edad utilizando Switch
let edad = 30

    switch(edad >= 18){
        case true:
            console.log("Es mayor de edad");
            break
        case false:
            console.log("Es menor de edad");
    }


// Prototipo de calculadora utilzando switch
let elegir = "sumar";
switch (elegir) {
  case "sumar":
    console.log("Vamos a sumar");

    break;

  case "restar":
    console.log("Vamos a restar");
    break;
  
  case "multiplicar":
    console.log("Vamos a multiplicar");
    break;

    case "dividir":
      console.log("Vamos a dividir");
      break;

  default:
    console.log("No entiendo");
    break;
}

// Prototipo de calculadora utilzando if, else, else if

if (elegir === "sumar"){

  console.log("Vamos a sumar");

} else if (elegir === "restar") {

  console.log("Vamos a restar");

} else if (elegir === "multiplicar") {

  console.log("Vamos a multiplicar");

} else if (elegir === "dividir") {

  console.log("Vamos a dividir");

} else {

  console.log("No entiendo");
  
}