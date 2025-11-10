// Mostrar mensaje de bienvenida
alert("¡Bienvenido a mi sitio web!");

// Pedir el nombre al usuario
let nombre = prompt("¿Cuál es tu nombre?");

// Repetir mientras no escriba un nombre válido
while (!nombre || nombre.trim() === "" || !isNaN(nombre)) {
    alert("Por favor, ingresa tu nombre correctamente.");
    nombre = prompt("¿Cuál es tu nombre?");
}

// Cuando el nombre es válido
nombre = nombre.trim();
document.getElementById("nombreUsuario").innerText = "Hola, " + nombre + " 👋";
alert("¡Encantado de tenerte aquí, " + nombre + "!");
