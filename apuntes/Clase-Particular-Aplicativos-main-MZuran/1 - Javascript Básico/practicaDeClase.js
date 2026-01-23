/*
    Todo lo que salga adentro de un console.log va a salir en la consola de chrome
*/
console.log("Estoy vinculado")

/*
    Los operadores lógicos o operadores de comparacion
    En lugar de devolver un número, devuelven True o devuelven False


    NUNCA CONFUNDIR el operador de asginacion (=) con el operador de comparacion (==)

    Si una funcion devuelve algun valor, se la puede tratar como ese valor

    const quiere decir CONSTANTE (y no se puede cambiar)
    let es para definir variables que sí pueden cambiar

    para recibir más de un parámetro en cualquier funcion, va separado por comas

    Las funciones en Js son un tipo de dato cualquiera como puede ser un numero o un string
*/

/*
    Expresiones mínimas:
    1) Funcion flecha: () => {}
    2) Funcion Flecha retorno implicito: algo => algo
    3) Objeto: {}
    4) Array: []
*/

function mostrarObjeto() {

    return {mensaje: "Hola"}
}

/* --------- OBJETOS --------- */

/*
    Un objeto es un tipo de dato como cualquier otro
    (Se puede asignar a una variable)

    Los objetos guardan una coleccción de datos SEPARADOS POR COMAS utilizando lo que llama el
    "Sistema Clave: Valor"

    Lo que hay a la izquierda es la clave
    Lo que hay a la derecha es el valor

    Para guardar algo en un objeto se tiene que definir a dupla clave-valor

    Para invocar el valor de un objeto, se tiene que hacer de la siguiente manera:

        nombreObjeto.clave == valor

    El programa puede definir más claves y más valores de forma dinámica ASIGNANDO (=)

        nombreObjeto.claveNueva = valor
    
    Siempre que una funcion esté guardada dentro de un objeto le vamos a decir "Método"
*/

function saludoAfuera() {
    console.log("Hola")
}

//const saludoAfuera = () => {console.log("Hola!")}

const Matias = {
    nombre: "Matias",
    apellido: "Zuran",
    edad: 21,

    saludar: () => {console.log("Hola!")},

    papa: {
        nombre: "Ignacio",
        apellido: "Zuran",
        edad: 55,
        saludar: () => {console.log("Hola soy papa")},
    },

    comidasFavoritas: ["Arroz", "Arroyaditos JQ", "Emapanada de Choclo"]
}

/* --------- ARRAYS --------- */

const letras = ["a", "b", "c", "d", "e"]

/*
    ¿Cómo le pasamos una condicion al filter?

    Tenemos que usar la función flecha de retorno implícito
    Esta función flecha de retorno implícito GENERALMENTE utiliza OPERADORES LÓGICOS
    PERO OBLIGATORIAMENTE DEVUELVE TRUE O FALSE

    Además OBLIGATORIAMENTE SIEMPRE recibe ún solo parámetro que puede tener cualquier nombre
    (Generalmente a ese parametro se lo llama elemento)
*/

const numeros = [1, 2, 3, 4, 5]
/*
    [FALSE, FALSE, TRUE, TRUE, TRUE]
*/

/*
    Para invocar el contenido de un objeto se tenía que hacer

    objeto.clave == valor

    Pero ahora para invocar el contenido de un array se tiene que hacer

    array[n] == elemento #n de la lista
    Siempre se empieza por 0

*/

const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "Ana", apellido: "Gómez", edad: 17 },
    { nombre: "Luis", apellido: "Martínez", edad: 32 },
    { nombre: "Marta", apellido: "Rodríguez", edad: 15 },
    { nombre: "Carlos", apellido: "Fernández", edad: 20 },
    { nombre: "Laura", apellido: "Sánchez", edad: 12 },
    { nombre: "Pedro", apellido: "Díaz", edad: 40 },
    { nombre: "Sofía", apellido: "Hernández", edad: 16 },
    Matias
  ];

  /*
        Filtrar a los menores de edad

        Denro de los filters va una funcion flecha de retorno implicito
        algo => otra cosa

        El parametro inicial se suele llamar "elemento"
        elemento => otra cosa

        El valor de retorno suele tomar ALGUNA PARTE DEL ELEMENTO 
        y usar un operador de comparacion
  */
  
const personasFiltradas = personas.filter(
    elemento => elemento.edad >= 18
)

/*
    El .map NO NECESITA DEVOLVER NECESARIAMENTE UN TRUE O FALSE
    PUEDE DEVOLVER CUALQUIER COSA

    () => {}

    {}

    Si se quiere que el mapeo devuelva un objeto, se debe
    poner el objeto entre paréntesis
*/

const personasMapeadas = personas.map(
    elemento => ({ nombre: elemento.nombre, apellido: elemento.apellido })
)

/*
    La funcion flecha del for each NO NECESITA DEVOLVER NADA SI NO QUERES
    La funcion flecha de retorno implicito del forEach generalmente se escribe así
        elemento => { cualquier código }
*/

const personas2 = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "Ana", apellido: "Gómez", edad: 17 },
    { nombre: "Luis", apellido: "Martínez", edad: 32 },
    { nombre: "Marta", apellido: "Rodríguez", edad: 15 },
    { nombre: "Carlos", apellido: "Fernández", edad: 20 },
    { nombre: "Laura", apellido: "Sánchez", edad: 12 },
    { nombre: "Pedro", apellido: "Díaz", edad: 40 },
    { nombre: "Sofía", apellido: "Hernández", edad: 16 }
  ];

/*
    Usando forEach, calcular el promedio de la edad de las personas2
*/

let sumaTotal = 0;

personas2.forEach(
    elemento => { sumaTotal = sumaTotal + elemento.edad }
)

console.log("El promedio es", sumaTotal / personas2.length)