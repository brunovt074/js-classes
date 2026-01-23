"use client"

import React from 'react'

import { useRouter } from 'next/navigation'

function Page() {

  const router = useRouter()

  function buttonHandlerRefrescarPagina() {
    router.refresh()
  }

  function buttonHandlerUseState() {
    router.push("/ejemploUseState")
  }

  function buttonHandlerUseEffect() {
    router.push("/ejemploUseEffect")
  }

  function buttonHandlerSearchParams() {
    const nombre = prompt("Ingresa tu nombre")
    const edad = prompt("Ingresa tu edad")
    
    router.push("/ejemploSearchParams?nombre=" + nombre + "&edad=" + edad)
    // router.push(`/ejemploSearchParams?nombre=${nombre}&edad=${edad}`)
  }

  return (
    <div>
      <h1>Home</h1>

      <button onClick={buttonHandlerUseState}>Ir al ejemplo useState</button>
      <button onClick={buttonHandlerUseEffect}>Ir al ejemplo useEffect</button>
      <button onClick={buttonHandlerSearchParams}>Ir al ejemplo de SearchParams</button>
      <button onClick={buttonHandlerRefrescarPagina}>Refrescar Página</button>
    </div>
  )
}

export default Page

/*
  React Router
  React Router es un conjunto de hooks para facilitar la navegación en nuestra aplicación de react
  Los hooks de react router son los siguientes:

  useRouter
  useSearchParams

  La función del router es manejar la "url" en donde está nuestro usuario
  useRouter es una función que devuelve un objeto router y que no recibe parámetros
  El objeto router tiene ciertos métodos que vamos a utilizar para navegar
*/