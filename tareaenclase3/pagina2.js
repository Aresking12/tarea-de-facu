// Mostrar mensaje de bienvenida
alert("¡Bienvenido a la Galería de Imágenes!");

// Preguntar edad
let edad = prompt("¿Cuántos años tienes?");

// Referencia al contenedor de la galería
const galeria = document.querySelector(".galeria");

// Validar entrada
if (edad && !isNaN(edad)) {
  edad = parseInt(edad);

  // Si es un número fuera de rango
  if (edad > 120 || edad <= 0) {
    alert("Esa edad no parece válida. La página se reiniciará.");
    location.reload();
  } 
  // Si es mayor de 20
  else if (edad > 20) {
    alert("Eres mayor de 20 años. ¡Qué bien!");
    // Mostrar galería para mayores
    galeria.innerHTML = `
      <img src="https://picsum.photos/id/1015/250/200" class="img anim1" alt="Imagen 1">
      <img src="https://picsum.photos/id/1025/250/200" class="img anim2" alt="Imagen 2">
      <img src="https://picsum.photos/id/1035/250/200" class="img anim3" alt="Imagen 3">
      <img src="https://picsum.photos/id/1045/250/200" class="img anim4" alt="Imagen 4">
      <img src="https://picsum.photos/id/1055/250/200" class="img anim5" alt="Imagen 5">
    `;
  } 
  // Si es menor o igual a 20
  else {
    alert("Eres menor de 20 años. Te mostraremos una galería especial 🎨");
    // Mostrar galería para menores
    galeria.innerHTML = `
      <img src="https://picsum.photos/id/237/250/200" class="img anim1" alt="Perrito">
      <img src="https://picsum.photos/id/1024/250/200" class="img anim2" alt="Gatito">
      <img src="https://picsum.photos/id/1074/250/200" class="img anim3" alt="Naturaleza">
      <img src="https://picsum.photos/id/1084/250/200" class="img anim4" alt="Montaña">
      <img src="https://picsum.photos/id/169/250/200" class="img anim5" alt="Paisaje">
    `;
  }

} else {
  alert("No ingresaste una edad válida. La página se reiniciará.");
  location.reload();
}
