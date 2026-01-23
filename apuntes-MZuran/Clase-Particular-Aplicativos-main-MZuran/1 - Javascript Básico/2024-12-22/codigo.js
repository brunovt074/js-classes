console.log("Está vinculado")

/* ------------------- FUNCIONES ------------------- */
/*
    La declaracion de una funcion es simplemente su nombre
    funcion1

    La invocacion de una funcion es poner el nombre de la funcion y los paréntesis con algún parametro
    funcion1()
*/

let saludar

saludar = () => {
    console.log("Hola como estás")
}

/* ------------------- OBJETOS ------------------- */

/*
    Los objetos en javascript son una colección de datos.
    Un objeto es un tipo de dato como lo es cualquier otro.

    Los objetos coleccionan información utilizando un sistema llamado:
    "Duplas de clave:valor"

    Los objetos definen estas duplas de clave:valor separadas por comas entre llaves

    La mínima expresión del objeto es {} (no se debe confundir con la funcion flecha)

    {} Es un objeto
    () => {} Es una función flecha

    Los objetos pueden guardar como valor **CUALQUIER TIPO DE DATO**

    Para acceder a los datos de un objeto, se tiene que especificar su clave después de un punto
    Por ejemplo: persona.nombre
*/

/*
    Si un objeto está guardando una funcion, a eso se le llama "Método"
*/

const persona = {
    nombre: "Matias",
    edad: 21,
    accion: saludar,
    mascota: {
        nombre: "Pancho",
        edad: 4,
        accion: () => { console.log("Guau guau") }
    },
    comidasFavoritas: ["Emapanadas de Humita", "Arroyaditos JQ"]
}

/* ------------------- ARRAYS ------------------- */
/*
    Al igual que los objetos, los arrays son una colección de cualquier tipo de dato separados por comas

    A diferencia de los objetos, los arrays usan un sistema de índice en lugar que el de clave:valor

    La mínima expresión de un array []

    Para acceder a los contenidos de un array, se debe hacer
    nombreArray[posicion]

    La primera posicion es siempre 0
*/

const arrayEjemplo = [
    1,
    2,
    "Hola Mundo",
    { nombre: "Pepe" },
    () => { console.log("Estoy en un array") },
    ["a", "b"]
]

const arraySimple = ["a","b","c"]

/* ------------------- MÉTODOS DE ARRAYS ------------------- */
/*
    Todos los métodos de arrays explicados acá reciben como parámetro una funcion flecha
    
    La función flecha recibida puede recibir 1 o 2 parámetros
        1. El primero (OBLIGATORIO) le solemos llamar elemento y representa al elemento del array
        2. El segundo es un parametro OPCIONAL que le solemos llamar index y representa a la posicion del elemento
*/

const arrayNumerico = [16,17,18,19,20]

/*
    El método .forEach tiene estas características:

        1) No devuelve nada
        2) La función flecha recibida no necesariamente devuelve nada
        3) No modifica el array original

    Se aplica la función flecha a todos los elementos y nada más
*/

const devolucionForEach = arrayNumerico.forEach(
    (elemento, index) => {
        console.log(`Soy el número ${elemento} y mi posicion es ${index}`)
    }
)

/*
    El método .filter tiene estas características:

        1) Devuelve un array nuevo filtrado
        2) La función flecha recibida debe devolver true o false
        3) No modifica el array original
        
    Se aplica la función flecha a todos los elementos y los que devuelven true se van a quedar en el nuevo array devuelto
    Los que devuelven false, se van
*/

const devolucionFilter = arrayNumerico.filter(
    elemento => elemento >= 18
)

/*
    El método .map tiene estas características:

        1) Devuelve un array nuevo 
        2) La función flecha recibida debe devolver ALGO
        3) No modifica el array original
        
    Se aplica la función flecha a todos los elementos 
    Lo que devuelva la funcion flecha va a tomar el lugar del elemento original en el nuevo array
*/

const devolucionMap = arrayNumerico.map(
    elemento => elemento * 2
)

/* ------------------- Hacer un array.map para que devuelva objetos ------------------- */
/*
    Si se quiere hacer una funcion de retorno implícito que devuelva un objeto, 
    el objeto debe estar entre paréntesis
*/
const arrayNombres = [
    "Matías",
    "Felipe",
    "Pepe",
    "Pedro"
]

const arrayMapeado1 = arrayNombres.map(
    (elemento) => { return {nombre: elemento} }
)

const arrayMapeado2 = arrayNombres.map(
    elemento => ({nombre: elemento})
)