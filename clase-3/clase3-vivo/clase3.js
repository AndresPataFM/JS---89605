function saludar(){
  let nombre = prompt("Ingrese su nombre")
  while(nombre === null || nombre===""){
    nombre = prompt("Por favor ingrese su nombre, este no puede estar vacío")
  }
  alert(`¡Bienvenido ${nombre} a mi página!`)
}

function contador(){
  let contar = true
  let total = 0
  while(contar){
    contar = confirm("Queres aumentar el contador?")
    if(contar) total++
  }
  return total
}

// console.log(contador()) // el return me permitio sacar el valor de contador a global

// console.log(total)


// saludar()
// saludar()
// saludar()

// function restar(base, substractor,numerito){
function restar(base, substractor){
  console.log("base", base)
  console.log("substractor", substractor)
  // console.log("numerito", numerito)
  const resto = base - substractor
  return resto
}

// console.log(restar(10,7))
// console.log(restar(2,5))
// console.log(restar(100,25))
// console.log(restar(33,8))
// console.log(restar(33,8, 15))
// console.log(restar(10,7))

function validarNros(num1, num2){
  const tipoNum1 = typeof num1;
  console.log(tipoNum1)
  const tipoNum2 = typeof num2;
  console.log(tipoNum2)
  console.log("tipoNum1==='number'",tipoNum1==='number')
  console.log("tipoNum2==='number'",tipoNum2==='number')
  const nrosInvalidos = tipoNum1==='number' && tipoNum2==='number'
  return nrosInvalidos
  console.log("test") // nunca es ejecutado por el return
} 

function calculadora(num1, num2, operacion){
  if(!validarNros(num1, num2)){
    console.warn("Error: se ingresaron datos que no son números")
    return NaN;
  };
  console.log("Los tipos de dato fueron validados")
  switch(operacion){
    case "+": // if(operacion === "+"){return num1+num2}
      return num1+num2;
        //no es necesario el break ya que el return lo frena
    case "-":
      return num1-num2;
    case "/":
      return num1/num2;
    case "*":
      return num1*num2;
    case "^":
      return Math.pow(num1, num2)
    case "%":
      return num1%num2;
    default:
      console.warn("Error: operador inválido")
      return;
  };
} ;


/* function despedir (nombre){
  const texto = "Chau, espero verte nuevamente "
  return texto+nombre
} */

//función anónima
/* const despedir = function(nombre){
  const texto = "Chau, espero verte nuevamente "
  return texto+nombre
} */

//función flecha
/* const despedir = (nombre)=>{
  const texto = "Chau, espero verte nuevamente "
  return texto+nombre
} */

// parametro implicito en función flecha
/* const despedir = nombre =>{
  const texto = "Chau, espero verte nuevamente "
  return texto+nombre
} */
/* const despedir = nombre =>{
  return "Chau, espero verte nuevamente "+nombre
} */
/* const despedir = nombre =>{
  return `Chau, espero verte nuevamente ${nombre}.`
} */

// return implicito
// const despedir = nombre => `Chau, espero verte nuevamente ${nombre}.`
// const despedir = (nombre, apellido) => `Chau, espero verte nuevamente ${apellido}, ${nombre}.`




console.log(despedir)
console.log(despedir("Juan"))
// console.log(despedir("Juan", "Lopez"))

/* despedir = "Chau" // converti mi funcion en una variable primitiva

console.log(despedir)

console.log(despedir("Juan")) */