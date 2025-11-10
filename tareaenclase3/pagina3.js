// Mensaje de bienvenida
alert("¡Bienvenido a la página de operaciones con JavaScript!");

// Función: exponente
function exponente() {
  alert("Has elegido la operación de exponente.");
  let num = prompt("Ingresa un número:");
  if (!isNaN(num)) {
    let resultado = Math.pow(num, 2);
    alert(`El resultado de ${num}² es: ${resultado}`);
  } else {
    alert("Por favor, ingresa un número válido.");
  }
}

// Función: multiplicación
function multiplicacion() {
  alert("Has elegido la operación de multiplicación.");
  let n1 = prompt("Ingresa el primer número:");
  let n2 = prompt("Ingresa el segundo número:");
  if (!isNaN(n1) && !isNaN(n2)) {
    let resultado = n1 * n2;
    alert(`El resultado de ${n1} × ${n2} es: ${resultado}`);
  } else {
    alert("Por favor, ingresa valores numéricos válidos.");
  }
}

// Función: resta
function resta() {
  alert("Has elegido la operación de resta.");
  let n1 = prompt("Ingresa el primer número:");
  let n2 = prompt("Ingresa el segundo número:");
  if (!isNaN(n1) && !isNaN(n2)) {
    let resultado = n1 - n2;
    alert(`El resultado de ${n1} - ${n2} es: ${resultado}`);
  } else {
    alert("Por favor, ingresa valores numéricos válidos.");
  }
}

// Función: suma
function suma() {
  alert("Has elegido la operación de suma.");
  let n1 = prompt("Ingresa el primer número:");
  let n2 = prompt("Ingresa el segundo número:");
  if (!isNaN(n1) && !isNaN(n2)) {
    let resultado = Number(n1) + Number(n2);
    alert(`El resultado de ${n1} + ${n2} es: ${resultado}`);
  } else {
    alert("Por favor, ingresa valores numéricos válidos.");
  }
}
