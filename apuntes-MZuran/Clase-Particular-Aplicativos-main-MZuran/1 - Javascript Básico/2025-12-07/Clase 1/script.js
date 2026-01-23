/*
    Igualdades:

    No debemos confundir los operadores de asignación, igualdad débil y igualdad estricta

    =       -   Asignación
    ==      -   Igualdad débil
    ===     -   Igualdad estricta
*/

//  ************************************ FUNCIONES ************************************

/*
    Diferencias entre la función y el retorno de la función.

    Si nosotros escribimos una función sin usar su paréntesis, nos estamos refiriendo a la
    DECLARACIÓN de la función.

    Si nosotros escribimos una función y le agregamos paréntesis, estamos EJECUTANDO o "corriendo"
    el código de la función. También esto es llamado INVOCACIÓN de función.
*/

/*
    Funciones definidas:
    Automáticamente crean una variable con el nombre de la función y guardan la función adentro
    sin que nosotros tengamos que hacerlo manualmente
*/

// Esta función definida crea la variable "duplicar" y le guarda la función adentro
function duplicar(x) {
    return 2*x
}

/*
    Funciones flechas (tabién llamadas función lambda):
    A diferencia de las funciones definidas, las funciones flecha NO crean automática-
    mente una variable en la cual guardamos la función.

    Lo debe hacer el usuario manualmente.

    La mínima expresión de la función flecha es:
    () => {}
*/

const triplicar = (x) => { return 3*x }

/*
    Funciones flecha con sintaxis abreviada. (También llamadas de retorno implícito)

    Cuando escribimos una función flecha podemos borrar un par de cosas y hacer que
    la función se entienda de todos modos. Esto se hace con el objetivo de no tener
    tantos caracteres y escribir menos.

    Cosas que podemos abreviar:

    a)  Si la función flecha SÓLO RECIBE UN SÓLO PARÁMETRO, entonces podemos borrar
        los paréntesis.

    b)  Si la ÚNICA LÍNEA DE CÓDIGO DE LA FUNCIÓN FLECHA ES UN RETURN, entonces podemos
        borrar las llaves y la palabra return.
*/

const cuadruplicar = x => 4*x

//  ************************************ LOOP FOR ************************************

/*
    Es una estructura de reptición que repite un bloque de código una n cantidad de
    veces según como lo configuremos.

    La sintaxis es

    for (inicialización ; condición ; actualización) {

    }


    inicialización:

        Inicializamos (declaramos) con let la variable de control y le damos un
        valor inicial.

        Generalmente llamaremos a la variable de control "i" y haremos que comience en
        0

    condición:

        Evaluamos una condición que utilice nuestra variable de control.
        Si la condición es verdadera, entonces el bucle sigue.
        Si la condición es false, entonces el bucle para.

    actualización:

        Es una línea de código que se ejecuta entre cada ejecución del bloque repetido.
        Su función es actualizar el valor de la variable de control.
        Generalmente haciendo subir su valor en 1 u otro número.
*/

for (let i = 0; i <= 10; i = i + 1) {
    //console.log("El valor de la variable de control es " + i)
}

//  ************************************ OBJETOS ************************************
/*
    Un objeto es una colección de datos (y métodos) que utilizan el sistema clave:valor

    Un método es una función guardada adentro de un objeto

    La mínima expresión de un objeto es:
    {}
    (No confundir con la función flecha)

    Los objetos son una colección de duplas clave:valor separados por comas dentro de
    llaves
*/

const persona = {
    nombre: "Matias",
    edad: 22,
    saludar: () => { console.log("Hola") },
    calcular: triplicar,
    mascota: {
        nombre: "Pancho",
        saludar: () => { console.log("Guau") }
    }
}

/*
    Si nosotros queremos extraer VALORES del objeto, debemos escribir el nombre
    de la variable que contiene al objeto y concatenarle un punto y el nombre de una
    CLAVE

    persona.nombre
*/

//  ************************************ ARRAYS ************************************
/*
    Un array es una colección de datos que utiliza el sistema de indexado

    La mínima expresión del array es []

    La colección de datos del array son simplemente datos separados por comas.
    La posición y el orden de los datos tiene una importancia severa.

    Para extraer información de un array, le debemos concatenar un par de corchetes
    que contengan la posición del valor deseado adentro.

    Recordar que el primer elemento del array siempre tiene la posición 0.
*/

const abecedario = ["a", "b", "c", "d"]

//  ************************************ TIPOS DE DATOS ************************************
/*
    -   Números
    -   Strings
    -   Booleanos (lógicos)
    -   Funciones               Concatenamos (parametros)
    -   Objetos                 Concatenamos .clave
    -   Array                   Concatenamos [posición]
*/

const arrayComplicado = [
    1,
    2,
    3,
    [4,5,{
        nombre: "Pepe",
        metodo: () => {
            return () => { return ["Arroz", {mensaje: "llegaste"}]}
        }
    }]
]

// arrayComplicado[3][2].metodo()()[1].mensaje