// 1. Introducción Rápida: Variables
// Explicar esto brevemente mientras muestras el código de ejemplo.

// Antes, en JavaScript, declarábamos todo de la misma forma. Ahora somos más específicos para evitar errores. Tenemos dos formas principales de crear nuestras "cajas" para guardar datos:
// const (Constante): Es la regla general. Úsenla siempre por defecto. Se usa para valores que no vamos a reasignar.
// ¿Qué guardamos acá? Funciones, Arrays, Objetos y valores fijos (como un nombre). Aunque el contenido de un array cambie, la "caja" sigue siendo la misma, por eso usamos const.
// let (Variable): Es la excepción. Solo la usamos cuando sabemos que vamos a usar el signo igual (=) de nuevo sobre esa variable para cambiar su valor.
// ¿Qué guardamos acá? Contadores de bucles (i), acumuladores de sumas, o estados que cambian.

// Usamos CONST porque mi nombre no va a cambiar en medio del programa
const miNombre = "Matias"; 
// Usamos CONST para funciones y arrays (regla de oro)
const listaDeCompras = ["Pan", "Leche"];
const saludar = () => console.log("Hola");

// Usamos LET porque la edad va a cambiar (reasignación)
let edad = 21;
edad = 22; // ✅ Esto es válido con let. Con const daría error.


// Parte 2: Funciones (De la "Declarada" a la "Flecha")
// Usar visual estudio code, y conectar javascript a un index.html, no perder mucho tiempo aca, solo es para poder ver mas adelante resultados en consola, explicar el proceso en caso de que el alumno sea totalmente nulo
// 1. Explicación:
// Aquí es donde más atención quiero que presten.


// Una función es un bloque de código que realiza alguna operación (que generalmente usamos a menudo). 
// La usamos para no tener que repetir codigo y llamarla cuando la necesitamos
// Tambien puede devolver ese resultado o puede actuar “silenciosamente”.
// Puede o no tener parametros (valores que usamos para calcular un resultado).

// En JS las funciones se pueden guardar como variables.
// La Forma Clásica (Función Declarada): Usamos la palabra function. Tiene una "magia" oculta: la computadora crea la variable por nosotros automáticamente.
// La Forma Moderna (Función Flecha / Arrow Function): Usamos el símbolo =>. Aquí no hay magia. Nosotros tenemos que declarar la variable (usando const) y asignarle la función manualmente.
// ¿Por qué usamos Flecha? Además de ser moderna, nos permite escribir código mucho más limpio y corto, algo fundamental cuando empecemos a filtrar listas o transformar datos.
// 2. Ejemplo Comparativo
// Miren cómo transformamos una función vieja en una nueva:

// A. Función Declarada (Clásica)
function duplicar(x) {
    return x * 2;
}


// B. Función Flecha (Estándar) La asignamos a una variable const.
const duplicar = (x) => {
    return x * 2;
};


// 3. "Retorno Implícito"
// Las funciones flecha tienen un truco para escribir menos.
// Si solo recibimos un parámetro, podemos borrar los paréntesis ().
// Si la función solo tiene una línea de código que retorna algo, podemos borrar las llaves {} y la palabra return. La flecha => asume que lo que sigue es lo que se devuelve.
// C. Función Flecha (Resumida)6+
const duplicar = x => x * 2;


// Ejercitación para el alumno:
// compartirle para que copien estas consignas en su editor y las resuelvan.
//  El objetivo es que pasen de las funciones viejas (Declaradas)  a las modernas (Flechas).

// Ejercicio 1: Conversión Básica Convierte la siguiente función declarada en una función flecha común (manteniendo las llaves).
// CONVERTIR ESTA:
function sumar(a, b) {
    const resultado = a + b;
    return resultado;
}

// TU RESPUESTA ACÁ:


/* --- SOLUCIÓN EJERCICIO 1 --- */
// Al tener lógica interna (crear variable resultado), necesitamos mantener las llaves {}.
const sumar = (a, b) => {
    const resultado = a + b;
    return resultado;
}


// Ejercicio 2: El Retorno Implícito Esta función es muy corta. Conviértela en una función flecha de una sola línea (borrando llaves y return).
// CONVERTIR ESTA:
function esMayorDeEdad(edad) {
    return edad >= 18;
}

// TU RESPUESTA ACÁ:


/* --- SOLUCIÓN EJERCICIO 2 --- */
// Como es un solo parámetro (edad) y una sola línea de retorno, borramos todo.
const esMayorDeEdad = edad => edad >= 18;

// Ejercicio 3: Creación desde Cero Ahora sin copiar. Crea una función flecha (asígnasela a una constante llamada triplicar) que reciba un número y devuelva ese número multiplicado por 3. Intenta usar la sintaxis resumida.
// Ver resultado con console.log


/* --- SOLUCIÓN EJERCICIO 3 --- */
// Usamos const, el nombre de la función, y el retorno implícito.
const triplicar = numero => numero * 3;

// Prueba:
console.log(triplicar(10)); // Debería dar 30

// vamos a explicar que joraca es, porque es muy importante
// Antes de empezar a crear funciones, necesitamos una herramienta para ver qué está pasando.
// ¿Qué es? console.log es una herramienta de diagnóstico. Es como una radiografía. Nos permite imprimir un mensaje o el valor de una variable en la "consola" del navegador (la que abrimos con F12).
// Importante: console.log NO afecta el funcionamiento del programa. Solo sirve para que nosotros, los programadores, leamos información. El usuario final de la página web nunca ve esto.

// 2. Diferencia Clave: console.log vs return
// Esta es la confusión número 1 en los exámenes, así que atentos:
// return: Es cuando la función entrega un resultado al código para que se siga usando (por ejemplo, para hacer otra cuenta matemática).
// console.log: Es solo "mostrar una foto" del valor en la pantalla negra. No entrega nada al código, solo muestra.

// 3. Ejemplo
const nombre = "Matias";

// Esto solo lo vemos nosotros en la consola (F12)
console.log(nombre); 

// Ejemplo de la diferencia:
const sumar = (a, b) => {
    console.log("Estoy sumando..."); // Muestra mensaje
    return a + b; // DEVUELVE el valor real (el resultado)
};

// CONDICIONAL IF
// Idea clave: El if es una pregunta.
let precio = 2000;
if (precio > 2000) {
    console.log("No me lo compro");
} else {
    console.log("Me lo compro");
}

// OPERADORES LOGICOS
// and &&
let usuarioCorrecto = true;
let passwordCorrecto = false;

// Si el password está mal, el acceso es denegado
let loginExitoso = usuarioCorrecto && passwordCorrecto; 
console.log(loginExitoso); // false

// or ||
let tieneEfectivo = false;
let tieneTarjeta = true;

// Con que tenga una de las dos, puede comprar
let puedeComprar = tieneEfectivo || tieneTarjeta; 
console.log(puedeComprar); // true

// Parte 3: Objetos (Agrupando información)
// 1. Explicación
// Hasta ahora guardamos datos sueltos (un nombre, un número). Pero en la vida real, las cosas tienen muchas características juntas.
// ¿Qué es un Objeto? Es una colección de datos organizados por Clave: Valor. Imaginen que es una ficha técnica.
// Sintaxis: Se usan llaves {}.
// Acceso: Para sacar un dato de adentro, usamos el punto (objeto.propiedad).
// 2. Ejemplo
// Típico mostramos cómo se ve una "Persona" en código.
// Definimos el objeto
const alumno = {
    nombre: "Juan",      // Clave: nombre, Valor: "Juan"
    edad: 25,            // Clave: edad, Valor: 25
    aprobado: true       // Clave: aprobado, Valor: true
};

// ¿Cómo accedemos a los datos? CON EL PUNTO.
console.log(alumno.nombre); // Muestra: Juan

// 3. Concepto Avanzado: Métodos
// Explícales esto simple: "Si un objeto tiene una función adentro, esa función cambia de nombre: la llamamos Método".
const perro = {
    nombre: "Firulais",
    // Esto es un método (una función flecha guardada adentro)
    ladrar: () => { console.log("Guau Guau") } 
};

// Para usarla, la llamamos con paréntesis
perro.ladrar();


// 📝 Ejercitación: Creando nuestro primer Objeto
// Consigna:

// Crea un objeto llamado auto.
// Dale las propiedades: marca (string) y precio (number).
// Agrégale un método llamado arrancar que haga un console.log diciendo "Brum Brum".
// Abajo del objeto, ejecuta el método arrancar.

// 💡 Soluciones (Material de Consulta)

// Solución Parte 3 (Objetos):
const auto = {
    marca: "Toyota",
    precio: 20000,
    arrancar: () => { console.log("Brum Brum") }
};

auto.arrancar();

// Parte 4: Arrays (Listas de cosas)
// 1. Explicación
// A veces no queremos guardar una sola cosa, sino una lista de cosas iguales (una lista de precios, una lista de nombres).
// ¿Qué es un Array? Es una colección ordenada de datos.
// Sintaxis: Se usan corchetes [].
// El Índice: Esto es vital. Las computadoras empiezan a contar desde el CERO. El primer elemento es el 0, el segundo es el 1, etc..
// Una lista de frutas
const frutas = ["Manzana", "Banana", "Pera"];

// Accedemos usando CORCHETES y la posición
console.log( frutas[0] ); // Muestra: Manzana
console.log( frutas[1] ); // Muestra: Banana


// 📝 Ejercitación Rápida
// Consigna: Tengo este array: const colores = ["Rojo", "Azul", "Verde"]; Usa console.log para mostrar por pantalla el color "Verde". Ten cuidado con el número de posición que eliges.

// Solución Parte 4 (Arrays):
const colores = ["Rojo", "Azul", "Verde"];
// Verde está en la posición 2 (0, 1, 2)
console.log(colores[2]);


// Parte 5: Recorriendo Arrays (.forEach)
// 1. Explicación
// Aquí unimos todo. ¿Qué pasa si tengo una lista de 100 productos y quiero mostrarlos todos? No voy a escribir 100 console.log. 
// Usamos un Método de Array llamado .forEach ("Para Cada Uno").
// ¿Cómo funciona? El .forEach es un "chofer" que recorre el array. Nosotros le tenemos que dar una función (flecha) que le diga qué hacer con cada pasajero (cada elemento).
// Importante: El .forEach NO devuelve nada (no crea una lista nueva). Solo ejecuta una acción.

// 2. Ejemplo Paso a Paso
const numeros = [10, 20, 30];

// Le decimos: "Para cada 'numero' en la lista, mostralo en consola"
numeros.forEach( 
    (numero) => {
        console.log("El número es: " + numero);
    }
);


// 📝 Ejercitación Final: El Acumulador (Integración)
// Este ejercicio es clave porque justifica el uso de let que vimos al principio de la clase.
// Escenario: Tienes las notas de un alumno y quieres saber la suma total. Consigna:
// Declara una variable let suma = 0 (usamos let porque va a cambiar).
// Usa .forEach para recorrer el array notas.
// En cada vuelta, suma la nota actual a la variable suma.
// Al final, muestra el total con un console.log.
const notas = [8, 9, 10];
let suma = 0; // Acumulador

// TU CÓDIGO ACÁ (Usa forEach):


console.log(suma); // Debería dar 27


// Solución Parte 5 (forEach):
const notas = [8, 9, 10];
let suma = 0;

notas.forEach( (nota) => {
    suma = suma + nota;
});

console.log(suma);

// Temas clase 1:
// Variables (let/const).
// Funciones Flecha.
// console.log vs return.
// Objetos.
// Arrays.
// forEach + Lógica de Acumulador.

// ejercicio integrador final

// Parte 1 – Productos (arrays + objetos)

// 1️⃣ Crea un array llamado carrito que tenga objetos con:
// -nombre
// -precio

// Ejemplo de productos:
// Remera – 3000
// Zapatillas – 12000
// Gorra – 2500

// Parte 2 – Mostrar productos (forEach + console.log)
// 2️⃣ Usa forEach para mostrar en consola:

// Parte 3 – Total a pagar (acumulador)
// 3️⃣ Crea una variable: let total = 0;
// const descuento = 0.9; // 10% de descuento

// Usa forEach para recorrer el array y sumar los precios al total.

// Parte 4 – Descuento (if)
// 5️⃣ Si el total es mayor a 15000, aplicar un 10% de descuento.
// por ej: total = total * 0.9

// 👉 Mostrar en consola:
// Total sin descuento:
// Total final:

// Pistas:
// El descuento se calcula multiplicando por 0.9
// forEach no devuelve nada
// El return va al final
// total necesita ser let

// ================================
// EJERCICIO INTEGRADOR - SOLUCIÓN
// ================================
// Parte 1 - Productos (arrays + objetos)
const carrito = [
    { nombre: "Remera", precio: 3000 },
    { nombre: "Zapatillas", precio: 12000 },
    { nombre: "Gorra", precio: 2500 }
];

// Parte 2 - Mostrar productos (forEach + console.log)
carrito.forEach(producto => {
    console.log("Producto: " + producto.nombre + " - Precio: " + producto.precio);
});

// Parte 3 - Total a pagar (acumulador)
let total = 0;
const descuento = 0.9; // 10% de descuento

carrito.forEach(producto => {
    total = total + producto.precio;
});

// Guardamos el total sin descuento
const totalSinDescuento = total;

// Parte 4 - Descuento (if)
if (total > 15000) {
    total = total * descuento;
}