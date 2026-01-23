import { useEffect, useState } from "react"
import Tarea from "@/components/tarea"
import AgregarTarea from "@/components/agregar"
import { io } from "socket.io-client"
import Modificar from "@/components/modificar"

export default function Home() {

    const [arrayTareas, setArrayTareas] = useState([])
    const [actualizacionLista, setActualizacionLista] = useState(0)

    function actualizarContadorLista() { setActualizacionLista(actualizacionLista + 1) }

    const socket = io("http://localhost:4000/")

    useEffect(() => {
        socket.on('avisoCreacion', actualizarContadorLista)
        socket.on('avisoModificacion', actualizarContadorLista)

        return () => {
            socket.removeAllListeners();
            socket.disconnect();
        }

    }, [socket]);

    useEffect(
        () => {
            const customFetch = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/tareas"
                const metodo = "GET"

                try {
                    const response = await fetch(urlFetch, {
                        method: metodo,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    const responseData = await response.json();

                    setArrayTareas(responseData.tareas)

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            customFetch()
        },
        [actualizacionLista]
    )

    return (
        <>
            <h1>Home</h1>
            {arrayTareas.map((elemento, index) => {
                return <Tarea
                    nombre={elemento.nombre}
                    estado={elemento.estado}
                    responsable={elemento.responsable}
                    key={elemento.nombre}
                />
            }) }
            <AgregarTarea socketProp={socket} arrayTareasProp={arrayTareas} />
            <br />
            <br />
            <Modificar socketProp={socket} />
        </>
    )
}
