// Hace las resoluciones acá

console.log("Esta es la consola del programador.")
console.log("Mostra los resultados por acá")

/* --------------------------- EJERCICIO 1 --------------------------- */

const personasMapeadas = personas.map(
    elemento => ({ nombre: elemento.nombre, edad: elemento.edad })
)

const personasFiltradas = personasMapeadas.filter(
    persona => persona.edad >= 18
)

personasFiltradas.forEach(
    elemento => { console.log(`${elemento.nombre} tiene ${elemento.edad} años`) }
)

/* --------------------------- EJERCICIO 2 --------------------------- */

productos.forEach(
    elemento => {
        console.log(`${elemento.nombre} tiene un descuento de $${elemento.precio * elemento.descuento()}`)
    }
)

const productosMapeados = productos.map(
    producto => (
        {
            nombre: producto.nombre,
            precioAjustado: producto.precio * (1 - producto.descuento())
        })
)

/* --------------------------- EJERCICIO 3 --------------------------- */

const calcularPromedio = (arrayNotas) => {

    let sumaTotalDeNotas = 0

    arrayNotas.forEach(
        (nota) => { sumaTotalDeNotas = sumaTotalDeNotas + nota }
    )

    return sumaTotalDeNotas / arrayNotas.length
}

const estudiantesMapeados = estudiantes.map(
    alumno =>  ({ nombre: alumno.nombre, promedio: calcularPromedio(alumno.notas) })
)

/* --------------------------- EJERCICIO 4 --------------------------- */