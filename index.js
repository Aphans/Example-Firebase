import { dameDocumentos, 
    onDameMascotas } from "./firebase.js"

const lista = document.getElementById("contenedorListas")
const formulario = document.getElementById("formulario")

window.addEventListener("DOMContentLoaded",async()=>{
    let html=""
   await onDameMascotas('Mascotas',(mascotas)=>{
        mascotas.forEach(mascota => {
                const {nombreMascota,razaMascota}=mascota.data();
                html+=`
        <div>
          <h2>${nombreMascota}</h2>
          <p>Desde el js</p>
          <h2>${razaMascota}</h2>
          <p>Bretón</p>
        </div>
        </div>` }
        )
        lista.innerHTML=html;
        })
    })

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombreMascota = formulario['nombreMascota'].value;
formulario.reset()
    }
)