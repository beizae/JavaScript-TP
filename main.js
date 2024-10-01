// Ejercicio 1.2 - Variables
// let a = 5
// let b = 26
// let c = a+b
// console.log("La suma de "+a+", "+b+" es: "+c)

// Ejercicio 1.3 - Prompt
//let nombre = prompt("¿Cual es tu nombre?");
//console.log("Hola, "+ nombre)

// Ejercicio 2.1 - Operadores lógicos y condicionales
//let a = prompt("Ingrese el primer valor: ")
//let b = prompt("Ingrese el segundo valor: ")
//let c = prompt("Ingrese el tercer valor: ")

//if (a>b && a>c) {
//    console.log("El mayor de los tres es: "+ a)
//} else if (b>a && b>c) {
//    console.log("El mayor de los tres es: "+ b)
//} else {
//    console.log("El mayor de los tres es: "+ c)
//}

// Ejercicio 2.2 - Operadores lógicos y condicionales
//let a = prompt("Ingrese un numero y te dire si es par o impar: ")
//a = parseInt(a);

//if (a % 2 === 0) {
//  console.log("El número " + a + " es par");
//} else {
//  console.log("El número " + a + " es impar");
//}

// Ejercicio 3.1 - Operadores de asignación y bucles
//let a = 10;
//while(a>=1){
//   console.log(a);
//    a--;
//}

// Ejercicio 3.2 - Operadores de asignación y bucles
//let numero;
//do {
//  numero = parseInt(prompt("Ingrese un número mayor a 100:"));
//  if (isNaN(numero)) {
//    console.log("Por favor, ingrese un número válido.");
// } else {
//    console.log("El número ingresado es:", numero);
//  }
//} while (numero <= 100);

// Ejercicio 4.1 - Funciones de JavaScript
//function esPar(numero) {
//     return numero % 2 === 0;
//  }
//let a = prompt("Ingrese un numero: ")
//console.log("El número "+a+" es par:", esPar(a));

// Ejercicio 4.2 - Funciones de JavaScript
/*function convertirCelsiusAFahrenheit(celsius) {
      return celsius * 1.8 + 32;
  }
  const gradosCelsius = prompt("Ingrese los grados °C a convertir: ");
  const gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
  console.log(`${gradosCelsius}°C son equivalentes a ${gradosFahrenheit}°F`);*/

  // Ejercicio 5.1 - Objetos en JavaScript
  // Objeto persona
  /*
const persona = {
    nombre: "Edgardo",
    edad: 36,
    ciudad: "Maipu",
    cambiarCiudad(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
console.log("Persona:", persona.nombre, ", Edad:", persona.edad, ", Ciudad:", persona.ciudad);
  
// Cambiamos la ciudad de la persona
persona.cambiarCiudad("Las heras");
console.log("Persona:", persona.nombre, ", Edad:", persona.edad, ", Ciudad:", persona.ciudad);
*/


// Ejercicio 5.2 - Objetos en JavaScript
//objeto Libro
/*
const libro = {
    titulo: "El señor de los anillos",
    autor: "J.R Tolkien",
    año: 1954,
  
    // lo uso para determinar si el libro tiene más de 10 años
    esAntiguo() {
      const añoActual = new Date().getFullYear();
      return añoActual - this.año > 10;
    }
  };
   if (libro.esAntiguo()) {
    console.log(`${libro.titulo} es un libro antiguo.`);
  } else {
    console.log(`${libro.titulo} es un libro reciente.`);
  }*/


 // Ejercicio 6.1 - Arrays
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosDoblados = [];

for (let i = 0; i < numeros.length; i++) {
  numerosDoblados.push(numeros[i] * 2);
}
console.log("Números originales:", numeros);
console.log("Números multiplicados por 2:", numerosDoblados);*/

// Ejercicio 6.2 - Arrays
/*const pares = [];
for (let i = 1; i <= 20; i++) {
   if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log("Primeros 10 números pares:", pares);*/

// Ejercicio 7.1 - Introducción al DOM
/*function cambiarColor() {
    const parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "blue";
    }
}*/

// Ejercicio 7.2 - Introducción al DOM
function mostrarAlerta() {
    const nombre = document.getElementById("nombre").value;
    alert("¡Hola, " + nombre + "!");
}

// Ejercicio 8.1 - Eventos en DOM
const lista = document.getElementById("miLista");
const elementosLista = lista.getElementsByTagName("li");
for (let i = 0; i < elementosLista.length; i++) {
  elementosLista[i].addEventListener("click", function() {
    console.log(this.textContent);
  });
}

// Ejercicio 8.2 - Eventos en DOM
function deshabilitarCampo() {
    document.getElementById("miCampo").disabled = true;
}
function habilitarCampo() {
    document.getElementById("miCampo").disabled = false;
}

// Ejercicio 9 - LocalStorage
function guardarCorreo() {
    const email = document.getElementById('email').value;
    localStorage.setItem('correo', email);
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = `Correo guardado: ${email} <button onclick="eliminarCorreo()">Eliminar Correo Guardado</button>`;
}

function eliminarCorreo() {
    localStorage.removeItem('correo');
    document.getElementById('mensaje').innerHTML = '';
}
window.onload = function() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.innerHTML = `Correo guardado: ${correoGuardado} <button onclick="eliminarCorreo()">Eliminar Correo Guardado</button>`;
    }
}