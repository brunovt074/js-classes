/*
    Funciones
        Colección de líneas de código que pueden o no recibir información y devolver información
        Los datos recibidos por la función se llaman parámetros
        Los datos que devuelve la función se llaman retorno

        Para ejecutar una función, debemos concatenar unos paréntesis que contengan los parámetros

        function duplicar(x) { return 2*x }

        duplicar    -   Definición de la función
        duplicar(2) -   Ejecución de la función

        Tipos de funciones:

            Función declarada:
                Es un tipo de función que utiliza la palabra reservada function
                Y es especial porque automáticamente crea una variable y le guarda el valor de la función adentro

            Función flecha:
                Es un tipo de función que utiliza el operador flecha =>
                Este tipo de función NO va a guardar la función dentro de una variable de forma automática
                La mínima expresión es () => {}

                let triplicar                           // Declaramos la variable triplicar
                triplicar = (x) => { return 3*x }       // Asignamos (o guardamos) una función flecha a la variable

                const triplicar = (x) => { return 3*x }   // Se declara y asigna la variable en una sóla línea

                La función flecha admite una sintaxis especial para escribir menos código
                Las dos sintaxis que veremos nosotros son:

                1)  Si la función flecha sólamente recibe un sólo parámetro, podemos no escribir los paréntesis
                2)  Si la única acción de la función flecha es hacer un return, podemos no escribir las llaves y el return

                const cuadruplicar = x => 4*x
    Objetos
        Colección de datos que utilizan el sistema clave:valor
        La mínima expresión del objeto es {}

        const x = {nombre: "Pepe"}

        Para extraer información de un objeto, le concatenamos un punto y el nombre de la clave
        x.nombre

        Los objetos pueden almacenar cualquier tipo de dato
        Una función es un tipo de dato
        Y una función guardada dentro de un objeto se llama un método

    Arrays
        Colección de datos que utilizan el sistema de indexado
        Se extraen los datos concatenando corchetes con la posición deseada en el medio

        const letras = ["a","b","c"]
        letras[0]

        Su mínima expresión es []
*/

const objetoTest = {
    nombre: "Matías",
    edad: 22,
    comidasFavoritas: ["Milanesa", "Arroyados de Jamón y queso"],
    saludar: () => { console.log("Hola") },

    mascota: {
        nombre: "Pancho",
        edad: 4,
        especie: "Perro"
    },

    arrayComplicado: [1, 2, () => { return { nuevoArray: [() => { return { mensaje: "Llegaste" } }] } }]
}

const arrayTest = ["a", "b", "c"]
const arrayNumerosTest = [10,20,30,40,50]

// --------------------------------------------------------------------------------------------------------
// Array.push()
/*
    Es un método de JS que nos permite añadir un elemento al último lugar de un array
    Recibe por parámetros:  El nuevo elemento para añadir
    Devuelve:               El nuevo del array

    arrayTest.push("d")
*/

// Array.pop()
/*
    Es un método de JS que nos permite QUITAR el último elemento al final de un array
    Recibe por parámetros:  Nada
    Devuelve:               El elemento quitado del array

    arrayTest.pop()
*/

// Cada vez que nosotros mandemos por parámetro una función hacia otra función, la llamaremos "callback"
// Todos los callbacks se envían por definición

// Array.forEach()
/*
    Es un método de JS que nos permite ejecutar una función de forma cíclica para cada elemento del array

    Recibe por parámetros:  El callback
    Devuelve:               Nada

        (Callback)  Recibe:     Un elemento del array (puede tener cualquier nombre)
        (Callback)  Devuelve:   Nada necesariamente
*/

function callbackEjemplo(x) {
    console.log("El elemento actual es", x)
    return 1
}

arrayTest.forEach(callbackEjemplo)

arrayTest.forEach(
    (elemento) => {
        console.log("Elemento segundo callback es", elemento)
    }
)

// Array.filter()
/*
    Es un método de JS que nos permite ejecutar una función de forma cíclica para cada elemento del array
    y nos sirve para crear un NUEVO array que tenga la misma cantidad o menos elementos que el array original

    NO MODIFICA AL ARRAY ORIGINAL

    Recibe por parámetros:  El callback
    Devuelve:               Un nuevo array filtrado

        (Callback)  Recibe:     Un elemento del array (puede tener cualquier nombre)
        (Callback)  Devuelve:   True / False

    Si callback(elemento) == True, entonces el elemento aparece en el array filtrado
    Si callback(elemento) == False, etonces el elemento NO aparece en el array filtrado
*/

const mayorAVeinte = ( numero ) => { return numero >= 20 }

const arrayFiltrado1 = arrayNumerosTest.filter(mayorAVeinte)

const arrayFiltrado2 = arrayNumerosTest.filter(
    (elemento) => { return elemento >= 25 }
)

const arrayFiltrado3 = arrayNumerosTest.filter(
    elemento => elemento >= 25
)

// Array.map()
/*
    Es un método de JS que nos permite ejecutar una función de forma cíclica para cada elemento del array
    y nos sirve para crear un NUEVO array que tenga elementos "transformados" en cada posición

    NO MODIFICA AL ARRAY ORIGINAL

    Recibe por parámetros:  El callback
    Devuelve:               Un nuevo array transformado

        (Callback)  Recibe:     Un elemento del array (puede tener cualquier nombre)
        (Callback)  Devuelve:   Cualquier cosa

    Supongamos que estamos en el elemento número 0 del array
    La posición 0 va a contener lo que devuelva el callback( arrayOriginal[0] )
*/

function duplicar(x) { return 2*x }

const arrayMapeado1 = arrayNumerosTest.map(duplicar)

const arrayMapeado2 = arrayNumerosTest.map(
    (elemento) => { return 2 * elemento }
)

const arrayMapeado3 = arrayNumerosTest.map(
    elemento => 2 * elemento
)

// ----------------------------------------------------------------------------------------------------------------------------

const personas = [
  {
    id: 1,
    nombre: "Ana",
    apellido: "García",
    edad: 17
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Pérez",
    edad: 25
  },
  {
    id: 3,
    nombre: "María",
    apellido: "López",
    edad: 32
  },
  {
    id: 4,
    nombre: "Carlos",
    apellido: "Ramírez",
    edad: 15
  },
  {
    id: 5,
    nombre: "Sofía",
    apellido: "Martínez",
    edad: 19
  }
];

// personas.forEach()
// Hacer un forEach para que en la consola, para persona salaga "Hola, mi nombre es <nombre>"

personas.forEach(
    objetoPersona => {
        console.log("Hola mi nombre es " + objetoPersona.nombre)
    }
)

// personas.filter()
// Filtrar las personas para que sólo salgan las mayores de edad

const personasFiltradas = personas.filter(
    objetoPersona => objetoPersona.edad >= 18
)

// personas.map()
// Transformar el array de personas a un array de números que sólo contenga las edades

const personasTransformadas = personas.map(
    (objetoPersona) => { return objetoPersona.edad }
)