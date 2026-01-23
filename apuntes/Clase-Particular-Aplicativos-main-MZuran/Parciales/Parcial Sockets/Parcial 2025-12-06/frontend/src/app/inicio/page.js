"use client"

import React from 'react'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Page() {

    const [userName, setUserName] = useState("")
    const [alumnoId, setAlumnoId] = useState(0)

    const router = useRouter()

    function changeHandlerUsername(e) {
        // e.target.value
        setUserName(e.target.value)
    }

    function changeHandlerAlumnoId(e) {
        setAlumnoId(e.target.value)
    }

    function clickHandlerTareas() {
        router.push(`/tareas?username=${userName}&alumnoId=${alumnoId}`)
    }

    return (
        <div>
            <h1>Inicio</h1>

            <input
                type={"text"}
                onChange={changeHandlerUsername}
                name={"username"}
            ></input>

            <input
                type={"number"}
                onChange={changeHandlerAlumnoId}
                defaultValue={0}
                name={"alumnoId"}
            ></input>

            <button onClick={clickHandlerTareas} >Ir a tareas</button>

            { userName.length < 3 && <p>Error: El mensaje debe tener por lo menos 3 caracteres</p> }

        </div>
    )
}

export default Page
