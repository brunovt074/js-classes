"use client"

import React from 'react'

import { Tarea, TareaHistorial } from '@/components/Tarea'
import NuevaTarea from '@/components/NuevaTarea'

import { useSocket } from '@/hooks/useSocket'
import { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'

/*
    1- Establecer la conexión con socket.io
    2- Establecer las "subscripciones" del objeto socket
*/

function Page() {

    const { socket, isConnected } = useSocket()
    const searchParams = useSearchParams()

    // Definimos las variables estáticas que recibimos en la query
    const userName = searchParams.get("username")
    const alumnoId = searchParams.get("alumnoId")

    // Definimos las variables dinámicas que ingresa el usuario
    const [texto, setTexto] = useState("")
    const [prioridad, setPrioridad] = useState(1)

    const [tareaActual, setTareaActual] = useState()

    const [salaConectada, setSalaConectada] = useState(false)

    const [historial, setHistorial] = useState([])

    useEffect(
        () => {

            if (!socket) { return }

            // Acá abajo ponemos las suscripciones con socket.on()
            socket.on("joined_OK_tareas", () => {
                console.log("Éxito al unirse a la sala")
                setSalaConectada(true)
            })

            // Cuando nos llega una nueva tarea, debemos sobreescribir la tarea actual con la tarea nueva
            socket.on("nueva_tarea", (data) => {
                // Guardar el objeto que nos llega dentro de la variable de estado tareaActual
                setTareaActual(data)

                // Guardar la tarea en la lista de estado historial
                // Esta sintaxis se debe usar sobre todo dentro de los useEffect
                // cuando estemos manipulando una lista de estado
                setHistorial(prevArray => [...prevArray, data])

                console.log("Llego una tarea", data)
                console.log(historial)
            })

            socket.on("tareas_completas", () => {
                // Reiniciamos las variables que se están renderizando
                setTareaActual(undefined)
                setSalaConectada(false)
                alert("Se completaron todas las tareas! Por favor presiona 'Unirse a sala de tareas' para iniciar nuevo flujo")
            })

        },
        [socket]
    )

    function clickHandlerButton() {
        socket.emit("join_tareas", { alumnoId: alumnoId })
    }

    function onChangeTareaHandler(event) {
        setTexto(event.target.value)
    }

    function onChangePrioridadHandler(e) {
        setPrioridad(e.target.value)
    }

    function onClickCrearTareaHandler() {
        socket.emit("crear_tarea", { creador: userName, texto: texto, prioridad: prioridad })
    }

    return (
        <div>
            <h1>Página tareas</h1>
            <button onClick={clickHandlerButton} >Unirse a la sala de tareas</button>

            {salaConectada && <p>Número de sala: {alumnoId}</p>}

            {salaConectada &&
                <NuevaTarea
                    onClickCrearTarea={onClickCrearTareaHandler}
                    onChangePrioridad={onChangePrioridadHandler}
                    onChangeTarea={onChangeTareaHandler}
                />
            }

            {tareaActual && <Tarea texto={tareaActual.texto} prioridad={tareaActual.prioridad} creador={tareaActual.creador} ></Tarea>}
            <hr />
            {historial.length > 0 && <h3>Historial</h3>}
            {historial.length == 0 && <p>No hay tareas creadas</p>}
            {historial.map(
                elemento =>
                {
                    //console.log("Elemento es", elemento)

                    return <div key={elemento.id}>
                        <TareaHistorial
                            creador={elemento.creador}
                            texto={elemento.texto}
                            prioridad={elemento.prioridad}
                            timestamp={elemento.timestamp}
                        ></TareaHistorial>
                    </div>
                }
            )}
        </div>
    )
}

export default Page
