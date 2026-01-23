


/* 
    Los operadores de comparación son operadores de tipo lógico
    A diferencia de los operadores matemáticos, los operadores de tipo lógico devuelven
    "verdadero" o "falso"


    5 + 6 = 11
    5 > 6 = Falso


    ¿El 5 es igual a "5"?
    No: Comparación estricta

    >= Se escribe "como suena"
    Primero mayor, despues igual

    ==      Comparador débil
    ===     Comparador estricto

    =       El operador asignación, que se usa para meter valores adentro de variables

    variable == 5       Comparamos el valor de variable con el numero 5
    variable = 5        Estamos metiendo el número 5 dentro de variable
*/

/*
    Declaración vs Ejecución de funciones

    Si nosotros queremos EJECUTAR una función, debemos agregar paréntesis

    Si nosotros nos queremos referir a la función en sí, usamos la DECLARACIÓN que no lleva paréntesis
*/
// Ejemplo de función
function funcionNueva(a, b) {
    return a + b
}

//console.log( funcionNueva(2,2) )     // Ejecución
//console.log( funcionNueva )          // Declaración

// Funcion flecha

let funcionFlecha1

funcionFlecha1 = (a, b) => {
    return a+b
}

// Importante
// La mínima expresión de la función flecha
() => {}

// For
for (let i = 0; i <= 10; i = i + 2) {
    //console.log(i)
}

// Expresión mínima del objeto
// Colección de datos que utiliza el sistema clave:valor

function duplicar(numero) {
    console.log(numero*2)
}

function devolverObjeto() {

    return {
        mensaje: "Me encontraste"
    }
}

const persona = {
    nombre:"Matias",
    edad: 22,
    saludar: () => { console.log("Hola") },
    calcular: (numero) => { console.log(numero+1) },
    porDos: duplicar,
    objeto: devolverObjeto,
    mascota: {
        nombre: "Pancho",
        especie: "Perro"
    }
}

/*
    Si nosotros queremos acceder a los valores almacenados dentro de un objeto,
    debemos concatenar el nombre de un objeto y el nombre de una clave con un punto

    miObjeto.edad
*/

// La mínima expresión del array (o vector)

const arraySimple = ["Tomás", "Nicolás", "Emma"]

const arrayComplicado = [
    "String",
    12,
    persona,
    duplicar,
    arraySimple
]