'use client'

import React from 'react'

import MessageBox from '@/components/MessageBox'

import { useState, useEffect } from 'react'
import { useSocket } from '@/hooks/useSocket'

/*
    Vamos a necesitar:
    1) Un componente que visualice los mensajes
    2) useState para guardar los mensajes                     - Completado
    3) sockets para recibir los mensajes                      - Completado
    4) useEffect para controlar las suscripciones de sockets  - Completado
    5) Un input (de tipo texto) para escribir nuestro mensaje - Completado
    6) Un botón de "Enviar"                                   - Completado
*/

/*
    El backend está suscrito a "join_room", "enviar_mensaje" y "disconnect"
    Nosotros debemos emitir esos eventos

    en "enviar_mensaje" debemos enviar un evento que contenga un usuario y texto en un objeto
    El botón de enviar tendrá un clickHandlerEnviar que EMITA el evento "enviar_mensaje"
*/

/*
    El backend nos está emitiendo un evento llamado "nuevo_mensaje" que viene con un array de mensajes
    Nosotros debemos suscribirnos a "nuevo_mensaje"
*/

/*

*/

function Pagina() {
    const { socket, isConnected } = useSocket()

    const [texto, setTexto] = useState("")
    const [usuario, setUsuario] = useState("")
    const [mensajes, setMensajes] = useState([])

    useEffect(
        () => {

            if (!socket) { return }

            socket.on("nuevo_mensaje", (arrayMensajes) => {
                console.log("Se recibieron mensajes nuevos!", arrayMensajes)
                setMensajes(arrayMensajes)
            })

        },
        [socket]
    )

    useEffect(
        () => {

            if (!socket) { return }

            //Todas las suscripciones tienen que ir abajo de este if
            //Por ejemplo:

            socket.on("nuevo_mensaje", (arrayMensajes) => {
                console.log("Se recibieron mensajes nuevos!", arrayMensajes)
                setMensajes(arrayMensajes)
            })

        },
        [socket]    //Ojo con esto
    )

    function changeHandlerTexto(event) {
        //console.log("Cambió el texto", event.target.value)

        // Queremos hacer que event.target.value se guarde dentro de la varible DE ESTADO texto
        setTexto(event.target.value)

        // El parámetro event recibe toda la información acerca del evento en cuestión (onChange)
        // event.target recibe toda la información acerca de la ETIQUETA que ejecuta el evento
        /*
            Etiquetas importantes incluyen:
            event.target.name -> Nos da el prop "name" de la etiqueta
            event.target.value -> Nos da el valor que ingresamos en el input
        */
    }

    function changeHandlerUsuario(event) {
        setUsuario(event.target.value)
    }

    function clickHandlerEnviar() {
        // Debemos tomar el texto y el usuario y emitir el evento "enviar_mensaje"

        socket.emit("enviar_mensaje", { texto: texto, usuario: usuario })
    }

    function clickHandlerCambiarSala() {
        // Debemos emitir el evento "join_room" con una room id que ingrese el usuario
        const id = prompt("Ingrese la id de la sala")

        socket.emit("join_room", { roomId: id })
    }

    return (
        <div>
            <h1>Ejemplo Chat</h1>

            {
                mensajes.map(
                    elementoObjeto =>
                        <MessageBox
                            usuario={elementoObjeto.usuario}
                            mensaje={elementoObjeto.texto}
                            timeStamp={elementoObjeto.timestamp}
                            key={elementoObjeto.id}
                        />
                )
            }

            <input
                type={'text'}
                name={'usuario'}
                value={usuario}
                onChange={changeHandlerUsuario}
            />

            <input
                type={'text'}
                name={'mensaje'}
                value={texto}
                onChange={changeHandlerTexto}
            />

            <button onClick={clickHandlerEnviar}>Enviar</button>
            <button onClick={clickHandlerCambiarSala}>Cambiar Sala</button>
        </div>
    )
}

export default Pagina
