const usuario = {
  nombre: "Andrés",
  online: false,
  edad: 30,
  cursos:{primero:"javascript", segundo:"react"},
  saludar: function(){
    console.log("Buenos días")
  },
  a:function(){}
}

/* console.log(usuario)

console.log(usuario.online)
console.log(usuario.nombre)

usuario.saludar() */

// console.log(usuario.cursos.primero)

const nombres = ["Andrés", "Nahuel", "Augusto"]

// console.log(nombres)
// console.table(nombres)

// console.log(nombres.length)

// console.log(nombres[1])

// nombres[1] = "Daiana"

// console.table(nombres)
// console.log(recorrerNombres())
function recorrerNombres(){
  let queryNombres = "Los nombres son:"
  for(let i=0;i<nombres.length;i++ ){
    queryNombres += `\n - ${nombres[i]}`
  }
  return queryNombres
}

// console.log(recorrerNombres())

// nombres[3] = "Duvan"
// nombres[5] = "Edgar"
// console.log(nombres[7])

// console.table(nombres)
// console.log(recorrerNombres())

function recorrerArray(array){
  for(let i=0;i<array.length;i++ ){
    console.log(array[i])
  }
}

const productos = [
  {nombre:"🍔", precio:20},
  {nombre:"🍕", precio:10},
  {nombre:"🥟", precio:5},
]

// recorrerArray(productos)

// productos[4] = {nombre:"🍟", precio:2}


/* function recorrerProductos(){
  let listaProd = "Los productos son: "
  for(let i=0;i<productos.length;i++ ){
    listaProd+= `\n - Tenemos ${productos[i].nombre} a $${productos[i].precio}`
  }
  alert(listaProd)
} */

  // for of es declarativo
function recorrerProductos(){
  let listaProd = "Los productos son: "
  for(const prod of productos){
    console.log(prod)
    listaProd+= `\n - Tenemos ${prod.nombre} a $${prod.precio}`
  }
  alert(listaProd)
}

// delete nombres[0] // no borren con delete


// recorrerProductos()
console.table(nombres)

// nombres.unshift("Federico")
// nombres.push("Federico")
// nombres.push("Francisco")
// nombres.pop()
// console.log(nombres.pop())
// nombres.shift()
// console.log(nombres.shift())

// console.log(nombres.join())
// console.log(nombres.join(";"))
// alert(`Los nombres de los usuarios son: ${nombres.join("; ")}`)
// alert(`Los nombres de los usuarios son: \n -${nombres.join("\n -")}`)
// nombres.push("Nahuel")
// console.log(nombres.indexOf("Nahuel"))
// console.log(nombres.lastIndexOf("Nahuel"))
// console.log(nombres.includes("Nahuel"))
// console.log(nombres.includes("Ivana"))
// nombres.sort()
// nombres.reverse()
nombres.sort().reverse()

// console.log(nombres.sort())

function modificarElementoSegunValorDado(array, elemento, nuevoValor){
  // busca el indice del elemento de un array y cambia el elemento por el nuevo valor si lo encuentra
  // si existen 2 o más no encuentra todos
  const indiceElemento = array.indexOf(elemento)
  if(indiceElemento!==-1){
    array[indiceElemento] = nuevoValor
    console.table(array)
  } else {
    console.warn("no se encontro el elemento")
  }
}

const agregarNombreUnico = (nombre)=>{
  const existeEnArray = nombres.includes(nombre)
  if(existeEnArray){
    console.warn("ya existe en el array no va a ser agregado")
  } else {
    nombres.push(nombre)
    console.table(nombres)
  }
}

// agregarNombreUnico("Juan")
// agregarNombreUnico("Andrés")

// modificarElementoSegunValorDado(nombres, "Nahuel", "Gianluca")
// modificarElementoSegunValorDado(nombres, "Gonzalo", "Gianluca")

console.table(nombres)

/* const numeritos = [5, 37, 1084,45, 999]
console.table(numeritos)
numeritos.sort()
// esperamos: 5, 37, 35, 999, 1084
console.table(numeritos) */