document.querySelector('#elegir-calcular-salarios').onclick = function(event) {
    event.preventDefault;
    const $formSueldos = document.querySelector('#calculadora-sueldos');
    const $formEdades = document.querySelector('#calculadora-edades');
    
    $formSueldos.className = '';
    $formEdades.className = 'oculto'
}

document.querySelector('#elegir-calcular-edades').onclick = function(event) {
    event.preventDefault;
    const $formSueldos = document.querySelector('#calculadora-sueldos');
    const $formEdades = document.querySelector('#calculadora-edades');

    $formEdades.className = '';
    $formSueldos.className = 'oculto';
}
