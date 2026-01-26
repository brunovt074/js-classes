/*
    useEffect es un hook que viene con react

    El 99.9999% de las veces, useEffect se usa con useState

    useEffect es un hook que no devuelve nada
    useEffect es un hook que recibe 2 parámetros:

        1) Una función flecha. A esta funcion flecha le vamos a llamar "el efecto"
        2) Un array. A este array lo vamos a llamar el "array de dependencias"

    El efecto y todos los callbacks son funciones que se ejecutan una vez se cumpla cierta condición

    Si un useEffect tiene un array de dependencias vacío, entonces el efecto se va a ejecutar
    UNA SÓLA VEZ CUANDO EL COMPONENTE CARGUE POR PRIMERA VEZ
*/
import { useEffect, useState } from "react"

export default function EjercicioUseEffect() {

    const [contador, setContador] = useState(0)

    function buttonHandler1() {
        setContador(contador + 1)
    }

    useEffect(
        () => {
            
            if (contador >= 10) {
                setContador(0)
            }


        }, // El efecto
        [contador] // El array de dependencias
    )

    return (
        <>
            <h1>EjercicioUseEffect</h1>
            <p> El valor del contador de estado es {contador}</p>
            <button onClick={buttonHandler1} >+1</button>
        </>
    )
}