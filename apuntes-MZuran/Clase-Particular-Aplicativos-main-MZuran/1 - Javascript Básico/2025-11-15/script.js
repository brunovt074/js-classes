// Función definida

function duplicar(x) {
    return 2*x
}

// La función flecha

const triplicar = (x) => { return 3*x }

// La función flecha puede ser incluso más pequeña
/*
    Si SÓLO recibe un sólo parámetro, no hace falta escribir los paréntesis
    Si LO ÚNICO QUE HACE LA FUNCIÓN ES UN RETURN, se puede borrar "return y las llaves"
*/

const cuadruplicar = x => 4*x

// OBJETOS
/*
    Son una colección de datos (y métodos) que utilizan el sistema clave:valor

    El objeto en sí TAMBIÉN es un tipo de dato
*/

// La mínima expresión del objeto es la siguiente:
{}          // OBJETO
() => {}    // FUNCIÓN FLECHA (MUY DISTINTO)

// Un método es el nombre que le damos a una función que está guardada en un objeto

/*
    Los objetos almacenan PARES de clave:valor separados por coma

    Para extraer valores de un objeto, concatenamos la variable con un punto y la clave deseada
    miObjeto.nombre
*/

function duplicarCopia(x) {
    return 2*x
}

const miObjeto = {
    nombre: "Matias",
    edad: 22,
    dividir: (x) => { return x/2 },
    doble: duplicarCopia,

    mascota: {
        nombre: "Pancho",
        edad: 4,
        especie: "Perro",
        ladrar: () => { alert("Guau") }
    }
}

// ARRAYS
/*
    Un array en Js es una colección de datos que utiliza el sistema de indexado

    La mínima expresión del array es []
    Si queremos extraer un valor del array, concatenamos la variable que almacena el array con
    corchetes que tengan una posición

    letras[0]
*/


// Tipos de datos:
/*
    Lógicos (Booleanos) - True, False
    Números - 1, 0.1, 0xFF
    Strings - "Hola", 'Hola', ´Hola´
    Funciones - Funciones flecha o funciones declaradas
    Objetos - {}
    Arrays - []
*/

const persona = {
    nombre: "Matias",
    edad: 22,
    dividir: (x) => { return x/2 },

    mascota: {
        nombre: "Pancho",
        edad: 4,
        especie: "Perro",
        ladrar: () => { alert("Guau") }
    },

    comidasFavoritas: ["Milanesa", "Arrolladitos", "Kiwi"] 
}

const funcionFlechaObjeto = () => {
    return persona
}

const arrayComplicado = [
    "a",
    "b",
    ["c", funcionFlechaObjeto]
]

const letras = ["a", "b", "c"]

const cocinar = ( elementoCrudo ) => { return  }

const arrayNumeros = [1,2,3,4]

arrayNumeros.map(numero => numero * 2) == [duplicar(1),duplicar(2),duplicar(3),duplicar(4)]

arrayNumeros.map(numero => numero * 2) == [2,4,6,8]


