const $formEdades = document.querySelector('#calculadora-edades');

document.querySelector('#aniadir-cantidad-integrantes').onclick = function(event) {
    event.preventDefault();

    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    const erroresIntegrantes = {
        'cantidad-integrantes': errorCantidadIntegrantes,
    }

    const esExito = manejarErroresCantidadIntegrantes(erroresIntegrantes) === 0;

    if(esExito) {
        borrarIntegrantesAnteriores();
        crearIntegrantes(cantidadIntegrantes);        
    } else {
        borrarIntegrantesAnteriores();
    }

};

document.querySelector('#calcular-edades').onclick = function(event) {
    event.preventDefault();
    const edades = obtenerEdadesIntegrantes();
    const erroresEdadesIntegrantes = validarEdadIntegrantes(edades);


    const esExito = manejarErroresEdadesIntegrantes(erroresEdadesIntegrantes) === 0;

    if(esExito) {
        mostrarEdad('mayor', obtenerMayorNumero(edades));
        mostrarEdad('menor', obtenerMenorNumero(edades));
        mostrarEdad('promedio', obtenerEdadPromedio(edades));
        mostrarElemento('#calculos-edades');
    }
};

document.querySelector('#resetear-edades').onclick = resetear;

function crearIntegrantes(cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        mostrarElemento('#calcular-edades'); 
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #' + (indice + 1) + ': ';
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.min = '0';
    $input.class = '';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}


function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function resetear() {
    borrarErroresEdadesAnteriores();
    limpiarErrorCantidadIntegrantes();
    borrarIntegrantesAnteriores();
    ocultarElemento('#calculos-edades');
    ocultarElemento('#calcular-edades');
}



function manejarErroresEdadesIntegrantes(erroresEdadesIntegrantes) {
    const keys = Object.keys(erroresEdadesIntegrantes);
    const $errores = document.querySelector('#errores-edades');
    const $integrantes = document.querySelectorAll('.integrante input');
    let cantidadErrores = 0;

    borrarErroresEdadesAnteriores();

    keys.forEach(function(key) {
        const error = erroresEdadesIntegrantes[key];
        $integrantes[key].className = ''

        if(error) {
            cantidadErrores++;
            $integrantes[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
            $error.className = `error-${[key]}`;
            $errores.appendChild($error);
        } else {
            $integrantes[key].className = ''
        }
    });
    
    return cantidadErrores;
}

function manejarErroresCantidadIntegrantes(erroresIntegrantes) {
    const keys = Object.keys(erroresIntegrantes);
    const $errores = document.querySelector('#errores-integrantes');
    let cantidadErrores = 0;

    borrarErroresEdadesAnteriores();

    keys.forEach(function(key) {
        const error = erroresIntegrantes[key];

        if(error) {
            cantidadErrores++;
            $formEdades[key].className = 'error'

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error); 
        } else {
            $formEdades[key].className = ''
        }
    });
    
    return cantidadErrores;
}

function validarEdadIntegrantes(edades) {
    let errores = {};
    for(let i = 0; i < edades.length; i++) {
        errores[i] = '';

        if(edades[i] == ' ') {
            errores[i] = `Integrante#${i + 1} no puede estar vacío.`;
        } else if(edades[i] <= 0) {
            errores[i] = `Integrante#${i + 1} no puede ser un número negativo.`;
        }
        
    }
    
    return errores;
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
    if(cantidadIntegrantes < 0) {
        return 'Este campo no puede contener números negativos.';
    }

    if(cantidadIntegrantes == '') {
        return 'Este campo no puede estar vacío ni ser cero.';
    }
    
    return '';
}

function borrarErroresEdadesAnteriores() {
    const $erroresIntegrantesAnteriores = document.querySelectorAll('#errores-integrantes li');
    for(let i=0; i < $erroresIntegrantesAnteriores.length; i++) {
        $erroresIntegrantesAnteriores[i].remove();
    }

    const $erroresEdadesAnteriores = document.querySelectorAll('#errores-edades li');
    for(let i=0; i < $erroresEdadesAnteriores.length; i++) {
        $erroresEdadesAnteriores[i].remove();
    }
}

function limpiarErrorCantidadIntegrantes() {
    const inputCantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    inputCantidadIntegrantes.className = '';
}
