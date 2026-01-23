/*
    El useEffect, al igual que el useState es un hook que trae react
    El 99.999% de las  veces que usemos useEffect, tambien vamos a usar useState

    El useEffect es una funcion que no devuelve nada
    No tiene sentido asignarla a una variable

    El useEffect recibe 2 parametros:
        1) Una funcion flecha. Normalmente llamada "el efecto" o "el callback"
        2) Un array. Dentro de este array podemos guardar VARIABLES DE ESTADO. Este array se llama "Array de dependencias"

    El useEffect se usa para la *EJECUCION CONTROLADA DE UNA FUNCION*
    El useEffect va a ejecutar el efecto según lo indique el array de dependencias;

        a. Si el array de dependencias está vacío, el efecto SÓLO SE EJECUTA UNA ÚNICA VEZ CUANDO CARGA EL COMPONENTE
        b. Si el array de dependencias tiene variables de estado, el efecto se ejecuta tanto al principio como cuando la variable o variables de las cuales depende, cambian
*/

import { useEffect, useState } from "react"

export default function PaginaEjUseState() {

    const [contador, setContador] = useState(0)
    const [contadorDependencia, setContadorDependencia] = useState(0)

    useEffect(
        () => {
            console.log("Me ejecuto al principio o cuando mis dependencias cambian")
        },  // El efecto
        [contadorDependencia]  // El array de dependencias
    )

    function plusHandler() {
        setContador(contador + 1)
    }

    function plusHandler2() {
        setContadorDependencia(contadorDependencia + 1)
    }

    return (
        <>
            <h1>Ejercicio de useEffect</h1>
            <p>El valor de mi contador independiente de estado es {contador}</p>
            <p>El valor de mi contador dependiente de estado es {contadorDependencia}</p>

            <button onClick={plusHandler} >+1 Normal</button>
            <button onClick={plusHandler2} >+1 Dependencia</button>
        </>
    )
}