// Metodos de arrays

const objetoEjemplo = { nombre: "Matias" }

// *********************** MÉTODOS DE ARRAYS ***********************

// array.pop()
/*
    El array.pop quita el último elemento de una lista
    Modifica el array original

    Recibe: Nada
    Devuelve: El valor quitado del array
*/

// array.push()
/*
    El array.pop agrega un elemento al último lugar del array
    Modifica el array original

    Recibe: El elemento que va a agregar
    Devuelve: El nuevo largo del array
*/

// array.map()
/*
    El array.map aplica una función a todos los elementos de un array
    Devuelve un nuevo array SIN MODIFICAR EL ARRAY ORIGINAL

    [10, 20, 30, 40, 50]

    [duplicar(10),duplicar(20),duplicar(30),duplicar(40),duplicar(50)]

    Recibe:     Callback (Es una función que se envía por parámetro)

    Devuelve:   Un nuevo array transformado basado en el original

    (Callback) Recibe:  Un parámetro con cualquier nombre. Simboliza el "elemento actual del array"
                        Generalmente lo vamos a llamar "elemento"

    (Callback) Devuelve:  Puede devolver cualquier cosa. Lo que devuelve va a tomar el lugar del elemento actual.
*/


const arrayNumeros = [10, 20, 30, 40, 50]

const duplicar = (x) => { return 2*x }

arrayNumeros                                     //  El original

const arrayMapeado = arrayNumeros.map(duplicar)  //  El nuevo

const arrayPersonas = [
    { nombre: "Luca", apellido: "Barneto"},
    { nombre: "Alex", apellido: "Ogan"},
    { nombre: "Ramiro", apellido: "Molina"},
]

// Queremos un array que sólo contenga el nombre de los objetos
// Queremos un array que sólo contenga el .nombre

const arrayPersonasMapeado = arrayPersonas.map(
    (elemento) => { return elemento.nombre + " " + elemento.apellido }
)