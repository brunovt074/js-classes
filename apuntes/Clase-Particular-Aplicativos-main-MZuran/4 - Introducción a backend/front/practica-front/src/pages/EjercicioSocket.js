import { BotonPing } from "@/components/botonPingEmit"
import { io } from "socket.io-client"
import { useSocket } from "@/hooks/useSocket"
import { useEffect, useState } from "react";
import { MensajeComponente } from "@/components/mensaje";

import TextInputComponent from "@/components/textInputSocket";

export default function EjercicioSocket() {

    const [mensajes, setMensajes] = useState(false)

    const { socket, isConnected } = useSocket();

    useEffect(() => {
        if (!socket) return;

        // cada vez que yo escucho un pong; hacer algo con lo que me llegó (data)
        socket.on('pong', (data) => {
            console.log(data)
        })

        socket.on('arrayDeMensajes', (data) => {
            setMensajes(data.arrayDeMensajes)
            console.log(data)
        })

    }, [socket, isConnected]);

    return (
        <>
            <h1>Ejercicio de Socket</h1>
            < BotonPing socket={socket} />
            < TextInputComponent socket={socket} />
            {
                mensajes && mensajes.map(
                    (mensaje, index) =>
                        < MensajeComponente texto={mensaje.content} key={index} />
                )
            }
        </>
    )
}