// const nodemailer = require('nodemailer');

function irALinkedIn(){
    window.open("https://www.linkedin.com/in/leobalbastro/", "_blank");

}
function irAGitHub(){
    window.open("https://github.com/leobalbastro", "_blank");

}

if(window.location.href.includes('contact')){

  //funcion para limpiar el formulario luego del post
  const formulario = document.getElementById('miForm');
  
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Crea una instancia de FormData para obtener los datos del formulario
    const formData = new FormData(formulario);
  
    // Realiza la solicitud POST a Formspree
    fetch(formulario.getAttribute('action'), {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Limpiar los campos del formulario después de enviarlos con éxito
            clearFormFields();
            return response.json();
        }
        throw new Error('Error en la solicitud.');
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  });
  
  function clearFormFields() {
    const elements = formulario.elements;
    for(let i =0 ; i< elements.length;i++){
      const element = elements[i];
  
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
        // Limpia el valor del elemento
        element.value = '';
    }
    }
  }
  const numberInput = document.getElementById('telefono');

numberInput.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowUp' || key === 'ArrowDown') {
        event.preventDefault();
    }
});
}



let paginaActual = window.location.href;
// console.log(paginaActual)
const enlaces = Array.from(document.querySelectorAll('.sectNav a'));

function redirectToProjects() {
  window.location.href = 'projects.html'
  
}

if(paginaActual.toString().includes("index.html") || paginaActual.toString().endsWith("/")){
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


