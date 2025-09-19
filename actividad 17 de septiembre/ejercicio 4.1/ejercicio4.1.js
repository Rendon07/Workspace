
function MostrarNombre(){
    const nombre = document.getElementById("nombre");

    const primerNombre = document.createElement('span');
    const apellido = document.createElement('i');

    primerNombre.innerHTML = "Angie ";
    apellido.innerHTML = "Rendon";

    nombre.appendChild(primerNombre);
    nombre.appendChild(apellido);
}


