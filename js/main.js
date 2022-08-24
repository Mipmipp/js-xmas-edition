const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcion = $form['descripcion-regalo'].value;

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
