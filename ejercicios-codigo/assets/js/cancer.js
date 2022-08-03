'use strict'

let celsius = Number(prompt("Por favor, ingresa un valor de temperatura en °C:"));

let conversionFahrenheit = (function (valorCelsius) {
  return ((valorCelsius * 9)/5) + 32;
})

let conversionKelvin = function (valorCelsius){
  return (valorCelsius + 273.15);
}

alert (`Temperatura en °F: ${conversionFahrenheit(celsius).toFixed(2)}

Temperatura en Kelvin: ${conversionKelvin(celsius).toFixed(2)}`);