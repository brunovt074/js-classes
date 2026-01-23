import { useState } from "react"

/*
    Generalmente, si asociamos una funcion a un botón o a un componente de modo que
    se ejecuten "cuando pase algo", le solemos llamar "handler"

    Si nosotros queremos pasar por prop una funcion handler o algo similar
    Se debe usar la DECLARACION de la funcion.
    NO se debe usar la EJECUCION.


*/

export default function PaginaEjUseState() {

    const [contador, setContador] = useState(0)
    let contadorNormal = 0

    function plusHandler() {
        contadorNormal = contadorNormal + 1
        setContador(contador + 1)
    }

    function restaHanlder() {
        if (contador >= 1) {
            contadorNormal = contadorNormal - 1
            setContador(contador - 1)
        }
    }

    return (
    <>
    <h1>Ejercicio de useState</h1>
    <p>El valor de mi contador de estado es {contador}</p>
    <p>El valor de mi contador normal es {contadorNormal}</p>

    <button onClick={plusHandler} >+1</button>
    <button onClick={restaHanlder} >-1</button>
    </>
    )
}