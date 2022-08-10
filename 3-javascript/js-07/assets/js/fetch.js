// Fetch API

// Respuesta de la petición
const url = 'https://dog.ceo/api/breeds/image/random';
fetch(url).then( (respuesta)=>console.log(respuesta) );

// Obtener la infromación de la petición
// Forma 1
fetch(url)
.then( (respuesta) => respuesta.json() )
.then( (datos) => console.log(datos) )
.catch( (error) => console.log(error) );

// Forma 2
async function obtenerPerritoAleatorio() {

  try{
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos);

  }catch(error){

    console.log(error);
    
  }
}

obtenerPerritoAleatorio();