// ************************* TIPOS DE DATOS *************************
/*
    Es un tipo de valor el cual podemos guardar dentro una variable

    1.  Number

    2.  String              -   Comienzan y terminan con comillas "hola"

    3.  Booleano (Lógico)   -   True /  False

    4.  Funciones           -   Concatenamos paréntesis para ejecutar
            a.  Función declarada
            b.  Función flecha         -    Expresión mínima: () => {}

    5.  Objetos             -   Colección de clave:valor    
            Expresión míninima: {}
            Concatenamos .clave para extraer los diferentes valores

    6.  Arrays (Vectores)   -   Colección de valores ordenados
            Expresión mínima: []
            Concatenamos [posicion] para extraer los diferentes valores
*/

// ************************* FUNCIONES *************************
// 1. Función declarada
/* La función declarada automáticamente nos genera una variable y le guarda la función adentro */
function duplicar(x) {
    return 2*x
}

/*
    El nombre de la función duplicar
    El parámetro recibido (x)
    El valor devuelto
*/

// 2. Función flecha (Función lambda)
/* 
    A diferencia de la función declarada, la función flecha NO CREA AUTOMÁTICAMENTE UNA VARIABLE 
    Nosotros debemos crear una variable y guardar la función adentro

    La expresión mínima de la función flecha es
    () => {}
*/

const triplicar = (x) => { return 3*x }

// ************************* OBJETOS *************************
/*
    Un objeto es una colección de datos que utiliza el sistema clave:valor separados por comas

    La mínima expresión del objeto es
    {}

    Si nosotros queremos extraer valores de un objeto, tenemos que concatenar el objeto con un punto
    y una clave

    primerObjeto.nombre

    Un método es una función guardada adentro de un objeto
*/
const primerObjeto = {
    nombre: "Matias",
    edad: 22,
    saludar: () => { console.log("Hola") },
    calcular: duplicar,
    mascota: {
        nombre: "Pancho",
        saludar: () => { console.log("Guau") }
    }
}
// ************************* ARRAYS (VECTORES) *************************
/*
    Los arrays son una colección de datos que utilizan el sistema de indexado

    La mínima expresión de un array son
    []

    Si nosotros queremos extraer valores de un array, debemos concatenar entre corchetes una posición

    abecedario[0] == "a"
*/

const abecedario = ["a", "b", "c", "d"]

const datoDificil = [1, 2, [3, 4, { metodo: () => {return "llegaste"} }]]

