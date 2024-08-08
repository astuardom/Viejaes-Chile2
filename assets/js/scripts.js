import '../../node_modules/bootstrap/dist/js/bootstrap' 

$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#contact-form').on('submit', function (event) {
        event.preventDefault();  // Previene el envío real del formulario
        alert('Formulario enviado con éxito');
    });
});
