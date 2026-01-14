// Actividad 01:
/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index) {
  console.log(texto);
} 
*/


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?

/* let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index++) {
  console.log(texto);
}  */

// Actividad 02:
/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index > 3) {

  }
  alert("lado");
} 
*/


// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?

let lados = parseInt(prompt('INGRESE CANTIDAD DE ALUMNOS A COMPARAR'));
let textoFinal ="Los alumnos son:"

for (let index = 0; index < lados; index++) {
  if (index > 5) {
    alert("excedio la cantidad máxima de alumos a comparar")
    break
  }
  const alumno = prompt("Ingrese el nombre del alumno")
  const nota = parseFloat(prompt(`Ingrese la nota de ${alumno}`))

  textoFinal += `\n - ${alumno}: ${nota}.`
} 

alert(textoFinal)