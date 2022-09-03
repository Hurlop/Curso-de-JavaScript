// alert('Hola Mundo');
//El prompt es un metodo para mostrar en pantalla un popup o un cuadro de registro para tomar datos y almacenarlos en una variable
const nombre = prompt('¿Cual es tu nombre?');
//con el document.querySelector, lo que hacemos es seleccionar un elemento del documento HTML y asignarle un valor de una variable ya establecida y mostrarla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;