import { io } from "socket.io-client";
import { useEffect } from "react";
import { BotonPing } from "@/components/botonPing";
import { BotonMensaje } from "@/components/botonMensajePrompt";

export default function Home() {

  const url = "http://localhost:4000/";
  const socket = io(url);

  // UseEffect de limpieza. Remueve todos los eventos.
  useEffect(() => {
    socket.on("Pong", (data) => {

      alert("Volvio el ping")
      console.log("Alguien pingeo")
    })

    return () => {
      socket.removeAllListeners();
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <h1>Clase de sockets</h1>
      <BotonPing socketProp={socket} />
      <BotonMensaje socketProp={socket} />
    </>
  );
}
