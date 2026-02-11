//Funciones de orden superior

//Return

// Función que crea funciones
function dx(caras){
  return ()=>{
    return Math.floor(Math.random()*caras)+1
  }
}

// d6
// 1;2;3;4;5;6
// Math
// . random() [0;1)
// 6 * [0;1) = [0;6)
// math.floor([0;6)) = [0;5] => 0;1;2;3;4;5
// +1 = 1;2;3;4;5;6

const d6 = dx(6)
const d20 = dx(20)

console.log(d20())
console.log(d6())

// Funciones recursivas

function hola(){
  alert("hola")
  let loop = confirm("Queres otro hola?")
  if(loop){
    return hola()
  } else {
    alert("chau")
  }
}

// hola()

// !6 = 6*5*4*3*2*1 = 720


function factorial(n){
  n = parseInt(n)
  if(n<=1){
    return 1
  }
  return n * factorial(n-1)
}

// console.log(factorial(6))
// console.log(factorial(5))
// console.log(factorial(12))

const productos = [
  {nombre:"🍟",precio:1},
  {nombre:"🥟",precio:2},
  {nombre:"🥪",precio:3},
  {nombre:"🍕",precio:4},
  {nombre:"🍔",precio:5},
  {nombre:"🥩",precio:5},
]

function recorrerProductos(funcioncita){
  for(const prod of productos){
    funcioncita(prod)
  }
}

function mostrarProd(producto){
  console.log(`${producto.nombre}: $${producto.precio}`)
}

// recorrerProductos(mostrarProd)

// productos.forEach(mostrarProd)

/* productos.forEach((elemento, indice)=>{
  console.log(indice, elemento)
}) */

/* console.log(productos.find(p=>{
  return p.precio===4
}))
console.log(productos.find(p=>{
  return p.precio===7
}))
console.log(productos.find(p=>{
  return p.precio===5
}))
console.log(productos.find(p=>{
  return p.precio===5
})) */

// console.table(productos.filter(p=>{
//   return p.precio===5
// }))
/* console.table(productos.filter(p=>{
  return p.precio<=4 && p.precio >=2
})) */

console.log(productos.some(p=>p.nombre==="🍔"))
console.log(productos.some(p=>p.nombre==="🍿"))

console.table(productos.map(prod=>{
  return {nombre:prod.nombre, precio:Math.round(prod.precio*1.2*100+Number.EPSILON)/100}
}))

console.table(productos)


const carrito = {
  productosCarrito: [],
  ordenarCarrito:function(){
    this.productosCarrito.sort((primerProd, segundoProd)=>{
      return (primerProd.precio*primerProd.cantidad)-(segundoProd.precio*segundoProd.cantidad)
    })
  },
  mostrarCarrito(){
    let menu = "En la canasta posee: "
    menu+=this.productosCarrito.reduce((acumulador, elemento)=>{
      return acumulador + `\n - ${elemento.nombre}, $${elemento.precio} x ${elemento.cantidad} =  $${elemento.precio * elemento.cantidad}`
    }, menu)
    menu+= `\nTotal:${this.calcularTotal()}`
    return menu
  },
  calcularTotal(){
    return this.productosCarrito.reduce((acumulador, elemento)=>{
      return acumulador + elemento.precio*elemento.cantidad
    }, 0)
  },
  agregarProductos: function(prod, cantidad){
    let index = -1
    if(this.productosCarrito.some((p, i)=>{
      index = i
      return p.nombre===prod.nombre
    })){
      this.productosCarrito[index].cantidad+= cantidad
    } else {
      // el spread operator ... , operador que esparce, agrega las propiedades y métodos preexistentes
      this.productosCarrito.push({...prod, cantidad:cantidad})
    }
    this.ordenarCarrito()
    return this.mostrarCarrito()
  },

}

console.log(carrito.agregarProductos(productos[1], 3))
console.log(carrito.agregarProductos(productos[3], 2))
console.log(carrito.agregarProductos(productos[4], 1))
console.log(carrito.agregarProductos(productos[4], 1))
// console.log(carrito)
// console.log(carrito.calcularTotal())