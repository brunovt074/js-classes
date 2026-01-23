import React from 'react'
import { useEffect, useState } from 'react'

import Swal from 'sweetalert2'

function Home() {

  function buttonHandler() {
    alert("Esto es una alerta")
  }

  function buttonHandlerSwal() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  return (
    <>
      <h1>Estamos en home</h1>
      <button onClick={buttonHandler} >Alert Default</button>
      <p>Nos instalamos un paquete que tenga código para alertas personalizadas más copadas</p>
      <p>Lo que debemos hacer para instalar un paquete son los siguientes pasos</p>
      <p>
        1) Debemos googlear buscando un paquete <br />
        2) Buscamos la sección de 'documentación' o 'instalación' del paquete <br />
        3) Debemos importar el contenido del paquete que querramos usar <br />
        4) Usar el contenido del paquete según dice la documentación
      </p>
      <button onClick={buttonHandlerSwal} >Alert de SweetAlert</button>
      <br/>
      <a href='/Ejercicios/ejercicioRuta' >Ir a la ruta</a>
    </>
  )
}

export default Home