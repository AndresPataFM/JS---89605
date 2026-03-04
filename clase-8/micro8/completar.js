// Completar el código para realizar una solicitud a una API utilizando fetch, manejarla con async-await y capturar errores con try-catch.
async function fetchData() {
  // const apiUrl = 'https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/productos-cosmocurio.json';
  const apiUrl = 'productos-cosmocurio.json';
  try {        
    const response = await fetch(apiUrl);        
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return 'Error al obtener los datos.';
  }
}

fetchData()
    .then((result) => console.log('Datos obtenidos:', result))
    .catch((error) => console.error('Error:', error));

