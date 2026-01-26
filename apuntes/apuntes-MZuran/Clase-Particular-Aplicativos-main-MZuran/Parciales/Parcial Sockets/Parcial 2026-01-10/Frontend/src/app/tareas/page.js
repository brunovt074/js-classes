"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useSocket } from '@/hooks/useSocket'
import { useEffect, useState } from 'react'

import NuevaTarea from '@/components/NuevaTarea'
import Tarea from '@/components/Tarea'

function Tareas() {

    const searchParams = useSearchParams()
    const { socket, isConnected } = useSocket()

    const [textoTarea, setTextoTarea] = useState("")
    const [prioridadTarea, setPrioridadTarea] = useState(1)

    const [tareaActual, setTareaActual] = useState({})
    const [conexionExitosa, setConexionExitosa] = useState(false)
    const [historial, setHistorial] = useState([])

    useEffect(
        () => {

            if (!socket) { return }

            // Meter suscrupciones acá abajo
            socket.on("joined_OK_tareas", () => {
                console.log("Te uniste a la sala correctamente")
                setConexionExitosa(true)
            })

            socket.on("nueva_tarea", (data) => {
                console.log("Llegó una nueva tarea", data)

                setTareaActual(data)

                // historial.push(data) 
                // ¿Cómo hacemos que esto funcione con variables de estado?
                setHistorial(prev => [...prev, data])
            })

            socket.on("tareas_completas", () => {
                console.log("Se completaron las tareas")

                setTareaActual({})
                setConexionExitosa(false)
                setHistorial([])
            })

        },
        [socket]
    )

    function callbackBoton() {

        if (prioridadTarea >= 1 && prioridadTarea <= 5) {

            socket.emit("crear_tarea", {
                creador: searchParams.get("username"),
                texto: textoTarea,
                prioridad: prioridadTarea
            })

        } else {
            alert("Error: La prioridad debe estar entre 1 y 5")
        }
        
    }

    return (
        <div>
            <h1>Tareas</h1>
            <p>
                El nombre es: {searchParams.get("username")} <br />
                El alumnoId es: {searchParams.get("alumnoId")}
            </p>

            {conexionExitosa && <p>Numero de sala: {searchParams.get("alumnoId")}</p>}

            <button
                onClick={() => { socket.emit("join_tareas", { alumnoId: searchParams.get("alumnoId") }) }}
            >Unirse a la sala de Tareas</button>

            <hr />

            {conexionExitosa &&
                <NuevaTarea
                    onChangeTarea={(e) => { setTextoTarea(e.target.value) }}
                    onChangePrioridad={(e) => { setPrioridadTarea(e.target.value) }}
                    onClickCrearTarea={callbackBoton}
                />
            }

            {
                tareaActual.texto ?
                    <Tarea
                        texto={tareaActual.texto}
                        prioridad={tareaActual.prioridad}
                        creador={tareaActual.creador}
                    /> :
                    <p>Se completaron todas las tareas. Apreta el botón para unirte de nuevo.</p>
            }

            <h4>Historial</h4>


            {/* 
                [{...},{...},{...},{...},{...}]
                [<Tarea/>,<Tarea/>,<Tarea/>,<Tarea/>,<Tarea/>]
            */}

            {
                historial.map(
                    (objetoTarea) => {
                        return <Tarea
                            texto={objetoTarea.texto}
                            prioridad={objetoTarea.prioridad}
                            creador={objetoTarea.creador}
                            key={objetoTarea.id}
                        />
                    }
                )
            }

            { historial.length == 0 && <p>No hay tareas creadas</p> }

        </div>
    )
}

export default Tareas
