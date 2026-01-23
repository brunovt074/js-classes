"use client"

import React from 'react'

import { useRouter } from 'next/navigation'

/*
  useRouter es una función que nos devuelve un objeto llamado router
  router es un objeto que contiene métodos

  array.push()

  Nosotros vamos a aprender 4 métodos del objeto router:
    1.  router.push()       - Añade un nuevo elemento al array del historial. También redirecciona al usuario a el nuevo url.
    2.  router.refresh()    - Recarga la página
    3.  router.forward()    - Redirecciona al usuario al siguiente elemento del array de historial
    4.  router.back()       - Redirecciona al usuario al elemento anterior del historial

  TENER CUIDADO DE DÓNDE IMPORTAMOS EL USEROUTER ('next/navigation')
*/

function Home() {

  const router = useRouter()

  function buttonHandlerClickComponente() {
    router.push("/ejemploComponente")
  }

  function buttonHandlerClickUseState() {
    router.push("/ejemploUseState")
  }

  function buttonHandlerClickUseSearchParams() {
    const nombre = prompt("Ingresa tu nombre")
    const edad = prompt("Ingresa tu edad")

    router.push("/ejemploUseSearchParams?nombre=" + nombre + "&edad=" + edad)

    /* `/useSearchParams?nombre=${nombre}&edad=${edad}`
    "/useSearchParams?nombre=" + nombre + "&edad=" + edad */
  
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Ejemplo de useRouter</p>

      <button onClick={buttonHandlerClickComponente} >Ir al ejemplo del componente</button>
      <br/>
      <button onClick={buttonHandlerClickUseState} >Ir al ejemplo del useState</button>
      <br/>
      <button onClick={ () => { router.push("/ejemploUseEffect") } } >Ir al ejemplo del useEffect</button>
      <br/>
      <button onClick={buttonHandlerClickUseSearchParams} >Ir al ejemplo del searchparams</button>
      <br/>

    </div>
  )
}

export default Home
