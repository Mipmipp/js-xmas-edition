document.querySelector('#aniadir-cantidad-integrantes').onclick = function(event) {
    event.preventDefault();
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
};

document.querySelector('#calcular').onclick = function(event) {
    event.preventDefault();
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarElemento('#calculos');
};

document.querySelector('#resetear').onclick = resetear;


function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        mostrarElemento('#calcular'); 
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
    $label.textContent = 'Edad del integrante #: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
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
    borrarIntegrantesAnteriores();
    ocultarElemento('#calculos');
    ocultarElemento('#calcular');
}

        }
    }

}


function manejarErroresCantidadIntegrantes(erroresIntegrantes) {
    const keys = Object.keys(erroresIntegrantes);
    const $errores = document.querySelector('#errores-integrantes');
    let cantidadErrores = 0;

    BorrarErroresAnteriores();

    keys.forEach(function(key) {
        const error = erroresIntegrantes[key];

        if(error) {
            cantidadErrores++;
            $form[key].className = 'error'

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error); 
        } else {
            $form[key].className = ''
        }
    });
    
    return cantidadErrores;
}

function BorrarErroresAnteriores() {
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
    const InputCantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    InputCantidadIntegrantes.className = '';
}

function mostrarElemento(elemento) {
    document.querySelector(elemento).className = '';
}

function ocultarElemento(elemento) {
    document.querySelector(elemento).className = 'oculto';
}

function obtenerMayorEdad(edades) {
    let MayorEdad = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (edades [i] > MayorEdad) {
            MayorEdad = edades [i];
        }
    }

    return MayorEdad;
}

function obtenerMayorEdad(edades) {
    let MayorEdad = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (edades [i] > MayorEdad) {
            MayorEdad = edades [i];
        }
    }

    return MayorEdad;
}

function obtenerMenorEdad(edades) {
    let MenorEdad = edades[0];
    for (let i = 1; i < edades.length; i++) {
        if (edades[i] < MenorEdad) {
            MenorEdad = edades[i];
        }
    
    }
    return MenorEdad;
}

function obtenerPromedio(edades) {
    let acumulador = 0;
    for (let i = 0; i < edades.length; i++) {
        acumulador += edades[i];
    }

    return (acumulador / edades.length).toFixed(2);
}
