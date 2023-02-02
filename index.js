import { addMascotas, dameDocumentos, 
    onDameMascotas,deleteMascota } from "./firebase.js"

const lista = document.getElementById("contenedorListas")
const formulario = document.getElementById("formulario")

window.addEventListener("DOMContentLoaded",async()=>{
    let html=""
   await onDameMascotas('Mascotas',(mascotas)=>{
        mascotas.forEach(mascota => {
                const {nombreMascota,razaMascota}=mascota.data();
                const id = mascota.id
                html+=`
        <div>
          <h2>${nombreMascota}</h2>
          <label>${razaMascota}</label>
          <button class="btn-eliminar" data-id="${id}">Eliminar</button>
        </div>
        </div>` 
   })
        lista.innerHTML=html;
        })
    })

   const btnsEliminar = lista.querySelectorAll('.btn-eliminar')
    
   btnsEliminar
   .forEach(btn => btn
       .addEventListener('click', async (e)=>{
        console.log('Hola')
           await deleteMascota('Mascotas',e.target.dataset.id)
        })
       ) 

formulario.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const nombreMascota = formulario['nombreMascota'].value;
    const razaMascota = formulario['razaMascota'].value;
    console.log(nombreMascota,razaMascota)
    addMascotas('Mascotas',{nombreMascota,razaMascota});

formulario.reset()
})