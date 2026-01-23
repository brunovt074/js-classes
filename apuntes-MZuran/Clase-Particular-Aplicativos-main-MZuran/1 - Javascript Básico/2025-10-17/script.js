

// Funciones Flecha
/*
    Es una forma más compacta de definir funciones
    A diferencia de las funciones declaradas, NO ASIGNAN LA FUNCIÓN A UNA VARIABLE
    Debemos asignar la función a una variable manualmente

    La mínima expresión de la función flecha
    () => {}

    Si la función flecha SÓLO recibe un parámetro, podemos no escribir el paréntesis
    Si la función flecha SÓLO devuelve un valor, podemos no escribir "return" y podemos no escribir las llaves

    const duplicar = (x) => {return 2*x}
    const duplicar = x => 2x
*/

// Objetos
/*
    Son una colección de datos (y métodos) que utilizan el sistema clave:valor
    Son un tipo de dato que guarda otros tipos de datos
    Un método es una función guardada adentro de un objeto

    La mínima expresión del objeto
    {}

    Para recorrer un objeto y acceder a sus valores, debemos concatenar el objeto con un punto y una clave
*/

const animal = {
    nombre: "Pandereta",
    especie: "Gato",
    edad: 7,
    saludar: () => { alert("Miau") },

    devolverDatos: (x, y) => {
        return {
            primerParametro: x,
            segundoParametro: y
        }
    }

}

const persona = {
    nombre: "Maximo",
    apellido: "Jimenez",
    edad: 17,
    mascota: animal
}

const miObjeto = { nombre: "Lucía", apellido: "Gómez", edad: 17 }
const miArray = ["a", "b", "c", "d"]

// Arrays
/*
    También llamados vectores o listas
    Son una colección de datos que utilizan el sistema de indexado
    Los datos se ingresan de forma ordenada y su "ubicación" será la forma de ubicar el valor
    El primer elemento del array es el número 0

    Su mínima expresión 
    []

    Para extraer el valor de una posición en el array, se le debe concatenar un par de corchetes que contenga
    la posición deseada

    miArray[0]
*/



// Métodos de arrays
/*
    Como ya dijimos antes, los métodos son funciones que están guardadas dentro de un objeto.
    Da la casualidad que los arrays y objetos en JS internamente son lo mismo, por lo que los arrays pueden tener métodos.

    array.push()
    Es un método que agrega un elemento al final del array.
    Recibe el elemento a agregar.
    Devuelve el nuevo array.length

    array.pop()
    Es un método que extripa el último elemento al final del array.
    No recibe nada.
    Devuelve el elemento extripado.

    array.map()
    Es un método que crea una copia modificada del array en donde todos sus elementos son la devolución
    de una función.

    1)  array.map recibe una función flecha (callback)
    2)  callback recibe un elemento del array original
    3)  la callback devuelve un valor que aparecerá en el nuevo array

    Recibe una función (flecha)
    Devuelve un nuevo array con nuevos elementos.

    array.forEach()
    Es un método que recibe un callback y lo pasa por todos los elementos.

    Recibe un callback
    No devuelve nada
    
*/

const personas = [
    { nombre: "Lucía", apellido: "Gómez", edad: 17 },
    { nombre: "Carlos", apellido: "Martínez", edad: 22 },
    { nombre: "Ana", apellido: "Ramírez", edad: 16 },
    { nombre: "Jorge", apellido: "Fernández", edad: 30 },
    { nombre: "María", apellido: "López", edad: 18 }
];

// Mini ejercicio
/*
    Definir una función que recibe un objeto y devuelve un string diciendo si el objeto.edad es mayor o igual a 18
*/
const esMayor = (objeto) => {
    if (objeto.edad >= 18) {
        return "Mayor"
    } else {
        return "Menor"
    }
}

const arrayEdades = personas.map( esMayor )
const arrayNombres = personas.map( elemento => elemento.nombre )

// Mini ejercicio
/*
    Definir una función que recibe un parámetro y lo muestra por consola
*/
const mostrarEnConsola = (x) => {console.log(x)}

personas.forEach(
    (elemento) => { console.log("Hola mi apellido es " + elemento.apellido) }
)

for (let i = 0; i < personas.length; i++) {
    console.log(console.log("Hola mi apellido es " + personas[i].apellido))
}