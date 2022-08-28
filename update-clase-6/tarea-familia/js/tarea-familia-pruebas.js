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

probarValidarCantidadIntegrantes();
probarValidarEdadIntegrantes();
