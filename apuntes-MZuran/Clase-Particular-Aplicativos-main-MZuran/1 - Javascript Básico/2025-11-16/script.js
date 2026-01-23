const miArray = ["a","b","c","d"]

// DEFINICIÓN DE FUNCIÓN: Sin paréntesis
// INVOCACIÓN DE FUNCIÓN: Con paréntesis

// array.push()
/*
    Es un método de arrays que recibe por parámetro un nuevo elemento
    Ese elemento recibido será añadido al último lugar de la lista

    Devuelve el nuevo largo (length) del array
*/

miArray.push("e")

// array.pop()
/*
    Es un método de arrays que NO recibe ningún parámetro

    Este método extrae el último elemento del array y lo devuelve
*/

// array.map()
/*
    Es un método de arrays que recibe un parámetro llamado "callback"
    Es un método de arrays que DEVUELVE un nuevo array usando los elementos originales y el callback

    El método array.map NO MODIFICA EL ARRAY ORIGINAL, sino que crea una copia modificada del original

        La función callback debe recibir un parámetro que representa a UN elemento de la lista
        La función callback debe devolver alguna otra cosa para reemplazar el elemento en la copia del array
*/

/*
    Un "callback" es una función que se envía por parámetro a otra función
    Cuando enviamos un callback por parámetro, siempre enviamos la referencia (sin paréntesis) o una función flecha
*/

const arrayNumeros = [15,16,17,18,19,20]

function duplicar(x) {
    return 2*x
}

arrayNumeros.map(duplicar)
arrayNumeros.map( (elemento) => { return elemento*2 } )
arrayNumeros.map( elemento => elemento*2 )

// array.forEach()
/*
    Es un método que funciona igual que el array.map, pero no devuelve nada
    Se usa cuando queremos recorrer todo un array pero sin necesariamente transformarlo

        El callback que recibe, ya que el forEach no transforma el array, no debe (necesariamente) devolver nada
*/

// Queremos calcular la suma del arrayNumeros
let sumatoria = 0

arrayNumeros.forEach(
    e => { sumatoria = sumatoria + e }
)

const promedio = sumatoria / arrayNumeros.length

// array.filter()
/*
    array.filter() es un método de arrays que recibe un callback y devuelve otro nuevo array (igual que el map)
    NO MODIFICA EL ARRAY ORIGINAL

        El callback recibido por el .filter recibe un parámetro que representa a UN elemento de la lista (igual que el map)
        El valor que devuelve el callback hace 1 de 2 cosas:

            1) Si el valor es TRUTHY, entonces el elemento actual va a aparecer en el nuevo array
            2) Si el valor es FALSY, entonces el elemento actual NO va a aparecer en el nuevo array
*/

function isEven(number) {
  return number % 2 === 0;
}

const numerosFiltrados = arrayNumeros.filter( isEven )

const numerosFiltrados2 = arrayNumeros.filter(
    (e) => { return e >= 18 }
)

console.log(miArray)


// EJERCICIO

const personas = [
  { nombre: "Ana", edad: 17, notas: [78, 92, 85], promedio: "Desconocido" },
  { nombre: "Luis", edad: 22, notas: [60, 73, 88, 95], promedio: "Desconocido" },
  { nombre: "María", edad: 15, notas: [91, 87], promedio: "Desconocido" },
  { nombre: "Carlos", edad: 30, notas: [55, 62, 70, 80, 90], promedio: "Desconocido" },
  { nombre: "Sofía", edad: 19, notas: [100, 98, 95], promedio: "Desconocido" }
];

// Consigna
// array.filter()
/*
    Usando filter, filtrar a aquellos alumnos que sean mayores de edad
    Guardar el nuevo array en una variable llamada alumnosMayores
*/

const alumnosMayores = personas.filter(
    (objetoPersona) => { return objetoPersona.edad >= 18 }
)

// array.forEach()
/*
    Usando forEach, transformar el array para que el promedio de cada persona refleje el promedio de las notas
    Guardar el nuevo array en una variable llamada personasMapeadas
*/

const objetoTest = { nombre: "Matias" }

personas.forEach(
    (objetoPersona) => {

        // 1- Necesitamos calcular el promedio de las notas de este objetoPersona
        let sumatoria = 0

        objetoPersona.notas.forEach(
            (nota) => { sumatoria = sumatoria + nota }
        )

        const promedioCalculado = sumatoria / objetoPersona.notas.length

        // 2- Necesitamos guardar el promedio calculado adentro de la clave promedio de nuestro objetoPersona
        objetoPersona.promedio = promedioCalculado
    }
)