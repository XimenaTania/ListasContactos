//crear una lista de contactos predefinidos, cada contacto debe contener el nombre
//y apellido como una sola cadena de  caracteres 

const nombre = document.querySelector('.nombre');
const apellido = document.querySelector('.apellido');
const numero = document.querySelector('.numero');
const correo = document.querySelector('.correo');
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

    }
    guardarContacto(guarda, contacto);
}
cargarContacto(guarda, listadoTareas)