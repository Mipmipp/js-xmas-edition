const $form = document.querySelector('#interfaz')

document.querySelector('#confirmar-cantidad').onclick = function(event) {
    event.preventDefault();

    const $cantidadPersonas = document.querySelector('#cantidad-personas');
    const cantidadPersonas = Number($cantidadPersonas.value);

    borrarInterfaces();
    crearInterfaces(cantidadPersonas);
};

document.querySelector('#calcular').onclick = function(event) {
    event.preventDefault();

    const salarios = obtenerSalarios();
    mostrarSalarios('mayorAnual', calcularMayorSalarioAnual(salarios));
    mostrarSalarios('menorAnual', calcularMenorSalarioAnual(salarios));
    mostrarSalarios('promedioAnual', obtenerSalarioPromedioAnual(salarios));
    mostrarSalarios('promedioMensual', obtenerSalarioPromedioMensual(salarios));

    mostrarElemento('#calculos');
}

document.querySelector('#resetear').onclick = resetear;

function crearInterfaces(cantidadPersonas) {
    if (cantidadPersonas > 0) {
        mostrarElemento('#calcular');
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadPersonas; i++) {
        crearInterfaz(i);
    }
};

function borrarInterfaces() {
    const $interfaces = document.querySelectorAll('.interfaz');
    for (let i = 0; i < $interfaces.length; i++) {
        $interfaces[i].remove();
    }
};

function crearInterfaz(indice) {
    const $div = document.createElement('div');
    $div.className = 'interfaz';

    const $label = document.createElement('label');
    $label.textContent = 'El salario del integrante # ' + (indice + 1) + ' es de:'
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $interfaces = document.querySelector('#interfaces');
    $interfaces.appendChild($div);
};

function obtenerSalarios() {
    const $salarios = document.querySelectorAll('.interfaz input');
    const salarios  = [];

    for(let i = 0; i < $salarios.length; i++) {
        salarios.push(Number($salarios[i].value));
    }
    return salarios;
}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function resetear() {
    borrarInterfaces();
    ocultarElemento('#calculos');
    ocultarElemento('#calcular');
}

function borrarErroresAnteriores() {
    const $erroresPersonasAnteriores = document.querySelectorAll('#errores-personas li');
    for(let i=0; i < $erroresPersonasAnteriores.length; i++) {
        $erroresPersonasAnteriores[i].remove();
    }

    const $erroresSalariosAnteriores = document.querySelectorAll('#errores-salarios li');
    for(let i=0; i < $erroresSalariosAnteriores.length; i++) {
        $erroresSalariosAnteriores[i].remove();
    }
}

function limpiarErrorCantidadPersonas() {
    const inputCantidadPersonas = document.querySelector('#cantidad-personas');
    inputCantidadPersonas.className = '';
}

function mostrarElemento(elemento) {
    document.querySelector(elemento).className = '';
}

function ocultarElemento(elemento) {
    document.querySelector(elemento).className = 'oculto';
}
