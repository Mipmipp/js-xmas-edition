const MESES_EN_ANIO = 12;

function calcularMayorSalarioAnual(salarios) {
    return obtenerMayorSalario(salarios) * MESES_EN_ANIO;
}

function calcularMenorSalarioAnual(salarios) {
    return obtenerMenorsalario(salarios) * MESES_EN_ANIO;
}

function obtenerMayorSalario(salarios) {
    let mayorSalario = salarios[0];
    for (let i = 1; i < salarios.length; i++) {
        if (salarios [i] > mayorSalario) {
            mayorSalario = salarios [i];
        }
    }
    return mayorSalario;
}

function obtenerMenorsalario(salarios) {
    let menorSalario = salarios[0];
    for (let i = 1; i < salarios.length; i++) {
        if (salarios[i] < menorSalario) {
            menorSalario = salarios[i];
        }
    }
    return menorSalario;
}

function obtenerSalarioPromedioAnual(salarios) {
    let acumulador = 0;
    for (let i = 0; i < salarios.length; i++) {
        acumulador += salarios[i];
    }
    return (acumulador / MESES_EN_ANIO).toFixed(2);
}

function obtenerSalarioPromedioMensual(salarios) {
    return (obtenerSalarioPromedioAnual(salarios) / MESES_EN_ANIO).toFixed(2);
}
