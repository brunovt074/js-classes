
// ************************************ VARIABLES ************************************

/*
    Declaración de variables

    let/var     -   Variables dinámicas
    const       -   Variables constantes

    =           -   Operador de asignación
                    Se encarga de "meter" el contenido que tiene a la derecha adentro de la variable a
                    su izquierda
*/

let x = 1
const y = "Hola"

/*
    ==          -   Operador de igualdad débil
    ===         -   Operador de igualdad fuerte
    =           -   Operador de asignación
*/


// ************************************ FUNCIONES ************************************

// Función declarada
function duplicar(x) {
    return 2 * x
}

// Función flecha
const triplicar = (x) => { return 3 * x }

// Función flecha (con sintaxis abreviada)
/*
    Podemos abreviar funciones flecha si se cumplen ciertas condiciones:

        1)  Si la función flecha SÓLO RECIBE 1 SÓLO PARÁMETRO, podemos no escribir los paréntesis
        2)  Si la ÚNICA LÍNEA DE CÓDIGO DE LA FUNCIÓN ES UN RETURN, podemos borrar "return" y las llaves
*/

// Función flecha sintaxis abreviada
const cuadruplicar = x => 4 * x 

// ************************************ LOOP FOR ************************************
/*
    for (inicialización ; condición ; actualización) {
    
    }

    El for es una estructura de repetición que se guía según una "variable de control"

    inicialización:
        Declarar con let la variable de control y asignarle un valor inicial
        Generalmente ese valor es 0
        La variable de control se suele llamar "i"

    condición:
        Una línea que contiene un operador de comparación que utiliza de alguna forma a la variable
        de control.

        Si la condición es true, entonces el loop continúa.
        Si la condición es false, entonces el loop se detiene.

        Generalmente nos vamos a fijar si la variable de control es mayor o menor a algo.

    actualización:
        Es una línea de código en donde la variable de control cambia su valor a un valor.
        La actualización más común de todas es hacer que la variable de control aumente en 1.

        i = i + 1       //  Estas 2 líneas hacen lo mismo
        i++             //

        La actualización se ejecuta después de ejecutar cada bloque.
*/

for ( let i = 4 ; i <= 10 ; i = i + 2 ) {
    // console.log("El valor actual de i es " + i)
}

// ************************************ OBJETOS ************************************
/*
    Un objeto en Js es una colección de datos (y métodos) que utilizan el sistema clave:valor.

    Método: Un método es una función guardada adentro de un objeto

    Expresión Mínima del Objeto: {}

    Un objeto por dentro contiene duplas de clave:valor separadas por comas.

    ¿Cómo extraemos valores de un objeto?
    Debemos concatenar el nombre del objeto con un punto y una clave

    primerObjeto.nombre
*/

const primerObjeto = {
    nombre:"Matias",
    edad:22,
    saludar: () => { console.log("Hola") },
    mascota: {
        nombre: "Pancho",
        saludar: () => { console.log("Guau") }
    },
    calcular: duplicar,
    numero: duplicar(1)
}

// ************************************ ARRAYS (VECTORES) ************************************
/*
    Un array o vector en js es una colección de datos que utiliza el sistema de indexado.

    Expresión mínima del Array: []

    Un array almacena datos separados por comas. A diferencia de los objetos, el orden en el cual ingresamos los
    datos importa.

    Decimos que un array es una colección "ordenada" de datos

    Para extraer información de un array, le concatenamos entre corchetes una posición numérica
    Por ejemplo

    abecedario[0] === "a"
*/

const abecedario = ["a", "b", "c", "d"]

const arrayComplicado = [1, "Hola", true, triplicar, primerObjeto, abecedario]

const arrayEjercicio = [1, 2, [3, 4, [5, {
    nombre:"Hola",
    x: () => {
        return () => {
            return {
                nombreClave: [1, 3, {
                    ultimaClave: {
                        mensaje: "Llegaste"
                    }
                }]
            }
        }
    }
}]]]

// arrayEjercicio[2][2][1].x()().nombreClave[2].ultimaClave.mensaje

/*
    Tipos de datos:

    Numbers
    Strings
    Booleanos (Lógicos)
    Funcion                 -   Concatenar paréntesis con parámetros
    Objeto                  -   Concatenar .clave
    Array                   -   Concatenar [posicion]
*/