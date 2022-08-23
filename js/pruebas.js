function probarValidarNombre() {
    console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'validar nombre no validó que el nombre sea vacío'
);

console.assert(
    validarNombre('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'Este campo debe tener menos de 50 caracteres',
    'validar nombre no validó que el nombre sea menor a 50 caracteres'
);
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Este campo debe tener una ciudad seleccionada',
        'validar ciudad no validó que no haya una ciudad seleccionada'
    )
}

function probarValidarDescripcion() {
    console.assert(
        validarDescripcion('') === 'Este campo debe tener al menos 1 caracter',
        'validar descripción no validó que la descripción sea vacía'
    );

    console.assert(
        validarDescripcion('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'Este campo debe tener menos de 100 caracteres',
        'validar descripción no validó que la descripción sea menor a 100 caracteres'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();
