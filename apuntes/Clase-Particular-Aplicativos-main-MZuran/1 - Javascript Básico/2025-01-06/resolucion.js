/*
    Cómo declarar variables
    Se debe usar un declarador (let o const) y luego escribir el nombre de la variable
    SÓLO SE DEBE DECLARAR LAS VARIABLES UNA SÓLA VEZ

    let     (Su contenido puede cambiar)
    const   (Constante)
*/

// *************************** FUNCIONES ***************************

// Funcion Declarada
// Mínima expresión: function <nombreFuncion>() {}

/*
    Las funciones declaradas, sin que el usuario lo vea, declara una variable y le guarda la funcion adentro
    Las variables declaradas dentro de cualquier tipo de funcion, dejan de existir cuando termina la ejecución
    Las variables declaradas FUERA de cualquier funcion, no se borran pero pueden ser modificadas
*/

function sumaDeclarada(y, x) {
    const resultadoSuma = x + y

    console.log(resultadoSuma)

    return resultadoSuma
}

// Funcion Flecha
// Mínima expresión: () => {}

/*
    Las funciones flecha NO declaran ninguna variable. Lo debe hacer el usuario.
    Se debe usar el operador asignación = con una variable no constante
    Se invoncan de la misma forma que las funciones declaradas
*/

let multiplicacionFlecha 

multiplicacionFlecha = (primerParametro, segundoParametro) => {
    const resultadoMultiplicacion = primerParametro * segundoParametro

    return resultadoMultiplicacion
}

// Funcion Flecha con retorno Implícito
// Mínima expresión: <un parámetro> => <algún valor que devuelve>
/*
    Es una funcion flecha con caracteres borrados los cuales están implícitos.
    Las cosas que se pueden borrar son:

        1) Los paréntesis de los parámetros (SÓLO SI SÓLO SE RECIBE UN PARÁMETRO)
        2) Las llaves y el return después de la flecha (SÓLO SI LO ÚNICO QUE HACE LA FUNCION ES RETORNAR ALGO O SI SÓLO TIENE 1 LÍNEA DE CÓDIGO)
*/

const saludar = nombre => "Hola " + nombre

const saludarViejor = (nombre) => { return "Hola " + nombre } 

// *************************** OBJETOS ***************************

/*
    ¿Qué son los objetos?
    Son una colección de datos.
    Utilizan un sistema llamado clave: valor

    Su mínima expresión es {}

    {}          Esto es un objeto
    () => {}    Esto es una función flecha (NO CONFUNDIR)

    Los datos guardados por los objetos, son duplas de clave: valor separadas por comas.
    La clave de un dato es su "identificador" dentro del objeto
    El valor de un dato es el valor del identificador

    Si un objeto está guardando una función, a esta función la vamos a llamar "método"
*/

const persona = {
    nombre: "Matias",
    apellido: "Zuran",
    edad: 21,

    egresado: true,

    mascota: {
        nombre: "Pilar",
        edad: 7,
        saludar: () => { console.log("Guau guau") }
    },

    saludar: () => { console.log("Hola che") }
}

/*
    Para acceder a los datos de un objeto, debemos escribir el objeto y la clave separados por puntos
    primerObjeto.edad
    primerObjet.nombre
*/

// *************************** ARRAYS ***************************
/*
    ¿Qué es un array?
    Un array es una colección de datos que utiliza el sistema de indexación.

    Su mínima expresión es []

    Los datos guardados por un array, son simplemente datos "crudos" separados por comas
*/

const abecedario = ["a", "b", "c", "d"]

/*
    Para extraer un dato de un array, se debe hacer de la siguiente forma:

    <nombre del array>[<posicion>]

    abecedario[0]
    abecedario[1]

    El primer valor del índice es siempre 0
*/

const arrayJodido = [
    "Hola",                                 // Posición 0. String
    12,                                     // Posición 1. Número.
    { nombre: "Pepe", edad: 40 },           // Posición 2. Objeto.
    [1,2],                                  // Posición 3. Array.
    () => { console.log("Hola mundo") }     // Poscicón 4. Función flecha.
]

// *************************** MÉTODOS DE ARRAYS ***************************

/*
    array.map()
    array.filter()
    array.forEach()

    Estos métodos, son propios de todos los arrays.
    Los 3 de arriba en particular, son funciones que *TODAS RECIBEN UNA FUNCION FLECHA COMO PARAMETRO*
    y esta funcion flecha a su vez también recibe parametros propios

        1) Un parámetro que simbolice al elemento actual. ES OBLIGATORIO y por lo general le llamamos "elemento"
        2) Un parámetro que simboliza a la posición del elemento actual y es opcional. Por lo general le llamamos "index"

    Los 3 métodos utilizan la función flecha que le pasamos de forma distinta

    1) .forEach
    El .forEach toma la funcion que le pasamos como parámetro y se la aplica a TODOS SUS ELEMENTOS
*/

const nuevoArray = [2, 4, 6, 8, 10]

// array.forEach
/*
    Recibe una función flecha y la aplica sobre todos sus elementos
    La funcion flecha recibida (la violeta) no debe devolver nada necesariamente
    El método .forEach tampoco devuelve nada, así que si hacemos <variable> = array.forEach(...) va a devolver undefined
*/

nuevoArray.forEach( 
    (elemento, index) => { console.log("Soy el elemento " + elemento + " y estoy en la posicion " + index) } 
)

nuevoArray.forEach( 
    elemento => console.log(elemento + 1)
)

let sumaTotal = 0

nuevoArray.forEach(
    (elemento) => {sumaTotal = sumaTotal + elemento}
)

console.log("La suma total es "+ sumaTotal)

// array.filter
/*
    Recibe una funcion flecha y la aplica sobre todos sus elementos
    La función flecha recibida (la violeta), debe devolver un True o un False (generalmente usando operadores de comparacion)
    El método .filter devuelve un nuevo array filtrado:

        Si la función violeta devolvió TRUE para cierto elemento, ese elemento aparece en el nuevo array filtrado
        Si la función violeta devolvió FLASE, ese elemento no existe en el nuevo array

    El array.filter *NO MODIFICA EL ARRAY ORIGINAL, SÓLO HACE UN ARRAY NUEVO*
    Este array nuevo se debe asignar a una variable

        const arrayFiltradoNuevo = array.filter(...)
*/

const arrayEdades = [15,16,17,18,19,20]

const mayoresDeEdad = arrayEdades.filter(
    (elemento) => { return elemento >= 18 }
)

const arrayPersonas = [
    { nombre: "Juan", edad: 25, ciudad: "Buenos Aires", ocupacion: "Estudiante", estadoCivil: "Soltero" },
    { nombre: "María", edad: 17, ciudad: "Córdoba", ocupacion: "Estudiante", estadoCivil: "Soltera" },
    { nombre: "Carlos", edad: 30, ciudad: "Rosario", ocupacion: "Ingeniero", estadoCivil: "Casado" },
    { nombre: "Ana", edad: 15, ciudad: "Mendoza", ocupacion: "Estudiante", estadoCivil: "Soltera" },
    { nombre: "Pedro", edad: 40, ciudad: "La Plata", ocupacion: "Médico", estadoCivil: "Divorciado" },
    { nombre: "Laura", edad: 12, ciudad: "San Luis", ocupacion: "Estudiante", estadoCivil: "Soltera" },
    { nombre: "Sofía", edad: 19, ciudad: "Salta", ocupacion: "Artista", estadoCivil: "Soltera" },
    { nombre: "Diego", edad: 16, ciudad: "Tucumán", ocupacion: "Estudiante", estadoCivil: "Soltero" }
];


const personasFiltradas = arrayPersonas.filter(
    personaActual => personaActual.edad >= 18 
)

// array.map
/*
    Recibe como parámetro una funcion flecha
    A su vez esta funcion flecha recibe un elemento (OBLIGATORIO) y un índice (OPCIONAL)
    La función flecha violeta DEBE DEVOLVER ALGO. Este algo puede ser cualquier cosa.

    El array.map devuelve un nuevo array tal que todos los elementos del array original son reemplazados por lo que devuelve la funcion violeta
    NO MODIFICA EL ARRAY ORIGINAL SINO QUE DEVUELVE UNO NUEVO
*/

const personasMapeadas1 = arrayPersonas.map(
    personaActual => personaActual.edad >= 18 
)

const personasMapeadas2 = arrayPersonas.map(
    personaActual => "Hola"
)

// Imaginemosnos que sólo nos importa el nombre y la edad de la persona. Haciendo un mapeo, podemos dejar sólo la data que nos importa

const personasMapeadas3 = arrayPersonas.map(
    elemento => ({ nombre: elemento.nombre, edad: elemento.edad })
)

/*
    () => {}
    elemento => {}

    Si queremos que la funcion flecha de retorno implícito devuelva un objeto, metemos el objeto entre paréntesis
*/