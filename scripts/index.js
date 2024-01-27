function irALinkedIn(){
    window.open("https://www.linkedin.com/in/leobalbastro/", "_blank");

}
function irAGitHub(){
    window.open("https://github.com/leobalbastro", "_blank");

}

function validarFormulario(event){

  event.preventDefault();
  // Obtener referencia al formulario
      // Seleccionar todos los elementos de tipo input, textarea y select que no son botones
  let elementos = document.querySelectorAll('form input:not([type="button"]), form textarea, form select');

  // Convertir la NodeList a un array para facilitar su manipulación
  let elementosArray = Array.from(elementos);

  // Hacer algo con los elementos seleccionados, por ejemplo, cambiar su color de fondo
  elementosArray.forEach(function(elemento) {
    elemento.value = '';
  });
  console.log("Mensaje Enviado")

}

let paginaActual = window.location.href;
// console.log(paginaActual)
const enlaces = Array.from(document.querySelectorAll('.sectNav a'));

function redirectToProjects() {
  window.location.href = 'projects.html'
  
}

if(paginaActual.toString().includes("index.html") || paginaActual.toString().endsWith("/") || paginaActual.toString().includes("index_v2.html")){
  enlaces[0].style.color='#7D11F9';
}else if(paginaActual.toString().includes("about.html")){
  enlaces[1].style.color='#7D11F9';
}else if(paginaActual.toString().includes("projects.html")){
  enlaces[2].style.color='#7D11F9';
}else if(paginaActual.toString().includes("contact.html")){
  enlaces[3].style.color='#7D11F9';
}

function descargarCV(){
  const pdfURL = './docs/Leonardo Balbastro CV.docx';

}