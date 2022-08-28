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

function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes('-5') === 'Este campo no puede contener números negativos.',
        'validarCantidadIntegrantes no validó que el campo no tenga números negativos.'
    );
    
    console.assert(
        validarCantidadIntegrantes('') === 'Este campo no puede estar vacío ni ser cero.',
        'validarCantidadIntegrantes no validó que el campo tenga números.'
    )

    console.assert(
        validarCantidadIntegrantes('4') === '',
        'validarCantidadIntegrantes no validó una cantidad correcta de integrantes.'
    )
};

function probarValidarEdadIntegrantes() {
    casoCorrectoEdadIntegrantes();
    errorEdadIntegrantesCero();
    errorEdadIntegrantesVacia();
}

function casoCorrectoEdadIntegrantes() {
    const errores = validarEdadIntegrantes([1, 4]);
    console.assert(
        errores['0'] === '',
        'validarEdadIntegrantes no validó un número válido'
    )
}

function errorEdadIntegrantesCero() {
    const errores = validarEdadIntegrantes([-1, 1]);
    console.assert(
        errores['0'] === 'Integrante#1 no puede ser un número negativo.',
        'validarEdadIntegrantes no validó que el número sea un número negativo',
    )
}

function errorEdadIntegrantesVacia() {
    const errores = validarEdadIntegrantes([0, 1]);
    console.assert(
        errores['0'] === 'Integrante#1 no puede estar vacío.',
        'validarEdadIntegrantes no validó que el número sea vacío',
    )
}

probarValidarCantidadPersonas();
probarValidarSalarios();
probarValidarCantidadIntegrantes();
probarValidarEdadIntegrantes();
