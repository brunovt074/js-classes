"use client"

import React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tarea } from '@/components/Tarea'

function Page() {

    const router = useRouter()

    const [username, setUsername] = useState("")
    const [alumnoId, setAlumnoId] = useState(0)

    function changeHandlerUsername(e) {
        setUsername(e.target.value)
    }

    function changeHandlerAlumnoId(e) {
        setAlumnoId(e.target.value)
    }

    function clickHandlerTareas() {
        router.push("/tareas?username=" + username + "&alumnoId=" + alumnoId)
    }

    return (
        <div>
            <h1>Inicio</h1>

            <p>La variable de estado es {username}</p>
            <p>El largo del texto es: {username.length}/200</p>

            <input
                type={"text"}
                onChange={changeHandlerUsername}
            ></input>

            <input
                type={"number"}
                onChange={changeHandlerAlumnoId}
            ></input>

            <button onClick={clickHandlerTareas} >Ir a Tareas</button>

            {
                username.length < 3 && <p>Error: El nombre de usuario tiene menos de 3 caracteres</p>
            }

            <Tarea contador={username.length} />

        </div>
    )
}

export default Page
