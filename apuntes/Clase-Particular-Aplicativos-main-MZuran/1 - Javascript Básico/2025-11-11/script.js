/*
array.push()

    Es un método que recibe un elemento y lo mete al final del array
    Devuelve el nuevo largo de la lista

array.pop()

    Es un método que no recibe nada y quita el último elemento de la lista
    Devuelve el elemento eliminado

array.map()

    Es un método que recibe como parámetro un callback

        El callback recibe como parámetro un elemento de la lista
        Generalmente solemos llamar al parámetro "elemento"

        El callback SIEMPRE DEBE RECIBIR UN ELEMENTO
        y SIEMPRE DEBE DEVOLVER ALGÚN OTRO ELEMENTO

    Lo que hace el map es tomar el callback y hacer que todos los elementos
    de la lista sean enviados como parametro al callback uno por uno

    Devuelve una nueva lista con los elementos después de haberlos pasado
    por el callback

    IMPORTANTE: NO MODIFICA LA LISTA ORIGINAL, SINO QUE CREA UNA COPIA


    array.forEach()
    array.filter()
*/

const numeros = [1, 2, 3, 4, 5]

// Hacer una función que recibe un número y devuelve el doble del número
function doble(numero) {
    return (numero * 2)
}

const arrayMapeado = numeros.map(doble)

// Hacer un nuevo mapeo para TRIPLICAR LOS NÚMEROS
// sin definir una función fuera del mapeo
// el callback puede ser una función flecha
const segundoArrayMapeado = numeros.map(
    elemento => elemento * 3
)

