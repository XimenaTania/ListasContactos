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
    let nombreContacto = document.createElement('h3')
    let apellidoContacto = document.createElement('h3')
    let numeroContacto = document.createElement('h3')
    let correoContacto = document.createElement('h3')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    correoContacto.innerHTML = contacto.correo
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
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}