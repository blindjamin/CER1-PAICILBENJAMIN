document.getElementById('tipo-residuo').addEventListener('change', function() {
    const subcategoriaSelect = document.getElementById('subcategoria-residuo');
    const tipo = this.value;
    
    let opciones = [];

    if (tipo === 'plastico') {
        opciones = ['Botellas', 'Envases', 'Bolsas'];
    } else if (tipo === 'papel') {
        opciones = ['Periódicos', 'Cartón', 'Papel de oficina'];
    } else if (tipo === 'vidrio') {
        opciones = ['Botellas', 'Frascos', 'Cristalería'];
    } else if (tipo === 'metales') {
        opciones = ['Latas', 'Cables', 'Electrodomésticos pequeños'];
    } else if (tipo === 'electronicos') {
        opciones = ['Teléfonos móviles', 'Baterías', 'Componentes de computadoras'];
    }

    subcategoriaSelect.innerHTML = opciones.map(opcion => `<option value="${opcion}">${opcion}</option>`).join('');
});



(() => {
    'use strict';
    const form = document.getElementById('form-reciclaje');

    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Evita que el formulario se envie mientras mostramos la alerta
            event.preventDefault();
            alert('¡Formulario enviado con éxito!');
        }
        
        form.reset()
        form.classList.remove("was-validated");
        form.classList.add('was-validated');
    }, false);
})();