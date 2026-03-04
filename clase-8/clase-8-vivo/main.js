/* console.log("inicio")
setTimeout(()=>{console.log(1)},3000)
setTimeout(()=>{console.log(2)},1000)
setTimeout(()=>{console.log(3)},2000)
setTimeout(()=>{console.log(4)},0)
console.log("fin")


 */

/* let desconectarCuenta = setTimeout(()=>{
  console.log("desconecto tu cuenta")
},5000) */

/* let contador = 0

const intervalo = setInterval(()=>{
  console.log(++contador)
},1000)


setTimeout(()=>{
  clearInterval(intervalo)
  console.log("frenar intervalo")
}, 5000) */


/* document.body.addEventListener("mousemove",()=>{
  console.log("permaneces conectado")
  clearTimeout(desconectarCuenta)
  desconectarCuenta = setTimeout(()=>{
    console.log("desconecto tu cuenta")
  },5000)
}) */


/* console.log("inicio")
try {
  console.log(1)
  const hola = "hola"
  console.log(2)
  hola = "asd"
  console.log(3)
  console.log(hola)
} catch (error) {
  console.warn(error)
} finally {
  console.log(4)
}
console.log("fin")
 */


function tirarMoneda(){
  new Promise((resolve, reject)=>{
    let moneda = Math.floor(Math.random()*2+Number.EPSILON)
    if(moneda === 1){
      return resolve("Cara")
    } else {
      return reject("Cruz")
    }
  })
  .then(r=>{console.log(r)})
  .catch((e)=>{console.warn(e)})
}

// tirarMoneda()

/* console.log(
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(resultado=>{
    console.log(resultado)
    return resultado.json()
  }).then(r=>{
    console.log(r)
  }).catch(e=>console.warn(e))
) */

const listaHTML = document.querySelector("#productos")
const btnTraer = document.getElementById("traer")

function traerProd(){
  fetch("lista.json")
  .then(resultado=>{
    // console.log(resultado)
    return resultado.json()
  }).then(r=>{
    // console.log(r)
    listaHTML.innerHTML = ""
    r.forEach(prod=>{
      const li = document.createElement("li")
      li.innerHTML = prod.nombre
      li.id=`prod-${prod.id}`
      listaHTML.appendChild(li)
    })
  }).catch(e=>console.warn(e))
}

// btnTraer.addEventListener("click",traerProd)

async function traerProdAsync(){
  try {
    // llamado a la api
    const datosJSON = await fetch("lista.json")
    console.log(datosJSON)
    // convertir datos de JSON a JS
    const datos = await datosJSON.json()
    console.log(datos)
    
    // Utilizar Datos
    listaHTML.innerHTML = ""
    datos.forEach(prod=>{
      const li = document.createElement("li")
      li.innerHTML = prod.nombre
      li.id=`prod-${prod.id}`
      listaHTML.appendChild(li)
    })
  } catch (error) {
    console.warn("error:", error)
    listaHTML.innerHTML = "Hubo un error"
  }

}

btnTraer.addEventListener("click",traerProdAsync)




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
/* 
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






 */








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

// cargarPokemon() 

async function perri(){
  const perritoHTML = document.getElementById("perri")

  const imgJSON = await fetch("https://dog.ceo/api/breeds/image/random")
  console.log(imgJSON)
  const imgData = await imgJSON.json()
  console.log(imgData)
  perritoHTML.src = imgData.message
}

setInterval(perri, 5000)

/* fetch("https://dog.ceo/api/breeds/list/all")
.then(r=>r.json())
.then(r=>console.log(r)) */