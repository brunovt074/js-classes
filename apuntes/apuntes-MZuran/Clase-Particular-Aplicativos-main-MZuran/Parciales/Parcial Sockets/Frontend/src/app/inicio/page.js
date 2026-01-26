"use client"

//import { useRouter } from "next/router"         // ESTE NO FUNCIONA
import { useRouter, useSearchParams } from "next/navigation"       // SIEMPRE UTILIZAR ESTE

import { useState } from "react"

export default function Home() {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [userName, setUserName] = useState("")
    const [alumnoId, setAlumnoId] = useState("")

    // El objeto router tiene varios métodos
    // Los dos más importantes son:
    // router.push()
    // router.push es un método que recibe un url y redije al userName al url recibalumnoIdo

    const x = { nombre: "Matias", edad: 22 }

    function clickHandlerButton() {

        if (userName.length < 3) {
            alert("Necesita más caracteres")
        } else {
            // Hacer que este push SÓLO suceda cuando userName.length < 3
            router.push("/tareas?username=" + userName + "&alumnoId=" + alumnoId)
        }

    }

    function changeHandleruserName(event) {
        setUserName(event.target.value)
        console.log(event.target.value)
    }

    function changeHandleralumnoId(event) {
        setAlumnoId(event.target.value)
    }

    return (
        <>
            <h1>Página Inicio</h1>

            {userName.length < 3 && <p>Error! El usuario tiene menos de 3 caracteres!</p>}

            <br />

            <input
                type="text"
                onChange={changeHandleruserName}
            ></input>

            <input
                type="text"
                onChange={changeHandleralumnoId}
            ></input>

            <button onClick={clickHandlerButton}>Ir a Tareas</button>
        </>
    )
}