/*
    Los imports se utilizan para traer información de otros documentos.
    Por ejemplo componentes o hooks.
    Si usamos cosas de mayor complejidad, añadimos el "use client"
*/

/*
    1.  Deben devolver por lo menos un html vacío entre paréntesisç

    2.  Los componentes se deben exportar
        a.  Los componentes página (de /app/) siempre llevan "export default"
        b.  Los componentes comunes usan "export" o "export default"

    3.  El nombre del componente debe usar PascalCase
*/

/*
    useState nos crea 2 cosas:

    La variable de estado
    La función setter

    Las variables de estado tienen la carecterística de que NO ADMITEN ASIGNACIÓN

    varibleEstado = 1                       //  NO FUNCIONA
    setVariableEstado(1)                    //  SI FUNCIONA

    varibleEstado = variableEstado + 1      //  NO FUNCIONA
    setVariableEstado(variableEstado + 1)   //  SI FUNCIONA
*/

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PaginaInicio() {

    const [username, setUsername] = useState("")
    const [alumnoId, setAlumnoId] = useState(0)

    const router = useRouter()
    // router.push() nos envía a una página nueva

    function changeHandlerUsername(e) {
        // e.target.value
        setUsername(e.target.value)
    }

    function changeHandlerAlumnoId(e){
        setAlumnoId(e.target.value)
    }

    function clickHandlerTareas() {
        router.push("/tareas?username=" + username + "&alumnoId=" + alumnoId)
    }

    return (
    <>
    <h1>Inicio</h1>
    <p>
        El valor de la variable de estado username es: {username} <br/>
        El valor de la variable de estado alumnoId es: {alumnoId}
    </p>

    { username.length < 3 && <p>Error! El nombre de usuario tiene menos de 3 caracteres</p> } 

    <input
        type={"text"}
        onChange={changeHandlerUsername}
    ></input>

    <input
        type={"number"}
        onChange={changeHandlerAlumnoId}
    ></input>

    <button onClick={clickHandlerTareas} >Ir a Tareas</button>
    </>
    )
}