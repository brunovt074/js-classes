"use client"

import React from 'react'
import { useSocket } from '@/hooks/useSocket'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { NuevaTarea } from '@/components/NuevaTarea'
import { Tarea } from '@/components/Tarea'

export default function Page() {

    const { socket, isConnected } = useSocket()

    const searchParams = useSearchParams()

    const [texto, setTexto] = useState("")
    const [prioridad, setPrioridad] = useState(1)
    const [conectadoASala, setConectadoASala] = useState(false)

    const [tareaActual, setTareaActual] = useState()

    const [historial, setHistorial] = useState([])

    function clickHandlerUnirseSala() {
        socket.emit("join_tareas", { alumnoId: searchParams.get("alumnoId") })
    }

    function clickHandlerCrearTarea() {

        if (1 <= prioridad && prioridad <= 5) {

            socket.emit("crear_tarea", {
                creador: searchParams.get("username"),
                texto: texto,
                prioridad: prioridad
            })

        } else {
            alert("ERROR! Prioridad debe estar entre 1 y 5")
        }

    }

    function changeHandlerTexto(e) {
        setTexto(e.target.value)
    }

    function changeHandlerPrioridad(e) {
        setPrioridad(e.target.value)
    }

    useEffect(
        () => {

            if (!socket) { return }

            socket.on("joined_OK_tareas", () => {
                console.log("Te uniste a la sala correctamente")
                setConectadoASala(true)
            })

            socket.on("nueva_tarea", (data) => {
                console.log("Se recibió una nueva tarea!")
                console.log(data)

                setTareaActual(data)

                // historial.push(data)
                setHistorial( prev => [...prev, data] )
            })

            socket.on("tareas_completas", () => {
                console.log("Se completaron las tareas")

                setTareaActual()
                setConectadoASala(false)
                setHistorial([])
            })

        },
        [socket]
    )

    return (
        <div>
            <h1>Tareas</h1>
            <p>
                El username es: {searchParams.get("username")} <br />
                El alumnoId es: {searchParams.get("alumnoId")} <br />
                El valor de la variable de estado Texto es: {texto} <br />
                El valor de la variable de estado Prioridad es: {prioridad}
            </p>

            <button onClick={clickHandlerUnirseSala} >Unirse a la sala de tareas</button>

            {
                conectadoASala &&
                <NuevaTarea
                    onClickCrearTarea={clickHandlerCrearTarea}
                    onChangePrioridad={changeHandlerPrioridad}
                    onChangeTarea={changeHandlerTexto}
                ></NuevaTarea>
            }

            {
                !tareaActual &&
                <p>Se completaron todas las tareas!</p>
            }

            {conectadoASala == true && <p>Numero de sala: {searchParams.get("alumnoId")}</p>}


            {
                tareaActual &&
                <Tarea
                    texto={tareaActual.texto}
                    prioridad={tareaActual.prioridad}
                    creador={tareaActual.creador}
                ></Tarea>
            }

            <hr/>
            <h3>Historial</h3>
            {
                historial.map(
                    (elementoTarea) => {
                        return <Tarea
                            texto={elementoTarea.texto}
                            prioridad={elementoTarea.prioridad}
                            creador={elementoTarea.prioridad}
                            key={elementoTarea.id}
                        ></Tarea>
                    }
                )
            }

            {
                historial.length === 0 &&
                <p>No hay tareas creadas</p>
            }
            
        </div>
    )
}

/*
    [data,data,data,data,data,data]

    <Tarea/>
    
    [<Tarea/>,<Tarea/>,<Tarea/>,<Tarea/>,<Tarea/>,<Tarea/>]

    Vamos a hacer esta transformación usando historial.map
*/