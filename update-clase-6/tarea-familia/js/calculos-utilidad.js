const MESES_EN_ANIO = 12;

function calcularMayorSalarioAnual(salarios) {
    return obtenerMayorNumero(salarios) * MESES_EN_ANIO;
}

function calcularMenorSalarioAnual(salarios) {
    return obtenerMenorNumero(salarios) * MESES_EN_ANIO;
}

function obtenerSalarioPromedioMensual(salarios) {
    return (obtenerPromedio(salarios) / MESES_EN_ANIO).toFixed(2);
}

function obtenerSalarioPromedioAnual(salarios) {
    return (obtenerPromedio(salarios) * MESES_EN_ANIO).toFixed(2);
}

function obtenerEdadPromedio(edades) {
    return (obtenerPromedio(edades) / edades.length).toFixed(2);
}

function obtenerMayorNumero(numeros) {
    let mayorEdad = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros [i] > mayorEdad) {
            mayorEdad = numeros [i];
        }
    }

    return mayorEdad;
}

function obtenerMenorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    return menorNumero;
}

function obtenerPromedio(numero) {
    let acumulador = 0;
    for (let i = 0; i < numero.length; i++) {
        acumulador += numero[i];
    }
    return acumulador;
}

function mostrarElemento(elemento) {
    document.querySelector(elemento).className = '';
}

function ocultarElemento(elemento) {
    document.querySelector(elemento).className = 'oculto';
}
