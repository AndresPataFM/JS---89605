
























/* function tirarMoneda(){
  new Promise((resolve, reject)=>{
    let moneda = Math.floor(Math.random()*2+Number.EPSILON)
    if(moneda === 1){
      return resolve("Cara")
    } else {
      return reject("Cruz")
    }
  })
}
 */

const btnTraer = document.getElementById("traer")


function mostrarLista(lista){
  const ulProductos = document.getElementById("productos")
  ulProductos.innerHTML = ""
  lista.forEach(prod=>{
    const li = document.createElement("li")
    li.innerText = `${prod.id} - ${prod.nombre}`
    ulProductos.appendChild(li)
  })
}


async function conseguirLista(){
  try{
    // conseguir datos mediante fetch
    const listaJSON = await fetch("./lista.json")
    // procesar el resultado de JSON a JS
    const listaJs = await listaJSON.json()

    // Utilziar datos JS
    mostrarLista(listaJs)
  } catch (e) {
    console.warn("error:", e)
  }
}

btnTraer.addEventListener("click",()=>{
  conseguirLista()
})


btnTraer.addEventListener("click",()=>{
  fetch("./lista.json")
  .then(rta=>{
    return rta.json()
  })
  .then(r=>{
    mostrarLista(r)
  })
  .catch(e=>console.warn("error"))
  .finally(console.log("proceso finalziado"))

})















const listaDOM = document.getElementById("pokemon")
// query parameters | parametros de búscqueda
// const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
const url = "https://pokeapi.co/api/v2/saraza1"

function mostrarPokemons(arrayPokemon){
  listaDOM.innerHTML = ""
  arrayPokemon.forEach(pokemon => {
    const a = document.createElement("a")
    const li = document.createElement("li")
    a.href = pokemon.url
    a.target = "_blank"
    a.textContent = pokemon.name
    li.appendChild(a)
    listaDOM.appendChild(li)
  });
}


// fetch(url).then(rta=>{
//   return rta.json()
// }).then(respuesta=>{
//   console.log(respuesta)
//   mostrarPokemons(respuesta.results)
// }).catch(e=>
//   console.warn("Fetch fallido")
// )

async function cargarPokemon(){
  try{
    // promesa inicial
    const datosJSON = await fetch(url)
    console.log(datosJSON)
    // promesa para cambiar a json
    const datos = await datosJSON.json()
    // agarro lo que uso de los resultados
    console.log(datos)
    const listaPoke = datos.results
    mostrarPokemons(listaPoke)
  }catch(e){
    console.warn(e)
    listaDOM.innerText = "ERROR"
  }
}

cargarPokemon()