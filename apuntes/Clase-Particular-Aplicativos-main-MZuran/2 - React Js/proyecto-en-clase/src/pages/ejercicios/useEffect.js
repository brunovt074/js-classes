/*
    Un useEffect es un hook que viene descargado en el paquete react

    El useEffect es una función que recibe 2 parámetros:
        a. Una función flecha () => {} (que nunca recibe parametros)
        b. Un array []

    El useEffect no devuelve nada (por lo general)

    La función flecha la vamos a llamar el "efecto"
    Y el array lo vamos a llamar el "array de dependencias"

    Lo que hace el useEffect es ejecutar el efecto tantas veces como indique el array de dependencias
    Si el *estado* de alguna variable dentro del array de dependencias cambia, se ejecuta el efecto

    Importantísimo:
        Si el array de dependencias está vacío, entonces el efecto sólo se ejecuta cuando el componente carga
        por primera vez

*/

import { useEffect, useState } from "react"

export default function EjercicioUseEffect() {
    const [contador, setContador] = useState(0)

    function sumarUno() {
        setContador(contador + 1)
    }

    // Acá nomás
    useEffect(
        () => {
            console.log("Me ejecuté soy el efecto")
        },   // Efecto
        [contador]          // Array de Dependencias
    )

    return (
        <>
            <h1>Ejercicio Use Effect</h1>
            <p> El valor actual de nuestro contador es {contador}</p>

            <button onClick={sumarUno} >+1</button>
        </>
    )
}