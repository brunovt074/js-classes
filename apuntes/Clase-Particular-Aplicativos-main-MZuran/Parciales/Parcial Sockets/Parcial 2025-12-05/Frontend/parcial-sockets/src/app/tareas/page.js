"use client"

import React from 'react'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useSocket } from '@/hooks/useSocket'
import { useState } from 'react'

import NuevaTarea from '@/components/NuevaTarea'
import { Tarea } from '@/components/Tarea'

function Page() {

    const searchParams = useSearchParams()

    const { socket, isConnected } = useSocket();

    const [textoTarea, setTextoTarea] = useState("")
    const [numeroTarea, setNumeroTarea] = useState(1)

    const [tareaActual, setTareaActual] = useState()

    const [flagTareaCompleta, setFlagTareaCompleta] = useState(false)
    const [flagConexionRoom, setFlagConexionRoom] = useState(false)

    const [historial, setHistorial] = useState([])

    useEffect(() => {

        if (!socket) { return }

        socket.on("joined_OK_tareas", () => {
            console.log("Te uniste a la sala correctamente")

            setFlagTareaCompleta(false)
            setFlagConexionRoom(true)
        })

        socket.on("nueva_tarea", (data) => {
            console.log("Nos llegó una nueva tarea", data)
            setTareaActual(data)

            // Es el equivalente a hacer historial.push(data)
            setHistorial(prev => [...prev, data])
        })

        socket.on("tareas_completas", () => {
            console.log("Se completaron 5 tareas!")
            setTareaActual()
            setHistorial([])

            setFlagTareaCompleta(true)
            setFlagConexionRoom(false)
        })

    }, [socket]);

    function clickHandlerButtonUnirse() {
        socket.emit("join_tareas", { alumnoId: searchParams.get("alumnoId") })
    }

    function onChangeTareaHandler(e) {
        setTextoTarea(e.target.value)
    }

    function onChangePrioridadHandler(e) {
        setNumeroTarea(e.target.value)
    }

    function onClickCrearTareaHandler() {

        if (numeroTarea >= 1 && numeroTarea <= 5) {

            socket.emit("crear_tarea", { creador: searchParams.get("username"), texto: textoTarea, prioridad: numeroTarea })

        } else {
            alert("El número debe estar entre 1 y 5")
        }

    }

    return (
        <div>
            <h1>Tareas</h1>
            <p>
                username: {searchParams.get("username")} <br />
                alumnoId: {searchParams.get("alumnoId")} <br />
                Texto de la tarea nueva: {textoTarea} <br />
                Prioridad: {numeroTarea}
            </p>

            <button onClick={clickHandlerButtonUnirse} >Unirse a la sala de tareas</button>

            {
                flagConexionRoom &&

                <NuevaTarea
                    onChangeTarea={onChangeTareaHandler}
                    onChangePrioridad={onChangePrioridadHandler}
                    onClickCrearTarea={onClickCrearTareaHandler}
                />
            }

            {flagConexionRoom && <p>Numero de sala: {searchParams.get("alumnoId")}</p>}

            {tareaActual ?
                <Tarea
                    texto={tareaActual.texto}
                    prioridad={tareaActual.prioridad}
                    creador={tareaActual.creador}
                /> :
                <></>
            }

            {flagTareaCompleta && <p>Se completaron todas las tareas! Por favor presiona "Unirse a sala de tareas" para iniciar nuevo flujo</p>}

            <h3>Historial</h3>

            { historial.length == 0 && <p>No hay tareas creadas</p>}

            {
                historial.map(
                    (elemento) => {
                        return <Tarea
                            texto={elemento.texto}
                            prioridad={elemento.prioridad}
                            creador={elemento.creador}
                            key={elemento.id}
                        />
                    }
                )
            }

        </div>

    )
}

export default Page

/*


    [data,data,data,data]

    [<Tarea/>,<Tarea/>,<Tarea/>,<Tarea/>]

*/