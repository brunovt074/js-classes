/*
    Las variables en react se pueden dividir en 2 tipos:
    1) Las variables comunes (let, const)
    2) Las variables de estado

    Para crear una variable de estado, se debe utilizar un "hook" llamado useState
    Un "hook" es simplemente una funcion que modifica el comportamiento de algun componente

    useState es una funcion que viene instalada dentro del paquete de react y para usarse se debe importar

    useState recibe por parámetro un valor inicial y devuelve un array que contiene una variable y una funcion
    Para usarse, se hace de la siguiente forma:

        Vamos a definir una variable de estado llamada "contador"
        Vamos a definir una función asociada a la variable de estado
        El contador va a comenzar en 0

        const [contador, setContador] = useState(0)

    Las variables de estado NO PUEDEN USAR asignación
        El operador asignación es el =
        Por ejemplo x = 1

    En su lugar, las variables de estado deben usar el setter:
        setContador(1)
*/

import { useState } from "react"

export default function EjercicioUseState() {

    const [contador, setContador] = useState(0)

    console.log("Me recargue")
    
    const sumaHandler = () => {
        const suma = contador + 1
        setContador(suma)
    }

    const restaHandler = () => {

        if (contador >= 1) {
            const suma = contador - 1
            setContador(suma)
        }
        
    }

    return (
    <>
    <h1>Ejercicio Use State</h1>
    <p>El valor de mi contador es {contador}</p>

    <button onClick={sumaHandler} >+1</button>
    <button onClick={restaHandler} >-1</button>
    </>
    )
}