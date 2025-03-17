console.log("¡Hola, Mundo!");
let nombre = "Juan";
console.log("¡Hola, " + nombre + "!");
const PI = 3.1416;
console.log(PI);
console.log(typeof 42);
console.log(typeof "JavaScript");
console.log(typeof true); 
console.log((15 + 3) * (8 / 2));

function sumar(a, b) {
    return a + b;
}

let resultado1 = sumar(9, 3);
console.log("El resultado de sumar 9 y 3 es: " + resultado1);

let resultado2 = sumar(15, 29);
console.log("El resultado de sumar 15 y 29 es: " + resultado2);

let hora = 6;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 20) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

for (let i = 1; i < 5; i++) {
    console.log(i);
}

let texto = "hola mundo";
let textoMayusculas = texto.toUpperCase();
let resultadoFinal = textoMayusculas + " desde JS";
console.log(resultadoFinal);

let frutas = ["manzana", "banana", "pera"];
console.log(frutas[1]);

let frutas2 = ["manzana"];
console.log("Array inicial:", frutas2);

frutas2.push("naranja");
console.log("Después de push:", frutas2);

frutas2.pop();
console.log("Después de pop:", frutas2);

let usuario = {
    nombre: "Carlos",
    edad: 25
};

console.log("Nombre del usuario: " + usuario.nombre);
console.log("Edad del usuario: " + usuario.edad);

usuario.saludar = function() {
    console.log("Hola");
};

usuario.saludar();

let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
console.log("El año actual es: " + añoActual);

let numeroAleatorioEntre1y10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10:", numeroAleatorioEntre1y10);

let diaNumero = 3; // Cambia este número para probar diferentes días de la semana
let diaSemana;

switch (diaNumero) {
    case 0:
        diaSemana = "Domingo";
        break;
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miércoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sábado";
        break;
    default:
        diaSemana = "Error: Número de día no válido";
}

console.log(diaSemana);

let contador = 5;

while (contador > 0) {
    console.log(contador);
    contador--;
}

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(4)); // true
console.log(esPar(7)); // false
console.log(esPar(10)); // true

let nombre2 = "Paco";
let edad = 25;
console.log(`Hola, ${nombre} tienes ${edad} años`);

const suma = (a, b) => a + b;
console.log(suma(2, 3)); // 5

[1, 2, 3].forEach(elemento => console.log(elemento));

let frutas3 = ["manzana", "banana", "pera"];
console.log(frutas.indexOf("banana")); // 1

let numeros2 = [5, 1, 3];
numeros2.sort((a, b) => a - b);
console.log(numeros2); // [1, 3, 5]

let numeros3 = [1, 2, 3, 4];
let pares = numeros3.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4]

let numeros4 = [1, 2, 3];
let cuadrados = numeros4.map(numero => numero * numero);
console.log(cuadrados); // [1, 4, 9]

function Persona(nombre) {
    this.nombre = nombre;
}

let persona = new Persona("Ana");
console.log(persona.nombre); // Ana

let ahora = new Date();
let horas = ahora.getHours().toString().padStart(2, '0');
let minutos = ahora.getMinutes().toString().padStart(2, '0');
let segundos = ahora.getSeconds().toString().padStart(2, '0');
console.log(`${horas}:${minutos}:${segundos}`);

let numero = 3.1415;
console.log(numero.toFixed(2)); // 3.14

let saludo = "¡Hola Mundo!";
console.log(saludo.includes("hola")); // false

let frutas4 = "manzana,banana,pera";
let arrayFrutas = frutas4.split(",");
let nuevoString = arrayFrutas.join("-");
console.log(nuevoString); // manzana-banana-pera

let [primero, , tercero] = [10, 20, 30];
console.log(primero); // 10
console.log(tercero); // 30

let persona2 = { nombre: "Ana", edad: 30 };
let { nombre3, edad2 } = persona;
console.log(nombre3); // Ana
console.log(edad2); // 30

function crearContador() {
    let contador = 0;
    return function() {
        return ++contador;
    };
}

contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3

let coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log(this.marca);
    }
};

coche.mostrarMarca(); // Toyota

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    area() {
        return this.ancho * this.alto;
    }
}

let rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.area()); // 50

let objeto = { nombre: "Ana", edad: 30 };
let json = JSON.stringify(objeto);
let nuevoObjeto = JSON.parse(json);
console.log(nuevoObjeto); // { nombre: "Ana", edad: 30 }
