let ListaContacto = ['Ximena Carrillo', 'Karen Quispe ', 'Catalina Carrillo', 'Betania Torrez', 'Andrea Snaga'];
ListaContacto.sort();
console.log(ListaContacto);

function adicionarContacto(ListaContacto) {
    ListaContacto.push('Diego Lopez', 'Sara Lopez', 'Alan Tambo', 'Benajmin Cruz')
    return ListaContacto

}
adicionarContacto(ListaContacto)
ListaContacto.sort();
console.log(ListaContacto);

function eliminaContacto(ListaContacto) {
    ListaContacto.splice(6, 2)
    return ListaContacto
}
eliminaContacto(ListaContacto)
console.log(ListaContacto);