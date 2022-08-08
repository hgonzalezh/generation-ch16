// CASA PISCIS

/* Crea un programa que emule las funciones de
un cajero automático.
Considera lo siguiente:
● El cajero solo cuenta con $10,000 de saldo.
● Cada transacción se descontará del saldo
del cajero.
● Se debe tener una función para consultar
el saldo del cajero */

let salir = false;
let opcion = 0;
let saldo = 10000;

while (salir === false) {

opcion = Number(prompt(`Bienvenido a Cajero ATM!
Por favor, selecciones un opcioón:
1 - Depositar dinero
2 - Retirar dinero
3 - Consultar saldo
Para salir, ingresa cualquier otro valor`));

if (opcion > 4 || opcion < 0 || opcion === null) opcion = 4;

switch (opcion) {
  case 1:
    let deposito = Number(prompt("Ingresa la cantidad a depositar:"));
    saldo = saldo + deposito;
    break;

  case 2:
    let retiro = Number(prompt("Ingresa la cantidad a retirar:"));
    if (retiro > saldo) alert("No puede retirar esa cantidad");
      else saldo = saldo - retiro;
    break;

  case 3:
    alert(`El saldo en el cajero es de:  ${saldo}`); 
    break;

  default:
    salir = true;
    break;
}

}