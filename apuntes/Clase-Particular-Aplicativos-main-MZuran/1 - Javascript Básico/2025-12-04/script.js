const arrayEjemplo = ["a","b","c","d"]

const objetoEjemplo = {
    nombre: "Matias",
    edad: 22
}


/*
    Métodos de arrays

    Los objetos son duplas de clave:valor separadas por comas entre llaves
    Para extraer información de un objeto, le concatenamos un punto y una clave
    objetoEjemplo.nombre == "Matias"

    Los arrays son listas de datos ordenados separados por comas entre corchetes
    Para extraer información de un array, le concatenamos una posición entre corchetes
    arrayEjemplo[1] == "b"
*/

/*
    array.push()

    Función:
        Añade un elemento al fondo de una lista. Por ejemplo si la lista tiene 3 elementos, el cuarto será el elemento añadido.

    Parámetros recibidos:
        Recibe el elemento que se va a añadir.

    Retorno:
        Devuelve el nuevo largo de la lista.
*/

/*
    array.pop()

    Función:
        Elimina el último elemento de una lista. Acorta la lista por 1 unidad.

    Parámetros recibidos:
        Nada.

    Retorno:
        Devuelve el elemento eliminado.
*/

/*
    array.forEach()

    Parámetros recibidos:
        callback

    Función:
        array.forEach ejecutará el callback 1 vez para cada elemento del array.

    Retorno:
        Nada.

        (Callback) Parámetros recibidos:
            Recibe por parámetro un elemento que simboliza el "elemento actual" de la lista.
            Puede tener cualquier nombre.

        (Callback) Función:
            Es una función que se va a ejecutar para todo elemento del array.
            Si el array tiene 5 elementos, el callback se ejecuta 5 veces.

        (Callback) Retorno:
            Nada.
*/

arrayEjemplo.forEach(
    (elemento) => {
        console.log("El elemento actual es", elemento)
    }
)

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

let suma = 0

arrayNumeros.forEach(
    (elemento) => {
        suma = suma + elemento
    }
)

console.log("El promedio es", suma/arrayNumeros.length)

/*
    array.filter()

    Parámetros recibidos:
        callback

    Función:
        array.filter filtrará elementos del array de modo que quede la misma cantidad o menos
        EL ARRAY ORIGINAL NO ES MODIFICADO SINO QUE SE CREA UN NUEVO ARRAY

    Retorno:
        Devuelve un nuevo array filtrado.

        (Callback) Parámetros recibidos:
            Recibe por parámetro un elemento que simboliza el "elemento actual" de la lista.
            Puede tener cualquier nombre.

        (Callback) Función:
            Es una función que se va a ejecutar para todo elemento del array.
            Si el array tiene 5 elementos, el callback se ejecuta 5 veces.

        (Callback) Retorno:
            True o False.
            Si el retorno del callback es true, entonces el elemento estará en el array filtrado.
            Si el retorno del callback es false, entonces el elemento NO estará en el array filtrado.
*/

// Filtrar el array de personas para que sólo salgan aquellas mayores de edad

const personas = [
  {
    id: 1,
    nombre: "Ana",
    apellido: "García",
    edad: 17,
    comidasFavoritas: ["pizza", "helado", "pasta"]
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Martínez",
    edad: 25,
    comidasFavoritas: ["sushi", "tacos", "ensalada"]
  },
  {
    id: 3,
    nombre: "María",
    apellido: "López",
    edad: 14,
    comidasFavoritas: ["hamburguesa", "fresas", "chocolate"]
  },
  {
    id: 4,
    nombre: "Javier",
    apellido: "Ruiz",
    edad: 32,
    comidasFavoritas: ["pollo al horno", "paella", "ramen"]
  },
  {
    id: 5,
    nombre: "Sofía",
    apellido: "Torres",
    edad: 19,
    comidasFavoritas: ["arepas", "empanadas", "café"]
  }
];

function esMayor(x) {
    return x.edad >= 18
}

const personasMayores1 = personas.filter(esMayor)

const personasMayores2 = personas.filter(
    elemento => elemento.edad >= 18
)

/*
    array.map

    Parámetros recibidos:
        callback

    Función:
        array.map transforma el array original reemplazando todos los elementos por el retorno del callback
        EL ARRAY ORIGINAL NO ES MODIFICADO SINO QUE SE CREA UN NUEVO ARRAY

    Retorno:
        Devuelve un nuevo array transformado

        (Callback) Parámetros recibidos:
            Recibe por parámetro un elemento que simboliza el "elemento actual" de la lista.
            Puede tener cualquier nombre.

        (Callback) Función:
            Es una función que se va a ejecutar para todo elemento del array.
            Si el array tiene 5 elementos, el callback se ejecuta 5 veces.

        (Callback) Retorno:
            El callback puede devolver cualquier cosa.
            Lo que sea que se devuelva va a reemplazar al elemento actual en el nuevo array.
*/

// Reemplazar todos los objetos personas por los nombres

const personasMapeadas = personas.map(
    (elemento) => { return elemento.nombre }
)