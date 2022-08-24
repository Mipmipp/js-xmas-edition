function probarValidarNombre() {

    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'validar nombre no validó que el nombre sea vacío'
    );

    console.assert(
        validarNombre('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'Este campo debe tener menos de 50 caracteres',
       'validar nombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
      validarNombre('123123') === 'Este campo sólo puede tener letras',
        'validar nombre no validó que el nombre sólo contenga letras'
    );

    console.assert(
        validarNombre('Mipmipp') === '',
        'validar nombre no validó que el nombre esté bien'
    );
}

function probarValidarCiudad() {

    console.assert(
        validarCiudad('') === 'Este campo debe tener una ciudad seleccionada',
        'validar ciudad no validó que no haya una ciudad seleccionada'
    );

    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validar ciudad no validó que la ciudad esté bien seleccionada'
    );
}

function probarValidarDescripcionRegalo() {
    
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'validar descripción no validó que la descripción sea vacía'
    );

    console.assert(
        validarDescripcionRegalo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'Este campo debe tener menos de 100 caracteres',
        'validar descripción no validó que la descripción sea menor a 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo(',.,.') === 'Este campo sólo puede tener letras y números',
        'validar descripción no validó que la descripción contenga sólo letras y números'
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'validar descripción no validó que la descripción sea correcta'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
