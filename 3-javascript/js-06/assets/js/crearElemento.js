// .createElement(tag,options) - Crear un elemento 
const imagen = document.createElement('img');
console.log(imagen); // Se crea un etiqueta pero no se inserta en el documento

// Modificar los atributos HTML del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imagen aleatoria de animales obtenida de placeimg.com';

// apendChild(node) - Añade como hijo el nodo indicado

document.body.appendChild(imagen);

// insertAdjacentElement - Inserta el elemento adyacente al elemento indicado
document.body.insertAdjacentElement("afterbegin", imagen);
document.body.insertAdjacentElement("afterend", imagen);
document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);

// Forma correcta de crear e insertar una imagen
// 1.- Se crea el elemento que contendrá la imagen
// 2.- Seleccionar el elemento padre
const padreImg = document.getElementById("padreImg");

// 3.- Crear el elemento
const imagen2 = document.createElement('img');

// 4.- Modificar los atributos de la imagen
imagen2.src = 'https://placeimg.com/200/200/nature';
imagen2.alt = 'Imagen aleatoria sobre naturaleza obtenida de placeimg.com';

// 5.- Insertar elemento con appendChild()
padreImg.appendChild(imagen2);

// Utilizar forEach para "pintar" (agregar) datos de un arreglo al documento HTML
const frutas = ['Toronja', 'Manzana', 'Mandarina', 'Limon', 'Granada', 'Melon', 'Platano', 'Guayaba'];

const listaFrutas = document.getElementById('frutas');

// Forma 1 

/* frutas.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;
  listaFrutas.appendChild(li);
}); */


// Forma 2

frutas.forEach((el) => {
  listaFrutas.innerHTML += `<li>${el}</li>`;
});