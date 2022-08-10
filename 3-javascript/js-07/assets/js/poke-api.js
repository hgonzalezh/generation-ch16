/* URL a consumir */
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/152';


/* Elementos del DOM */
const imgPokemon = document.getElementById('img-pokemon');
console.log(imgPokemon);

const idPokemon = document.getElementById('id-pokemon');
console.log(idPokemon);

const nombrePokemon = document.getElementById('nombre-pokemon');
console.log(nombrePokemon);



/* Funciones */
async function obtenerPokemon(url){

  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  
  /* console.log(datos.forms[0].name);
  console.log(datos.abilities);
  console.log(datos.id);
  console.log(datos.types);
  console.log(datos.sprites.other["official-artwork"].front_default); */

    const pokemon = {
    nombre: datos.forms[0].name ,
    habilidadades: datos.abilities ,
    id: datos.id ,
    tipos: datos.types ,
    imagen: datos.sprites.other["official-artwork"].front_default 
  } 

  imgPokemon.src = pokemon.imagen; 
  idPokemon.textContent = 'ID: ' + pokemon.id; 
  nombrePokemon.textContent = pokemon.nombre;

}

obtenerPokemon(urlPokemon);