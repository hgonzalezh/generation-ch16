'use strict';

/* URLs para consumir */
const urlAleatorios = 'https://dog.ceo/api/breeds/image/random';

/* Elementos del DOM */
const imagenPerrito = document.getElementById("img-perrito");
const btn = document.getElementById('btn-perrito');

/* Eventos */
btn.addEventListener("click", (e) => {

  console.log('Boton presionado');  // Comprobacion de sintaxis del AddEventListener
  obtenerPerritoAleatorio(urlAleatorios);  // Agregar funcionalidad del boton
  
} )

/* Funciones */
async function obtenerPerritoAleatorio(url){
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  console.log(datos.message);
  console.log(datos.status);

  imagenPerrito.src = datos.message;
}

// obtenerPerritoAleatorio(urlAleatorios);