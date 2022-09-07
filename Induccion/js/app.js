// alert('Hola Mundo');
//El prompt es un metodo para mostrar en pantalla un popup o un cuadro de registro para tomar datos y almacenarlos en una variable
const nombre = prompt('¿Cual es tu nombre?');
//con el document.querySelector, lo que hacemos es seleccionar un elemento del documento HTML y asignarle un valor de una variable ya establecida y mostrarla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;
//La consola de JavaScript
//Esto mostrará un arreglo en la consola
console.log([1,2,3,4]);
//Se puede cambiar el formato del arreglo como una tabla
console.table([1,2,3,4]);
//Tambien tenermos lo que viene a ser un error en la consola
console.error('Algo salió mal');
//Podemos colocar advertencias
console.warn('Algo salió mal');
//Podemos tambien limpiar la consola si disponemos de esta funcion
console.log("Para limpiar la consola coloca: console.clear();");
//Tambien podemos mirar cuanto tiempo tarda en ejecutarse un comando
console.log('Aqui empieza el conteo de cuanto tarda un codigo en ejecutarse');
console.time('Hola');
console.warn('Relleno sanitario para calcular el tiempo');
console.warn('Relleno sanitario para calcular el tiempo');
console.warn('Relleno sanitario para calcular el tiempo');
console.warn('Relleno sanitario para calcular el tiempo');
console.warn('Relleno sanitario para calcular el tiempo');
console.warn('Relleno sanitario para calcular el tiempo');
console.warn('Relleno sanitario para calcular el tiempo');
console.timeEnd('Hola');
//Podremos crear objetos de la siguiente manera
const obj = {
    nombre: "Daniel",
}