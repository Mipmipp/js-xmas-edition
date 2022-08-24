const $form = document.querySelector('#carta-a-santa');
function validarFormulario(event) {  
    event.preventDefault();

    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

}

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcion = $form['descripcion-regalo'].value;
function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    limpiarErroresAnteriores();

    keys.forEach(function(key){
        const error = errores[key];

        if(error) {
            cantidadErrores++;
            $form[key].className = 'error'

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = '';
        }
    });

    return cantidadErrores;
}

function limpiarErroresAnteriores() {
    const $erroresAnteriores = document.querySelectorAll('#errores li');
    for(let i=0; i < $erroresAnteriores.length; i++) {
        $erroresAnteriores[i].remove();
    }
}

function validarNombre(nombre) {
    if(nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if(!/^[a-z]+$/i.test(nombre)) {
        return 'Este campo sólo puede tener letras'
    }

    return '';
}

function validarCiudad(ciudad) {
    if(ciudad.length === 0) {
        return 'Este campo debe tener una ciudad seleccionada'
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if(descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(descripcionRegalo.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres'
    }

    if(!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'Este campo sólo puede tener letras y números'
    }

    return '';
}
