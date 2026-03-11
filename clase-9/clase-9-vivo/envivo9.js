// swal
// https://sweetalert2.github.io/

const btnSwal = document.querySelector("#btnSwal")
const btnLista = document.querySelector("#verLista")
const lista = document.querySelector("#lista")

/* btnSwal.addEventListener("click",()=>{
  Swal.fire({
    title: "Ey!",
    text: "No me toques!",
    icon: "warning",
    confirmButtonText: "Entendido"
  });
}) */

function hacerTostada(nombreProd){
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "success",
    title: `Se agrego "${nombreProd}" al carrito exitosamente`
  });
} 

const mostrarLista = async ()=>{
  try {
    const datosJSON = await fetch("./lista.json")
    const datos = await datosJSON.json()
  
    lista.innerHTML = ""
    datos.forEach(prod=>{
      const li = document.createElement("li")
      li.id = `lista-${prod.id}`
  
      const texto = document.createElement("span")
      texto.innerText = prod.nombre
  
      const btn = document.createElement("button")
      btn.innerText = "Agregar"
      btn.addEventListener("click",()=>hacerTostada(prod.nombre))
  
      li.appendChild(texto)
      li.appendChild(btn)
  
      lista.appendChild(li)
    })
  } catch (error) {
    console.warn("Error:",error)
  }
}

// btnLista.addEventListener("click",mostrarLista)
btnLista.style="display:none;"

document.addEventListener("DOMContentLoaded", mostrarLista)

// toastify
// https://apvarun.github.io/toastify-js/

const botonToastify = document.querySelector("#botonToastify")

botonToastify.addEventListener("click", ()=>{
  Toastify({
    text: "Funciono gracias a toastify",
    duration: 3000,
    close: true,
    gravity: "bottom",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, white, orange)",
      color: "black"
    },
    onClick: function(){
      Swal.fire({text: "Soy la competencia"})
    } // Callback after click
  }).showToast();
})


// Luxon
// https://moment.github.io/luxon/#/?id=luxon

console.log(new Date())

const DateTime = luxon.DateTime;

console.log(DateTime.local(2017, 5, 15, 8, 30))
console.log(DateTime.now().toUTC().toLocaleString(DateTime.DATETIME_MED)) 

// btnToast.addEventListener("click", ()=>{
//   Toastify({
//         text: DateTime.now().toFormat('MMMM dd, yyyy, hh  :mm:ss'),
//         duration: 5000,
//         newWindow: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//           background: "linear-gradient(to right, blueviolet, blue)",
//         }
//       }).showToast();
// })

