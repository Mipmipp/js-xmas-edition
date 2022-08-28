function probarValidarCantidadPersonas() {
    console.assert(
        validarCantidadPersonas('-5') === 'Este campo no puede contener números negativos.',
        'validarCantidadIntegrantes no validó que el campo no tenga números negativos.'
    );
    
    console.assert(
        validarCantidadPersonas('') === 'Este campo no puede estar vacío ni ser cero.',
        'validarCantidadIntegrantes no validó que el campo tenga números.'
    )

    console.assert(
        validarCantidadPersonas('4') === '',
        'validarCantidadIntegrantes no validó una cantidad correcta de personas.'
    )
};

function probarValidarSalarios() {
    casoCorrectoSalario();
    errorSalarioNegativo();
    errorSalarioVacio();
}

function casoCorrectoSalario() {
    const salarios = validarSalarios([45000, 75000]);
    console.assert(
        salarios['0'] === '',
        'validarSalarios no validó al menos un salario válido'
    )
}

function errorSalarioNegativo() {
    const salarios = validarSalarios([-5, 55000]);
    console.assert(
        salarios['0'] === 'El salario del integrante #1 no puede tener un número negativo.',
        'validarSalarios no validó que haya al menos un salario que tenga numeros negativos',
    )
}

function errorSalarioVacio() {
    const salarios = validarSalarios([0, 1]);
    console.assert(
        salarios['0'] === 'El salario del integrante #1 no puede estar vacío.',
        'validarSalarios no validó que haya al menos un salario que sea vacío',
    )
}

probarValidarCantidadPersonas();
probarValidarSalarios();
