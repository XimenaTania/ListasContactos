const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const numero = document.querySelector('.numero');
const correo = document.querySelector('.correo');
const ubicacion = document.querySelector('.ubicacion');
const ciudad = document.querySelector('.ciudad');
const direccion = document.querySelector('.direccion');



const botonAgregar = document.querySelector('.botonAgregar');
const listadoTareas = document.querySelector('.listadoTareas');

const guarda = window.localStorage

botonAgregar.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        apellido: apellido.value,
        numero: numero.value,
        correo: correo.value,
        ubicacion: ubicacion.value,
        ciudad: ciudad.value,
        direccion: direccion.value,

    }
    guardarContacto(guarda, contacto);
}
cargarContacto(guarda, listadoTareas)