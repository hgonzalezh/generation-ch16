// getElementById() - Método para seleccionar un elemento HTML por ID

console.log(document.getElementById("parrafo1"));

const parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";
console.log(parrafo1.textContent);

parrafo1.style.color = 'red';
parrafo1.style.backgroundColor = 'yellow';

console.log(parrafo1.style.color);

// querySelector() - Metodo para seleccionar elementos HTML usando selectores CSS

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent += "Modificando el contenido desde JavaScript";
console.log(parrafo2.textContent);

// querySelectorAll() - Retorna una lista de nodos que coinciden con el selector especificado
const parrafos = document.querySelectorAll('p');
console.log(parrafos);
console.log(parrafos[2]);

parrafos[2].style.fontSize = "1.5rem";

// Modificar los atributos de HTML
const enlace = document.getElementById("enlace");
console.log(enlace.href);

enlace.href = "https://www.youtube.com";
enlace.target = '_blank';
enlace.textContent = 'Enlace de Youtube';

//  Ejercicio: Modificar el CSS de elementos utilizando la manipulacion del DOM 
parrafos[1].style.border = "solid 1px blue";
parrafos[2].style.fontFamily = "monospace";

/* Reemplazar contenido */

const parrafo4 = document.getElementById('parrafo4');
console.log(parrafo4.nodeName);  // Devuelve el nombre del tipo de nodo o etiqueta en caso de ser un elemento HTML
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML);  // Muestra el contenido dentro del elemento HTML
console.log(parrafo4.outerHTML);  // Muestra el contenido del elemento HTML, incluyendo sus propias etiquetas y atributos.

// parrafo4.textContent = '<a href="https://google.com">Enlace</a>';  // Reemplaza el texto tal y como está escrito
// parrafo4.innerHTML = '<a href="https://google.com">Enlace</a>';  // Reemplaza el contenido del elemento con formato HTML
// parrafo4.outerHTML = '<a href="https://google.com" id="parrafo4" >Enlace</a>';  // Reemplaza el elemento original por el valor del outerHTML

// parrafo4.outerHTML = '<div class="elemento">Este es un texto normal</div>';




// Modificando CSS en JS utilizando classList
console.log(parrafo4.classList.contains('elemento'));


const cambiarColor = () => parrafo4.classList.toggle('elemento');
cambiarColor();