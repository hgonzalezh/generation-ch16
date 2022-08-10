// Variable que simula los datos pedidos
const saludo = 'Hola mundo';
const datos = [
{
  nombre: 'Jonas',
  apellido: 'Vazquez'
},
{
  nombre: 'Jonas',
  apellido: 'Vazquez'
},
{
  nombre: 'Jonas',
  apellido: 'Vazquez'
}
];

// Funcion para simular una peticion
function obtenerDatos(){

  return new Promise( (resolve, reject) => {
    
    setTimeout( () => {

      if (false){

        resolve(datos);

      } else reject("No se pudo obtener datos");
    }, 2000)

  } )

}

// Forma 1
obtenerDatos().then( (datos) => {
  
  console.log(datos);
} ).catch( (error) => {
  console.log('Existe un error en la peticion 1');
  console.log(error);
})

// Forma 2 - Funciones asíncronas - await async
async function funcionAsincrona() {

  try{

    const datos = await obtenerDatos();
    console.log(datos);

  }catch(error) {
    console.log(error);
  }

  
}

funcionAsincrona();