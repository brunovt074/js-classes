/* Funciones */
/*
    Un conjunto de líneas de código que se pueden ejecutar
    Pueden ser anónimas o tener nombre

    function duplicar(x) { return 2*x }

    const duplicar = (x) => { return 2*x }

    Para "ejecutar" las funciones, concatenamos al nombre un par de paréntesis
    Si no añadimos los paréntesis, obtenemos lo que está adentro de la función

    La mínima expresión de una función anónima es
    ()  =>  {}
*/

/* Objetos */
/*
    Son un conjunto de datos organizados por clave:valor
    Pueden tener métodos

    Para extraer los valores alamacenados en el objeto, le concatenamos un .clave

    persona.nombre

    La mínima expresión del objeto es
    {}
*/

/* Arrays */
/*
    Son un conjunto de datos organizados por índice
    Son un conjunto de datos ordenados en donde cada valor tiene una posición única

    Para extraer los valores almacenados en un array, le concatenamos una posición numérica entre corchetes

    abecedario[2]

    La mínima expresión del array es
    []
*/

const persona = {
    nombre: "Victoria",
    apellido: "Palacio",
    edad: 18
}

const abecedario = ["a", "b", "c", "d"]

const numeros = [5,6,7,8,9,10]

const ciudad = "Buenos Aires"

// Métodos de Arrays

// ******************************************************************************************************************************
// array.push()
/*
    array.push es un método que nos permite añadir un nuevo elemento en la última posición de un array

    Parámetros Recibidos:
        El nuevo elemento para meter dentro de la lista

    Valores Devueltos:
        El nuevo largo de la lista después de meter un elemento nuevo
*/


// ******************************************************************************************************************************
// array.pop()
/*
    array.pop es un método que nos permite quitar el último elemento de una lista y devolverlo

    Parámetros Recibidos:
        Nada

    Valores Devueltos:
        El elemento eliminado del último lugar de la lista
*/

// ******************************************************************************************************************************
// array.forEach()
/*
    array.forEach es un método que nos permite "repetir código" para todos los elementos de una lista

    Parámetros Recibidos:
        Callback

    Valores Devueltos:
        Nada

    (Callback) Parámetros Recibidos:
        Recibe un parámetro que tenga cualquier nombre (generalmente llamado "elemento") que simboliza el
        "elemento actual de la lista"

    (Callback) Valores Devueltos:
        Nada
*/

function mencionarElemento(elemento) {
    console.log("Tengo el elemento " + elemento)
}

abecedario.forEach(mencionarElemento)

// ["a", "b", "c"]
/* 
    mencionarElemento("a")
    mencionarElemento("b")
    mencionarElemento("c")
*/

// Hacer una función que calcule el promedio de un array ingresado por parámetro

function calcularPromedio(listaNotas) {

    // listaNotas == [1,2,3,4,5,...]

    // 1. Debemos sumar todas las notas en una variable
    // 2. Debemos saber el número de notas que debemos procesar
    // 3. Debemos calcular el promedio con las dos variables anteriores

    let sumatoria = 0
    const cantidadNotas = listaNotas.length

    listaNotas.forEach(
        (nota) => {
            sumatoria = sumatoria + nota
        }
    )

    const promedio = sumatoria/cantidadNotas
    return promedio
}

// ******************************************************************************************************************************
// array.map()
/*
    array.map es un método que nos permite "repetir código" para todos los elementos de una lista y nos permite generar
    un nuevo array "transformado" según el código que ejecutamos

    NO MODIFICA EL ARRAY ORIGINAL

    Parámetros Recibidos:
        Callback

    Valores Devueltos:
        Un nuevo array transformado

    (Callback) Parámetros Recibidos:
        Recibe un parámetro que tenga cualquier nombre (generalmente llamado "elemento") que simboliza el
        "elemento actual de la lista"

    (Callback) Valores Devueltos:
        Un nuevo valor cualquiera
        El valor devuelto por el callback toma el lugar del elemento original de la lista en el nuevo array transformado
*/

function duplicar(x) { return 2*x }

// [1,2,3]
// [1,2,3].map(duplicar) == [duplicar(1), duplicar(2), duplicar(3)] == [2,4,6]

const numerosDuplicados = numeros.map(duplicar)

const numerosTriplicados = numeros.map(
    (elemento) => { return elemento * 3 }
)

// ******************************************************************************************************************************
// array.filter()
/*
    array.filter es un método que nos permite "repetir código" para todos los elementos de una lista y nos permite generar
    un nuevo array "filtrado" según el código que ejecutamos

    NO MODIFICA EL ARRAY ORIGINAL

    Parámetros Recibidos:
        Callback

    Valores Devueltos:
        Un nuevo array filtrado

    (Callback) Parámetros Recibidos:
        Recibe un parámetro que tenga cualquier nombre (generalmente llamado "elemento") que simboliza el
        "elemento actual de la lista"

    (Callback) Valores Devueltos:
        True o False
        Si el callback devuelve True, entonces el elemento "se queda" y aparece en el array filtrado
        Si el callback devuelve False, entonces el elemento "se va" y NO aparece en el nuevo array filtrado
*/

const listaPersonas = [
    { nombre: "Matías", edad: 22 },
    { nombre: "Ramiro", edad: 17 },
    { nombre: "Luca", edad: 40 },
    { nombre: "Alex", edad: 10 }
]

function esMayor(persona) {
    return persona.edad >= 18
}

listaPersonas.filter(esMayor)

const personasFiltradas = listaPersonas.filter(
    (objetoPersona) => { 
        return objetoPersona.edad >= 18 
    }
)

