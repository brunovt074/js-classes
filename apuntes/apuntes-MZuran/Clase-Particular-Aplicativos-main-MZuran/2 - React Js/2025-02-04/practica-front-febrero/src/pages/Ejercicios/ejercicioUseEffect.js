/*
    useEffect al igual que el useState es un hook que viene dentro de react

    useEffect sirve para la **EJECUCION CONTROLADA DE UNA FUNCIÓN**

    Es una funcion que no devuelve nada y recibe 2 parámetros:
        1) Una función flecha. Llamada "efecto" o "callback"
        2) Un array. Llamado "Array de dependencias" o "dependencias"

    Función flecha: () => {}
    Array: []

    El useEffect ejecuta la función flecha (callback) CADA VEZ QUE SE LO INDIQUE SUS DEPENDENCIAS

    Importante: 
        Un useEffect con dependencias vacías sólo ejecutará su efecto cuando el componente 
        aparezca en pantalla por primera vez
*/

import { useEffect, useState } from "react"

export default function PaginaUseEffect() {

    const [contador, setContador] = useState(0)
    const [contadorCambios, setContadorCambios] = useState(0)

    function sumarUno() {
        setContador(contador + 1)
    }

    function cambiar() {
        setContadorCambios(contadorCambios + 1)
    }

    useEffect(
        () => {
            console.log("Se ejecutó el callback/efecto")
        },
        [contador, contadorCambios]
    )

    return (
    <>
    <h1>Ejericio useEffect</h1>
    <p>El valor del contador es {contador}</p>
    <p>El valor del contador de cambios es {contadorCambios}</p>
    <button onClick={sumarUno} >+1</button>
    <input type="checkbox" onChange={cambiar}></input>
    </>
    )
}