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
    let iconBorrar = document.createElement('span')


    nombreContacto.innerHTML = contacto.nombre
    apellidoContacto.innerHTML = contacto.apellido
    numeroContacto.innerHTML = contacto.numero
    correoContacto.innerHTML = contacto.correo
    iconBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tarea')
    divContacto.classList.add('material-symbols-outlined', 'icono')


    iconBorrar.onclick = () => {
        guarda.removeItem(contacto.id)
        window.location.href = '/'

    }


    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(correoContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(iconBorrar)

    parentNode.appendChild(divContacto)


}