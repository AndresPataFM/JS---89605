const gatito = {
  nombre:"michifus",
  castrado: true,
  edadMeses:19,
  maullar:function(){
    console.log("miau")
  },
  presentar:function(){
    console.log(`Hola soy ${this.nombre}, tengo ${this.edadMeses} y ${this.castrado ? "":"no "}estoy castrado`)
  },
  normal:function(){
    // this funciona correcto
    console.log(this)
  },
  flecha:()=>{
    // this se vuelve el Window
    console.log(this)
  }
}

/* console.log(gatito)
console.log(gatito.nombre)
console.log(gatito.maullar)
gatito.maullar()

console.log(gatito["edadMeses"]) */

/* no se le asigna valor a una const
gatito = {
  nombre:"zacarías",
  castrado: true,
  duenios:["Andrés", "Nahuel"],
  edadMeses:19,
  maullar:function(){
    console.log("miau")
  } 
} */

// gatito.nombre = "zacarías"
// gatito.genero = "macho"
// gatito["Por que me dejas"] = "como?"

/* console.log(gatito)

console.log(gatito["Por que me dejas"])
console.log(gatito.Por que me dejas) */

// this
// gatito.presentar()

const gatos = []

// gatos[3].presentar()

// function Gato(nombre, castrado, edadMeses){
//   this.nombre = nombre
//   this.castrado = castrado
//   this.edadMeses = edadMeses
//   this.maullar = function(){
//     console.log("miau")
//   }
//   this.presentar = function(){
//     console.log(`Hola soy ${this.nombre}, tengo ${this.edadMeses} y ${this.castrado ? "":"no "}estoy castrado`)
//   }
// }

// const zacarias = new Gato("zacarías", false, 37)


/* console.log(gatos)

for(const gato of gatos){
  gato.presentar()
  } */


class Gato{
  constructor(nombre, castrado, edadMeses){
    this.nombre = nombre
    this.castrado = castrado
    this.edadMeses = edadMeses
  }
  maullar = function(){
    console.log("miau")
  }
  presentar(){
    console.log(`Hola soy ${this.nombre}, tengo ${this.edadMeses} y ${this.castrado ? "":"no "}estoy castrado`)
  }
}

function crearGato(nombre, castrado, edadMeses){
  // crea una instancia de Gato y la agrega al array gatos
  const gatoTemp = new Gato(nombre, castrado, edadMeses)
  gatos.push(gatoTemp)
  console.log("Gato agregado")
}
// crearGato("zacarías", false, 37)
// crearGato("michifus", true, 13)
// crearGato("pucara", true, 93)
// crearGato("peludo", true, 44)
// crearGato("matcha", false, 23)
// crearGato("chai", true, 68)

// console.log(gatos)

// gatito.normal()
// gatito.flecha()

/* const cantidadGatos = gatos.length
localStorage.setItem("cantidadGatos", cantidadGatos)
sessionStorage.setItem("cantidadGatosSession", cantidadGatos) */

/* const gatosStorage = localStorage.getItem("cantidadGatos")
console.log(typeof gatosStorage, gatosStorage) */

// localStorage.setItem("gatos", gatos)

// lo guardado se convierte en JSON
// JAvaScript Object Notatios

// const gatosJSON = JSON.stringify(gatos)
// localStorage.setItem("gatos", gatosJSON)


// console.log(gatosJSON)

/* const gatosAlmacenJSON = localStorage.getItem("gatos")
console.log(gatosAlmacenJSON)

const gatosAlmacenParseados = JSON.parse(gatosAlmacenJSON)
console.log(gatosAlmacenParseados)

for(const gato of gatosAlmacenParseados){
  const gatoTemp = new Gato(gato.nombre,gato.castrado, gato.edadMeses)
  gatos.push(gatoTemp)
}

console.log(gatos) */

/* for(const gato of gatosAlmacenParseados){
  gato.presentar()
} */

if(localStorage.getItem("gatos")===null){
  crearGato("zacarías", true, 37)
  crearGato("michifus", false, 13)
  crearGato("pucara", false, 93)
  crearGato("peludo", false, 44)
  crearGato("matcha", true, 23)
  crearGato("chai", false, 68)
  // const gatosJSON = JSON.stringify(gatos)
  // localStorage.setItem("gatos", gatosJSON)
  localStorage.setItem("gatos", JSON.stringify(gatos))
  console.log("Gatos nuevos",gatos)
} else {
  const gatosAlmacenJSON = localStorage.getItem("gatos")
  // console.log(gatosAlmacenJSON)
  
  const gatosAlmacenParseados = JSON.parse(gatosAlmacenJSON)
  // console.log(gatosAlmacenParseados)
  
  for(const gato of gatosAlmacenParseados){
    const gatoTemp = new Gato(gato.nombre,gato.castrado, gato.edadMeses)
    gatos.push(gatoTemp)
  }
  console.log("gatosStorage",gatos)
}