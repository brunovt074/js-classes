"use client"

import React from 'react'

import NuevaTarea from '@/components/NuevaTarea'
import { Tarea } from '@/components/Tarea'

//Necesitamos usar sockets
import { useSocket } from '@/hooks/useSocket'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useState } from 'react'

function Page() {

    const { socket, isConnected } = useSocket()

    const searchParams = useSearchParams()

    const [textoTarea, setTextoTarea] = useState("")
    const [prioridadTarea, setPrioridadTarea] = useState(1)

    const [tareaActual, setTareaActual] = useState()

    const [historial, setHistorial] = useState([])

    useEffect(() => {

        if (!socket) { return }

        //aca pongo los socket.on
        socket.on("joined_OK_tareas", () => {
            console.log("Te uniste a la sala exitosamente")
        })

        socket.on("nueva_tarea", (data) => {
            console.log("Nos llegó una nueva tarea", data)
            setTareaActual(data)

            setHistorial(prev => [...prev, data])
        })

        socket.on("tareas_completas", () => {

            setTareaActual()
            setHistorial([])
            console.log("Se finalizaron las tareas")

        })


    }, [socket]);

    useEffect(
        () => {
            console.log(historial)
        }, [historial]
    )

    function clickHandlerTareas() {
        socket.emit("join_tareas", { alumnoId: searchParams.get("alumnoId") })
    }

    function changeHandlerTexto(e) {
        setTextoTarea(e.target.value)
    }

    function changeHandlerNumero(e) {
        setPrioridadTarea(e.target.value)
    }

    function clickHandlerButton() {

        if (prioridadTarea >= 1 && prioridadTarea <= 5) {

            socket.emit(
                "crear_tarea",
                { creador: searchParams.get("username"), texto: textoTarea, prioridad: prioridadTarea }
            )

        } else {

            alert("La prioridad debe estar entre 1 y 5")

        }

    }

    return (
        <div>
            <h1>Tareas</h1>
            <button onClick={clickHandlerTareas} >Unirse a la sala de tareas</button>

            <NuevaTarea
                onChangeTarea={changeHandlerTexto}
                onChangePrioridad={changeHandlerNumero}
                onClickCrearTarea={clickHandlerButton}
            ></NuevaTarea>

            {tareaActual && <Tarea texto={tareaActual.texto} prioridad={tareaActual.prioridad} number={tareaActual.cantidadTareas} ></Tarea>}

            <hr />
            <h4>Historial:</h4>

            {
                historial.length == 0 && <p>No hay tareas creadas</p>
            }

            {
                historial.map(
                    elementoObjeto =>
                        <div key={elementoObjeto.id} >
                            <Tarea
                                texto={elementoObjeto.texto}
                                prioridad={elementoObjeto.prioridad}
                                number={elementoObjeto.number}
                            />
                        </div>
                )
            }

        </div>
    )
}

export default Page
