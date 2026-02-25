// console.log(document)
console.dir(document)

// get

// getElelementById(string) // Find

/* console.log(document.getElementById("menu"))
console.dir(document.getElementById("menu")) */

// getElementsByClassName(string) // filter
/* console.log(document.getElementsByClassName("rojo"))
console.dir(document.getElementsByClassName("rojo")) */


// getElementByTagName(string) // filter

/* console.log(document.getElementsByTagName("div"))
console.dir(document.getElementsByTagName("div")) */



// query // consulta

// querySelector(string) // find
// etiqueta#id.clase
// etiqueta
// #id
// .clase
/* console.log(document.querySelector("div#encontrame.cursiva"))
console.dir(document.querySelector("div#encontrame.cursiva"))
console.dir(document.querySelector(".rojo"))
console.dir(document.querySelector("#menu")) */


// querySelectorAll(string) // filter

/* console.dir(document.querySelectorAll(".rojo")) */

// Modificamos

const divEncontrame = document.getElementById("encontrame")

console.dir(divEncontrame)
// console.dir(divEncontrame.id)
console.dir(divEncontrame.className)
console.dir(divEncontrame.classList)
// console.dir(divEncontrame.innerText)
// console.dir(divEncontrame.innerHTML)
// divEncontrame.className += " borde"
// divEncontrame.classList.toggle("borde")
function darkMode(){
  document.getElementById("soyElHTML").classList.toggle("darkmode")
}

// Crear

const productos = [
  {nombre:"🍟", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4Kvi_vx0oPJmkpBH0Z_XSK81Z23iDchqxw&s", precio:2},
  {nombre:"🥟",src:"https://chefstv.net/wp-content/uploads/2024/03/0045-empanadas-saltenas-fritas-wide-web.webp", precio:3},
  {nombre:"🍕",src:"https://www.foodandwine.com/thmb/iJw7N_NfcPpd-EB8rpYbzrkSFIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg", precio:4},
  {nombre:"🍔",src:"https://www.foodandwine.com/thmb/iJw7N_NfcPpd-EB8rpYbzrkSFIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg", precio:5}
]

const lista = document.createElement("ul")
// lista.innerHTML = "hola fui creado"
/* const li = document.createElement("li")
li.innerText = "Primer elemento" */

class ProdCarrito{
  constructor(nombre, precio, cantidad){
    this.nombre=nombre
    this.precio=precio
    this.cantidad=cantidad
  }
}

const carrito = []

function mostrarCarrito(){
  const seccionCarrito = document.getElementById("carrito")
  const carritoDOM =  document.createElement("ul")
  carrito.forEach(e=>{
    carritoDOM.innerHTML =""
    const li = document.createElement("li")
    li.innerText = `${e.nombre}: ${e.cantidad} x $${e.precio} = $${e.precio*e.cantidad}`
    carritoDOM.appendChild(li)
  })
  seccionCarrito.appendChild(carritoDOM)
}

productos.forEach(prod=>{
  const li = document.createElement("li")
  // li.innerText = prod
  // li.innerText = `${prod.nombre} - $${prod.precio}`
  const div = document.createElement("div")
  const h2 = document.createElement("h2")
  const img = document.createElement("img")
  const h3 = document.createElement("h3")
  const button = document.createElement("button")
  h2.innerHTML = prod.nombre
  img.src = prod.src
  h3.innerText = "$ " + prod.precio
  button.innerText="comprar"
  button.addEventListener("click",()=>{
    // alert("agregado al carrito")
    carrito.push(new ProdCarrito(prod.nombre, prod.precio, 3))
    mostrarCarrito()
  })

  //crear carta prod
  div.appendChild(h2)
  // div.appendChild(img)
  div.appendChild(h3)
  div.appendChild(button)
  // button.onclick=()=>{alert("agregado al carrito")}

  // div.innerHTML=`<div><h2>$prod.nombre</h2><h3>$ ${prod.precio}}</h3><button>comprar</button></div>`

  // div.innerHTML=`<div><h2>${prod.nombre}</h2><h3>$ ${prod.precio}</h3><button >comprar</button></div>`

  // mal no agreguen eventos así como atributos en linea resta puntos
  /* div.innerHTML=`<div><h2>${prod.nombre}</h2><h3>$ ${prod.precio}</h3><button onclick='alert("agregado al carrito")' >comprar</button></div>` */


  //agregar prod a la lista
  li.appendChild(div)

  //agregar lista al DOM
  lista.appendChild(li)
})


// lista.appendChild(li)
console.log(lista)


// agregar al dom

divEncontrame.appendChild(lista)
