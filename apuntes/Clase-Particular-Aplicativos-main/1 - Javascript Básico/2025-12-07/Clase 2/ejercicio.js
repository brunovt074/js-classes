const personas = [
    {
        nombre: "Carlos",
        apellido: "Ramírez",
        edad: 17,
        comidasFavoritas: ["pizza", "hamburguesa", "tacos"],
        notas: [8, 7, 9, 10]
    },
    {
        nombre: "María",
        apellido: "López",
        edad: 22,
        comidasFavoritas: ["ensalada", "pizza", "sushi"],
        notas: [6, 9, 7, 10]
    },
    {
        nombre: "Javier",
        apellido: "Martínez",
        edad: 15,
        comidasFavoritas: ["tacos", "pasta", "sushi"],
        notas: [5, 8, 6, 7, 9]
    },
    {
        nombre: "Lucía",
        apellido: "Gómez",
        edad: 30,
        comidasFavoritas: ["hamburguesa", "pasta", "ensalada"],
        notas: [10, 9]
    }
];

console.log(personas)

/*
    1)  Definir una función calcularPromedios(arrayNumerico)
        Esta función recibe un array de números y devuelve el promedio del array

    2)  Utilizando array.map, mapear a las personas de modo que tengamos un nuevo array
        que contenga los datos:

        { nombreCompleto, promedioNotas }

    3)  Filtrar el array del ejercicio anterior para obtener aquellos promedios que 
        promocionaron

    4)  Utilizando el .forEach anunciar por consola todos los alumnos promocionados
        El <alumno> promocionó con la nota <promedio>
*/

// Calcular el promedio del array y devolverlo
function calcularPromedios(arrayNotas) {

    //  1.  Sumar todas las notas
    //  2.  Dividir la sumatoria por la cantidad de notas

    let sumatoria = 0

    arrayNotas.forEach(
        (elementoNota) => { sumatoria = sumatoria + elementoNota }
    )

    arrayNotas.length   //  Es la cantidad de elementos que contiene un array

    return sumatoria / arrayNotas.length
}

/*
    Si alguna vez queremos usar la sintaxis abreviada de la función flecha
    para devolver un objeto, debemos encerrar el objeto entre paréntesis para que
    Js no piense que es una función flecha
*/

const personasMapeadas = personas.map(
    elementoObjetoPersona => ({
        nombreCompleto: elementoObjetoPersona.nombre + " " + elementoObjetoPersona.apellido,
        promedioNotas: calcularPromedios(elementoObjetoPersona.notas)
    })
)

const personasFiltradas = personasMapeadas.filter(
    elementoObjetoPersona => elementoObjetoPersona.promedioNotas >= 8
)

personasFiltradas.forEach(
    elementoObjetoPersona => {
        console.log(elementoObjetoPersona.nombreCompleto + " promocionó con la nota " + elementoObjetoPersona.promedioNotas)
    }
)