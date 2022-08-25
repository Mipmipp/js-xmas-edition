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

        }
    
}

    }

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
