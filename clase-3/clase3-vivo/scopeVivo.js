// Scope (Alcance)
// Se genera un scope cada vez que genero un bloque de código

// Global

// console.log(global)
const global = "hola soy global"
console.log(global)
const booleano = true
let letGlobal = ""

console.log(soyUnError)

if(booleano){
  console.log("en el if", global)
  const localIf = "Hola estoy en el if"
  letGlobal = localIf
  console.log("en el if", localIf) 
  function funcion(){//scope 3
    console.log("scope3", localIf)
    {//scope5
      // var soyUnError = "Porque me crearon"
      // var nombre = "Juan"
    }
    console.log("scope3",soyUnError)
  }
  console.log("if",soyUnError)
}
// console.log("afuera del if", localIf)
console.log("afuera del if", letGlobal)
{// scope 2
  let scope2 =  "estoy en el scope 2"
  {//scope4
    console.log(soyUnError)
    // console.log("scope4", localIf)
    // console.log(nombre)
    // var nombre = "Pedro"
    // console.log(nombre)
  }
}
// console.log(scope2)