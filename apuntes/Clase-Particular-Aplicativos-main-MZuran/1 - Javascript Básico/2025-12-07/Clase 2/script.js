const arrayPrueba = ["a", "b", "c"]

const objetoPrueba = {
    nombre: "Matias",
    edad: 22
}

// ******************************* MÉTODOS DE ARRAYS *******************************
/*
    "Todo en javascript es un objeto"
    Los arrays internamente son un caso especial de objetos, por lo que tienen acceso
    a varias duplas de clave:valor en las que se detacan

    array.length    -   Nos dice la cantidad de elementos del array
    array.pop()
    array.push()
    array.forEach()
    array.filter()
    array.map()
*/

// ******************************* ARRAY.PUSH *******************************
/*
    array.push() es un método que nos sirve para ingresar o "extender" arrays.

    Recibe:     Un nuevo elemento el cual pondrá al final de la lista

    Devuelve:   El nuevo array.length después de añadir el elemento
*/

// ******************************* ARRAY.POP *******************************
/*
    array.pop() es un método que nos permite quitar el último elemento de
    un array.

    Recibe:     Nada

    Devuelve:   El último elemento eliminado del array
*/

// ******************************* ARRAY.FOREACH *******************************
/*
    array.forEach() es un método que nos permite ejecutar de forma cíclica una función

    Recibe:     Callback

    Devuelve:   Nada

    Un callback es una función que se envía por parámetro a otra función.
    Generalmente en forma de función flecha o con el nombre de la variable de la 
    función sin el paréntesis.

    (Callback) Recibe:      Recibe un parámetro que va a ser llenado por un elemento
                            del array. Generalmente lo llamamos "elemento".

                            El callback luego se ejecutará para todos los elementos del
                            array.

    (Callback) Devuelve:    Nada


    const callback = () => {}

    [1,2,3,4,5]

    [callback(1),callback(2),callback(3),callback(4),callback(5)]
*/

const notas = [6,7,8,9,10]

let sumatoria = 0

notas.forEach(
    (elemento) => {
        sumatoria = sumatoria + elemento
    }
)

const promedio = sumatoria / notas.length

//console.log("El promedio de las notas es "+ promedio)

// ******************************* ARRAY.MAP *******************************
/*
    El array.map es otro método que ejecuta un callback de manera cíclica a todos
    los elementos de un array.

    La diferencia con el .forEach es que el método array.map devuelve un NUEVO ARRAY
    que es el resultado de aplicar el callback a todos los elementos.

    EL MÉTODO MAP NO MODIFICA EL ARRAY ORIGINAL
    LO QUE HACE ES CREAR UN NUEVO ARRAY BASADO EN EL ORIGINAL

    Recibe:     Callback

    Devuelve:   Devuelve un nuevo array después de aplicar el callback a los elementos.

    (Callback) Recibe:      Recibe un parámetro que va a ser llenado por un elemento
                            del array. Generalmente lo llamamos "elemento".

                            El callback luego se ejecutará para todos los elementos del
                            array.

    (Callback) Devuelve:    Debe devolver algo. (Cualquier cosa)
                            La devolución de callback(elemento) va a tomar el lugar
                            del elemento original en el nuevo array.
*/

const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

// Usando array.map, queremos multiplicar a todos estos elementos por 3

/*
    Sintaxis abreviada de las funciones flecha:

    1)  Si la función SÓLO RECIBE UN PARÁMETRO, entonces podemos borrar los paréntesis
    
    2)  Si la única línea de código de la función es un return,
        podemos borrar la palabra "return" y los corchetes
*/

const arrayNumerosMapeadosTriple = arrayNumeros.map(
    elementoNumerico => elementoNumerico * 3
)

const arrayNumerosMapeadosCuadruple = arrayNumeros.map(
    (elementoNumerico) => { return elementoNumerico * 4 }
)

const duplicar = (x) => { return 2*x }
const arrayNumerosMapeadosDoble = arrayNumeros.map( duplicar )

// ******************************* ARRAY.FILTER *******************************
/*
    El array.filter es otro método que ejecuta un callback de manera cíclica a todos
    los elementos de un array.

    EL MÉTODO FILTER NO MODIFICA EL ARRAY ORIGINAL
    LO QUE HACE ES CREAR UN NUEVO ARRAY BASADO EN EL ORIGINAL

    Recibe:     Callback

    Devuelve:   Devuelve un nuevo array filtrado

    (Callback) Recibe:      Recibe un parámetro que va a ser llenado por un elemento
                            del array. Generalmente lo llamamos "elemento".

                            El callback luego se ejecutará para todos los elementos del
                            array.

    (Callback) Devuelve:    True / False
                            Truthy / Falsy

                            Si callback(elemento) == true:
                                El elemento aparecerá en el nuevo array filtrado

                            Si callback(elemento) == false:
                                El elemento NO aparecerá en el nuevo array filtrado
*/

// Crear un nuevo array que sólo incluya las personas mayores de edad
// usando array.filter

const personasMayoresFiltradas = personas.filter(
    elementoObjetoPersona => elementoObjetoPersona.edad >= 18
)