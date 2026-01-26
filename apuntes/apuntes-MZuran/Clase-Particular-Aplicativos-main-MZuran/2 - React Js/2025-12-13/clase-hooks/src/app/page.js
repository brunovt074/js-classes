"use client"

import { useRouter } from "next/navigation" //  Asegurarse de que venga desde next/navigation

/*
    useRouter es un hook
    1.  Se debe importar
    2.  Debemos usar el "use client"

    useRouter es una función (hook) con las siguientes características;
    1.  useRouter no recibe parámetros
    2.  useRouter devuelve un objeto llamado router

    const router = useRouter()
    El objeto router tiene ciertos métodos

    Un método es una función guardada adentro de un objeto
    
    Los métodos que vamos a aprender del objeto router son los siguientes:

    router.refresh()
        No recibe nada
        No devuelve nada
        Recarga la página actual

    router.back()
        No recibe nada
        No devuelve nada
        Redirecciona al usuario un lugar para atrás en el historial

    router.forward()
        No recibe nada
        No devuelve nada
        Redirecciona al usuario un lugar para adelante en el historial (si existe)

    router.push()
        Recibe una nueva ruta o url
        No devuelve nada
        Redirecciona al usuario a la nueva ruta o url
*/

export default function Home() {

    const router = useRouter()

    function clickHandlerSearchParams() {
        const nombre = prompt("Ingrese su nombre")
        const edad = prompt("Ingrese su edad")

        const string1 = "/ejemploUseSearchParams?nombre=" + nombre + "&edad=" + edad
        const string2 = `/ejemploUseSearchParams?nombre=${nombre}&edad=${edad}`

        router.push(string1)
    }

    return (
        <>
            <h1>Home y useRouter</h1>

            <button onClick={ () => { router.push("/ejemploUseState") } } > Ir al ejemplo de useState </button> <br/>
            <button onClick={ () => { router.push("/ejemploUseEffect") } } > Ir al ejemplo de useEffect </button> <br/>
            <button onClick={ () => { router.push("/ejemploConditionalRendering") } } > Ir al ejemplo de conditional rendering </button> <br/>
            <button onClick={clickHandlerSearchParams}>Ir al ejemplo de useSearchParams</button>
        </>
    )
}