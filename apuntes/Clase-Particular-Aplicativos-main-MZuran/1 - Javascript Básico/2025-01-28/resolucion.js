// ****************************************************** DECLARACION ******************************************************

/*
    Declaración (de variables)

        Cuando nosotros "creamos" una variable, la estamos declarando.
        Generalmente la declaramos con un "let" o con un "const"

        let x = 10
        const y = 34

        Una misma variable no se puede volver a declarar. Intentarlo nos dará un error.
        Las variables tipo "let" se pueden modificar despues de crearse

        Las variables de tipo "const" son constantes.
        NO SE PUEDEN MODIFICAR DESPUES DE CREARSE
        Y siempre deben tener un valor inicial

    Asignación (de variables)

        Es un operador
        El operador asignación es el igual
        =

        El operador "mete" lo de la derecha dentro de la izquierda
        x = 11
*/

// ****************************************************** OPERADORES ******************************************************

/*
    Operadores numéricos:
        Toman por lo menos un número y devuelven un nuevo número

        +
        -
        *
        /
        ^
        ||
        !

    Operadores lógicos:
        Pueden tomar casi cualquier tipo de dato y devuelven True o False

        ==
        !=
        >
        <
        >=
        <=
*/

// Las condiciones del IF se arman utilizando operadores lógicos
/* if (edad > 18) {
    console.log("Sos mayor de edad")
} */

// ****************************************************** FUNCIONES ******************************************************

/*
    Funciones

    Funciones Matemáticas:
        f(x) = 2x
        g(x) = 1 + x
        h(x) = x * -1

        f(2) = 4
        g(0) = 1
        h(5) = -5

        Las funciones matemáticas son una serie de pasos que "transforma" la informacion ingresada y la devuelve
        Se les "ingresa" un número y "devuelven" otro
        f(x,y,z) = x*y*z

    Funciones de Programación:
        Lo que recibe una función se llama "parámetro"
        Lo que devuelve una función se llama "retorno"

        Las funciones en JavaScript no son NI MÁS NI MENOS que otro tipo de dato como lo son los números, cadenas, etc
*/

/*
    Tomar una funcion y hacer que corra su código se llama "invocación" o "ejecución"
    f(2)

    Referenciar al código de una función sin hacer que corran las líneas se le llama "declaración" de la funcion

    Los números
    Los strings
    Los verdaderos o los falsos
    Y las funciones

    Todos son tipos de datos válidos que se pueden guardar dentro de una variable
*/

/*
    Funcion Definida (tambien llamada declarada):
        1. Usa la palabra clave "function"
        2. Nos "ahorra" el paso de definir una variable con una funcion adentro
        3. Su sintaxis es:

        function <nombreFuncion>(<parametros>) {
            <codigo>
        }

        4. Su mínima expresión es:

        function <nombreFuncion>(){}
*/

function f(x) {
    return x * 2 + 1
}

function duplicar(numero) {
    return numero * 2
}

/*
    Funciones Flecha
        1. Utilizan el llamado "operador flecha" =>
        2. NO ahorran el paso de definir una variable. Se debe hacer manualmente
        3. Su sintaxis básica es la siguiente:

        (<parametros>) => {
            <codigo>
        }

        4. Su minima expresion es () => {}
*/

let numero = 3
let palabra = "hola"
let booleano = true

const triplicar = (numero) => { return numero * 3; }

/*
    Funciones Flecha con retorno implícito
        1. Son funciones flecha comúnes las cuales fueron "compactadas"
        2. Cualquier funcion flecha se puede "compactar" a este tipo para ahorrar espacio y mejorar legibilidad del codigo
        3. Si SÓLO se recibe un parámetro (y SÓLO 1), entonces se pueden borrar los paréntesis
        4. Si el código SÓLO consiste en devolver algo (poner un return de alguna cosa), entonces se pueden borrar:
            a. Las llaves
            b. La palabra "return"
*/

const cuadriplicar = numero => numero * 4

const triplicarVariables = (x, y) => x * y

const saludar = mensaje => {
    console.log("Hola tu mensaje es")
    console.log(mensaje)
}

// ****************************************************** OBJETOS ******************************************************

/*
    Para guardar más de un dato en una variable, tenemos 2 soluciones;
        1. Objetos
        2. Arrays (Vectores)

    Los objetos son una COLECCIÓN DE DATOS que utilizan el sistema CLAVE:VALOR

    Los objetos NO SON NI MÁS NI MENOS QUE OTRO TIPO DE DATO (como los numeros, booleanos, funciones, etc)
    Los objetos guardan CUALQUIER TIPO DE DATO dentro suyo

    ¿Cómo se ve un objeto?
    Su mínima expresión es la siguiente
    {}

    NO SE DEBE CONFUNDIR CON LA FUNCION FLECHA
    () => {}

    Los objetos son una colección de *DUPLAS* separadas por comas
    Las "duplas" separadas entre comas se llaman

    clave:valor

    La "clave" simboliza el nombre del atributo
    El "valor" simboliza el valor del atributo

    Si nosotros guardamos una funcion dentro de un objeto, entonces la vamos a llamar "método"
*/

const helloWorld = () => { console.log("Hola mundo") }

const persona = {
    nombre: "Matias",
    apellido: "Zuran",
    edad: 21,
    saludar: helloWorld,

    mascota: {
        edad: 4,
        nombre: "Pancho",
        especie: "Perro",
        saludar: () => { console.log("Guau guau") }
    },

    devolverObjeto: () => {
        return {
            mensaje: "Llegaste"
        }
    },

    comidasFavoritas: ["Milanesas", "Empanadas de Humita", "Arroyaditos de JQ"]
}

/*
    ¿Cómo usamos los objetos?
    Si nosotros queremos extraer un valor de CUALQUIER objeto, debemos hacer

    objeto.clave

    Recordar que para ejecutar funciones se debe agregar paréntesis
*/

// ****************************************************** ARRAYS ******************************************************
/*
    Los arrays, al igual que los objetos, son una colección de datos pero utilizan un sistema distinto a clave:valor
    Los arrays son una colección de datos que utilizan el sistema INDEXACIÓN

    Generalmente, un índice (para uso cotidiano) nos indica la posición de algo determinado en una lista de cosas
    Acá es lo mismo

    La mínima expresión del array es la siguiente:
    []

    Los objetos, por naturaleza de su sistema, eran duplas separadas por comas
    Los arrays no tienen duplas, por lo que sólo serán datos "sueltos" separados por comas

    Los arrays, por naturaleza, toman en cuenta LA POSICIÓN EN LA CUAL SE GUARDÓ EL DATO

    En los arrays, la primera posición SIEMPRE es 0
*/

const nuevoArray = [1, 2, 3, 4, 5, persona]

const abecedario = ["a", "b", "c", "d", "e"]

/*
    ¿Cómo se usa un array?

    array[posicion]

    abecedario[0] == "a"
*/

// ****************************************************** MÉTODOS DE ARRAYS ******************************************************

const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 16 },  // Menor de edad
    { nombre: "Ana", apellido: "Gómez", edad: 25 },  // Mayor de edad
    { nombre: "Carlos", apellido: "Martínez", edad: 13 }, // Menor de edad
    { nombre: "Laura", apellido: "Díaz", edad: 30 },   // Mayor de edad
    { nombre: "Pedro", apellido: "Lopez", edad: 17 },  // Menor de edad
    { nombre: "Sofía", apellido: "Pérez", edad: 22 }, // Mayor de edad
    { nombre: "Luis", apellido: "Fernández", edad: 19 }, // Mayor de edad
    { nombre: "Elena", apellido: "Sánchez", edad: 12 }  // Menor de edad
];

// array.forEach

/*
    El array.forEach es un método de todos los arrays

    Este método no devuelve nada

    Este método no modifica al array original

    Este método recibe una FUNCIÓN FLECHA como único parámetro () => {}

        a) La sub-función flecha violeta recibe un parámetro que simboliza el "elemento actual"
           Este parámetro puede tener cualquier nombre. Generalmente lo llamaremos "elemento"

        b) La sub-función flecha violeta no necesita devolver nada necesariamente

    El array.forEach sirve para pasar todos los elementos de un array por la funcion flecha violeta
    Los elementos del array irían donde va el parámetro "elemento"
*/

const numeros = [0, 1, 2, 3, 4, 5]

personas.forEach(
    elemento => { 
        //console.log(elemento.nombre) 
    }
)

// array.filter

/*
    El array.filter es un método de todos los arrays

    Este método DEVUELVE UN NUEVO ARRAY FILTRADO

    Este método no modifica al array original
    
    Este método recibe una FUNCIÓN FLECHA como único parámetro () => {}

        a) La sub-función flecha violeta recibe un parámetro que simboliza el "elemento actual"
           Este parámetro puede tener cualquier nombre. Generalmente lo llamaremos "elemento"

        b) La sub-función flecha DEBE devolver un truthy o un falsy (generalmente gracias a comparadores)
           Si la función violeta devuleve un truthy para algún elemento, entonces no pasa nada
           Si la función violeta devuelve un falsy para algún elemento, ese elemento no aparecerá en el array 
           que se devuelve
*/

const arrayDevueltoFiltrado = numeros.filter(
    elemento => elemento > 3
)

const personasFiltradas = personas.filter(
    (persona) => { return persona.edad < 18 }
)

const familiaPerez = personas.filter(
    elemento => elemento.apellido == "Pérez"
)

// array.map

/*
    El array.map es un método de todos los arrays

    Este método DEVUELVE UN NUEVO ARRAY CON TODOS SUS ELEMENTOS TRANSFORMADOS

    Este método no modifica al array original
    
    Este método recibe una FUNCIÓN FLECHA como único parámetro () => {}

        a) La sub-función flecha violeta recibe un parámetro que simboliza el "elemento actual"
           Este parámetro puede tener cualquier nombre. Generalmente lo llamaremos "elemento"

        b) La sub-función flecha DEBE devolver cualquier cosa
           Lo que devuelva la función va a tomar el lugar del elemento en el nuevo array
*/

const numerosMapeados = numeros.map(
    numero => numero * 2
)

const arrayNombres = personas.map(
    personaActual => personaActual.nombre
)

/*
    Si queremos que la funcion flecha de retorno implícito devuelva un nuevo objeto, entonces este
    debe ir entre paréntesis
*/

const personasPocaInfo = personas.map(
    elemento => ({nombre: elemento.nombre, edad: elemento.edad})
)

// elemento => {}
// {}