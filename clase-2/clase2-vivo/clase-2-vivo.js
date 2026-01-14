/* console.log(Number(true))
console.log(Number(false))
console.log(Boolean(27))
console.log(Boolean(" "))

console.log("9"+2, typeof ("9"+2))
// sumas string + numero
// sumas string + string

console.log("9"-2, NaN)
// 1 restas string - numero
// 2 los string no los puedo restar
// 3 restas numero - numero
console.log("A"-2)
// 3 NaN - 2 */

/* console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


console.log(false || !false)

console.log(false && true && true && true) */

// console.log("zaasdasdasd" < "hola")
// console.log("zaasdasdasd" < "zola")

/* console.log(isNaN(NaN))
console.log(isNaN(7))
console.log(isNaN("1")) */

// coerción de datos a booleano
/* console.log(!!7)
!(!7)
!(!true)
!(false)
true
console.log(!!"") */


// const saludar = confirm("¿Querés un saludo?")
// console.log(saludar)

/* if(saludar){
  alert("Hola")
  // console.log("el usuario quiso ser saludado")
}

if(!saludar){
  alert("Qué lástima...")
}
 */

/* if(saludar){
  alert("Hola")
  // console.log("el usuario quiso ser saludado")
} else {
  alert("Qué lástima...")
}

alert("Chau") */

// let pedido = prompt("¿Qué queres de tomar?").toLowerCase()

// if(pedido==="coca"){
//   alert("Aca tenés coca")
// } else if(pedido==="jugo"){
//   alert("toma jugo")
// } else {
//   alert("arreglate con agua")
// }

/* if(pedido==="coca"){
  alert("Aca tenés coca")
} else if(pedido==="jugo"){
  alert("toma jugo")
} else if(pedido==="coca"){
  alert("toma CocaCola")
}else {
  alert("arreglate con agua")
}
 */
// 1 ambos alerts
// 2 el primer alert
// 3 el segundo alert
// 4 ningún alert


// 6 inquilinos
// Andres 1A
// Diana 1B
// Juan y Jaime 2A
// Laura 2B
// Matilda 3

/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
    alert("Hola Jaime, buen día.")
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
} 
 */

/* for(let i=0; i<5; i=i+1){
  console.log("Este es i:", i)
} */

// sugar syntax
/* for(let i=0; i<5; i++){
  console.log("Este es i:", i)
} */

/* let x = 0

// x = x +1
console.log(x)
// x += 1
x++
console.log(x)
 */
// 0 a 4 // la verdadera
// 0 a 5
// 1 a 4
// 1 a 5
/* 
for(let i=0; i<5; i--){ // es un ciclo infinito porque i nunca será más grande o igual que 5
  console.log("Este es i:", i)
} */

/* const password =  "123"
let queryPassword = prompt("Ingrese su contraseña")

while(password !== queryPassword){
  alert("contraseá incorrecta")
  queryPassword = prompt("ingrese nuevamente su contraseña")
}

alert("ingresaste") */

/* let saludo = false
let despedida = false

while(saludo){
  alert("¡HOLA!😀")
  saludo = confirm("¿Otro saludo?")
}

do{
  alert("¡Chau!😥")
  despedida = confirm("¿Otra despedida?")
} while(despedida)  */

// let i = 0

// while(true){
//   console.log(i)
//   if(i>=5){
//     break
//   }
//   i++
// }

// while(i<6){
//   console.log(i)
//   i++
// }

for(let i=0; i<5; i=i+1){
  console.log("Este es i inicial:", i)
  if(i===3){
    continue
  }
  console.log("Este es i final:", i)
} 