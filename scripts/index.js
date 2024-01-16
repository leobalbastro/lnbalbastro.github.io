function irALinkedIn(){
    window.open("https://www.linkedin.com/in/leobalbastro/", "_blank");

}
function irAGitHub(){
    window.open("https://github.com/leobalbastro", "_blank");

}

function sendMessage(){
  // Obtener referencia al formulario
      // Seleccionar todos los elementos de tipo input, textarea y select que no son botones
  var elementos = document.querySelectorAll('form input:not([type="button"]), form textarea, form select');

  // Convertir la NodeList a un array para facilitar su manipulación
  var elementosArray = Array.from(elementos);

  // Hacer algo con los elementos seleccionados, por ejemplo, cambiar su color de fondo
  elementosArray.forEach(function(elemento) {
    elemento.value = '';
  });
  console.log("Mensaje Enviado")

}