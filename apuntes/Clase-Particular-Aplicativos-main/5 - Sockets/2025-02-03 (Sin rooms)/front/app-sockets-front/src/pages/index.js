import React from 'react'
import { io } from 'socket.io-client'
import { useEffect } from 'react';
import { ButtonPing } from '@/components/buttonPing';
import { ButtonMessage } from '@/components/buttonMessage';
import TextInputMensaje from '@/components/inputMessage';
import { DisplayMessage } from '@/components/displayMessage';
import RoomButton from '@/components/roomButton';

function Index() {

  // io (desde el front) es una funcion que abre una conexion con una direccion ip
  // devuelve el objeto socket que representa nuestra conexion desde el front

  const socket = io("http://localhost:4000/")

  useEffect(() => {
    // Si quisieramos que index.js use un un .on, irían por aquí
    return () => {
      socket.removeAllListeners();
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <h1>Clase Socket</h1>
      
      <DisplayMessage propSocket={socket} />
      <TextInputMensaje propSocket={socket} />

      <input type="checkbox" onChange={() => {alert("Cambie")}}></input>
    </>
  )
}

export default Index
