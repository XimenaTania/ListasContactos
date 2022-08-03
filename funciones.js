const guardarContacto = (guarda, contacto) => {
    guarda.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}
const cargarContacto = (guarda, parentNode) => {
    let claves = Object.keys(guarda)
    for (clave of claves) {
        let contacto = JSON.parse(guarda.getItem(clave))
        crearContacto(parentNode, contacto, guarda)


    }
}
const crearContacto = (parentNode, contacto, guarda) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('p')
    let apellidoContacto = document.createElement('p')
    let numeroContacto = document.createElement('p')
    let correoContacto = document.createElement('p')
    let ubicacionContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    correoContacto.innerHTML = contacto.correo
    ubicacionContacto.innerHTML = contacto.ubicacion
    direccionContacto.innerHTML = contacto.direccion
    ciudadContacto.innerHTML = contacto.ciudad
    iconoBorrar.innerHTML = 'delete'


    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')


    iconoBorrar.onclick = () => {
        guarda.removeItem(contacto.id)
        window.location.href = '/'

    }
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(correoContacto)
    divContacto.appendChild(ubicacionContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(ciudadContacto)


    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}