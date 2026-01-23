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

/*
    1)  Definir una función calcularPromedios(arrayNumerico)
        Esta función recibe un array de números y devuelve el promedio del array

    2)  Utilizando array.map, mapear a las personas de modo que tengamos un nuevo array
        que contenga los datos:

        { nombreCompleto, promedioNotas }

    3)  Filtrar el array del ejercicio anterior para obtener aquellos promedios que 
        promocionaron

    4)  Utilizando el .forEach anunciar por consola todos los alumnos promocionados con el mensaje:
        "El <alumno> promocionó con la nota <promedio>"
*/

//console.clear()

// 1)
// Calcular el promedio del array y devolverlo
function calcularPromedios(arrayNumerico) {

    let sumatoria = 0
    const cantidad = arrayNumerico.length

    arrayNumerico.forEach(
        (numero) => { sumatoria = sumatoria + numero }
    )

    const promedio = sumatoria / cantidad

    return promedio
}

// 2)
const personasMapeadas = personas.map(

    (objetoPersona) => {

        // Debemos crear un nombre completo y un promedio de las notas de el objetoPersona
        const nombreCompleto = objetoPersona.nombre + " " + objetoPersona.apellido
        const promedio = calcularPromedios(objetoPersona.notas)

        return { nombreCompleto: nombreCompleto, promedioNotas: promedio }
    }

)

// 3)
const personasFiltradas = personasMapeadas.filter(

    (objetoPersona) => {
        // Debemos devolver "True" o "False" dependendiendo de si se llegó a promocionar
        return objetoPersona.promedioNotas >= 8
    }

)

// 4)
personasFiltradas.forEach(

    (objetoPersona) => {

        const nombre = objetoPersona.nombreCompleto
        const promedio = objetoPersona.promedioNotas

        console.log("El alumno " + nombre + " promocionó con la nota " + promedio)
    }

)