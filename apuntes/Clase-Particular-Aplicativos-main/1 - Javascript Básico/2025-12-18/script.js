const arrayPrueba = ["a", "b", "c"]

function duplicar(x) {
    return 2*x
}

const triplicar = (x) => { return 3*x }

const objetoPrueba = {
    nombre: "Matias",
    edad: 22,
    metodoUno: (x) => {return 4*x},
    metodoDos: triplicar
}

// ************************************ REPASO ************************************

// FUNCIONES
// Expresión mínima de la función flecha: () => {}
// Se puede usar la referencia o "declaración" de una función
triplicar
// Se pueden "ejecutar" concatenando parámetros entre paréntesis
triplicar(3) === 9

// OBJETOS
/*
    Un objeto es una colección de datos (y métodos) que utilizan el sistema clave:valor
    Si queremos extraer información de un objeto, le concatenamos el .clave

    Un método es una función guardada adentro de un objeto

    Expresión mínima: {}
*/

objetoPrueba.nombre

// ARRAYS (VECTORES O LISTAS)
/*
    Un vector es una colección de datos que utiliza el sistema de indexado
    Si queríamos extraer información, le concatenamos entre corchetes una posición

    Expresión mínima: []
*/

arrayPrueba[0] === "a"

// ************************************ MÉTODOS DE ARRAYS ************************************

// Los métodos son funciones metidas adentro de un objeto. En Js, un array es un caso especial de un objeto
// por lo que puede tener métodos.

// array.length         -    (número)
/* Es un número que representa la cantidad de elementos que tiene una lista */
arrayPrueba.length

// array.pop()          -    (método)
/*
    Función:
        Modifica el array que lo está invocando para quitar el último elemento de una lista, haciendo que
        su length sea 1 unidad menor

        "Saca el último elemento de la lista"

    Recibe:
        Nada

    Devuelve:
        Devuelve el elemento eliminado de la lista
*/

// arrayPrueba.pop() === "c"

// array.push()         -   (Método)
/*
    Función:
        Modifica el array original para agregar un nuevo elemento recibido por parámetro al final de la lista

    Recibe:
        Un nuevo elemento para agregar

    Devuelve:
        Devuelve el nuevo largo de la lista
*/

/*
    Callback:   Es una función que se pasa por parámetro a otra función.
                Se puede pasar de forma anónima o con el nombre de la función.
*/

const arrayNumerico = [1,2,3,4,5]

// array.forEach()
/*
    Función:
        Toma un callback y lo "mete" a cada elemento de una lista

        ["a", "b", "c"]
        [callback("a"), callback("b"), callback("c")]

    Recibe:
        Un callback.

    Devuelve:
        Nada.

    (Callback)  Recibe:
            Recibe un parámetro con cualquier nombre. Ese parámtro lo van a ir llenando los elementos del array.
            Solemos llamarlo "elemento".

    (Callback)  Devuelve:
            Nada.
*/

arrayNumerico.forEach(
    (elemento) => {
        console.log("El elemento actual es el número", elemento)
    }
)

// Ejemplo: Calcular el promedio del array numérico

let sumatoria = 0

arrayNumerico.forEach(
    (numero) => { sumatoria = sumatoria + numero }
)

const promedio = sumatoria / arrayNumerico.length

console.log("El promedio de todos los números es", promedio)

// array.map()
/*
    Función:
        Toma un callback y lo "mete" a cada elemento de una lista para crear una lista nueva

        ["a", "b", "c"]
        [callback("a"), callback("b"), callback("c")]   -   Va a devolver esto

        NO MODIFICA A EL ARRAY ORIGINAL

    Recibe:
        Un callback.

    Devuelve:
        Un nuevo array "transformado" según los resultados de los callbacks
        En el ejemplo anterior, nos devuelve esto:

        [callback("a"), callback("b"), callback("c")]

    (Callback)  Recibe:
            Recibe un parámetro con cualquier nombre. Ese parámtro lo van a ir llenando los elementos del array.
            Solemos llamarlo "elemento".

    (Callback)  Devuelve:
            Devuelve cualquier cosa, pero obligatoriamente devuelve "algo".
            Ese "algo" que devuelva va a tomar la posición del elemento original.
*/

const arrayCuadruplicado = arrayNumerico.map(
    (elemento) => { return 4*elemento }
)

const arrayDuplicado = arrayNumerico.map(duplicar)

// array.filter()
/*
    Función:
        Toma un callback y lo "mete" a cada elemento de una lista para crear una lista nueva "filtrada"

        ["a", "b", "c"]
        [callback("a"), callback("b"), callback("c")]

        NO MODIFICA A EL ARRAY ORIGINAL

    Recibe:
        Un callback.

    Devuelve:
        Un nuevo array "filtrado" que tendrá igual cantidad de elementos o menor a la original
        ["a"]

    (Callback)  Recibe:
            Recibe un parámetro con cualquier nombre. Ese parámtro lo van a ir llenando los elementos del array.
            Solemos llamarlo "elemento".

    (Callback)  Devuelve:
            Debe devolver "True" o "False"
            Si el callback devuelve "True", entonces el elemento va a "quedarse"
            Si el callback devuelve "False", entonces el elemento "se va"
*/

const arrayFiltrado = arrayNumerico.filter(
    (elemento) => { return elemento >= 3 }
)