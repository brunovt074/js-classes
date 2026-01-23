/*
    El frontend NO TIENE ACCESO AL OBJETO IO

    io para el frontend es simplemente la funcion que nos abre una nueva conexion
    Esta función proviene de socket.io-client, por lo que se tiene que importar

    La función io (la función del front) recibe como único parámetro un url o dirección ip
    Lo que hará esta función es hacer que se abra un socket de comunicación entre cliente y servidor
    La función devuelve el socket

    Cuando se abra una ruta de comunicación se debe hacer un "useEffect especial" el cuál se encargará de eliminar
    todos los .on() cuando el componente deje de estar

    onClick ES UN PROP
    socketProp TAMBIEN ES UN PROP
*/

import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

import { BotonPing } from "@/components/botonPing";
import { MessageInput } from "@/components/messageInput";
import { MessageRender } from "@/components/messageRender";

export default function Home() {

  const socket = io("http://localhost:4000/")

  useEffect(() => {

    // Si nosotros queremos que el componente tenga un .on() generalmente irá dentro de este useEffect
    
    // Cuando un componente "muere" se ejecuta el return de su useEffect
    return () => {
      socket.removeAllListeners();
      socket.disconnect();
    }

  }, [socket]);

  return (
    <>
    <h1>Clase de socket</h1>
    <BotonPing socketProp={socket} />
    <MessageRender socketProp={socket} />
    <MessageInput socketProp={socket}/>
    </>
  );
}
