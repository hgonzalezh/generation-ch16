// PATRIARCA

/* 
¿Recuerdas el programa del cajero? Ahora
tendrás que agregar las siguientes
funcionalidades:
● Para realizar retiros, se deberá solicitar un
código PIN de 4 dígitos (9182)
● Solo se podrán hacer retiros en múltiplos
de $200
● Al solicitar un retiro, se entregará la
cantidad con la menor cantidad de billetes
posible (se tienen billetes de $20, $100,
$200, $500 y $1000)
*/

let salir = false;
let opcion = 0;
let saldo = 10000;

function billetes(cantidad) {
  const denominacionBilletes = [0,0,0,0];

  // Contador billetes mil
  for(denominacionBilletes[0]; cantidad >= 1000; denominacionBilletes[0]++) {
    cantidad -= 1000;
  }

  // Contador billetes 500
  for(denominacionBilletes[1]; cantidad >= 500; denominacionBilletes[1]++) {
    cantidad -= 500;
  }

  // Contador billetes 200
  for(denominacionBilletes[2]; cantidad >= 200; denominacionBilletes[2]++) {
    cantidad -= 200;
  }
  
  // Contador billetes 100
  for(denominacionBilletes[3]; cantidad >= 100; denominacionBilletes[3]++) {
    cantidad -= 100;
  }

  return denominacionBilletes;
}

while (salir === false) {

  opcion = Number(prompt(`Bienvenido a Cajero ATM!
Por favor, selecciones un opcioón:
1 - Depositar dinero
2 - Retirar dinero
3 - Consultar saldo
Para salir, ingresa cualquier otro valor`));

  opcion = Math.trunc(opcion);

  if (opcion > 4 || opcion < 1) opcion = null;

  switch (opcion) {
    case 1:
      let deposito = Number(prompt("Ingresa la cantidad a depositar:"));
      saldo = saldo + deposito;
      break;

    case 2:
      let pin = prompt("Por favor, ingrese su PIN a cuatro dígitos:");

      if (pin === "9182") {
        let retiro = Number(prompt(`Ingresa la cantidad a retirar.
      Por favor, ingrese únicamente múltiplos de 200:`));
        if (retiro > saldo || (retiro % 200 !== 0)) alert("No puede retirar esa cantidad");
        else {
          let totalBilletes = billetes(retiro);
          alert(`Se han retirado \$${retiro}
          Billetes de $1,000: ${totalBilletes[0]}
          Billetes de $500: ${totalBilletes[1]}
          Billetes de $200: ${totalBilletes[2]}
          Billetes de $100: ${totalBilletes[3]}`);
          saldo = saldo - retiro;
        }
      } else alert("Operación fallida");
      
      break;

    case 3:
      alert(`El saldo en el cajero es de:  ${saldo}`);
      break;

    default:
      salir = true;
      break;
  }

}