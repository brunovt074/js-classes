"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import React from 'react'
import Alimento from '@/components/Alimento'
import InputBotonPunto3 from '@/components/InputBotonPunto3'

function Home() {

  const [alimentosServidor, setAlimentosServidor] = useState([])
  const router = useRouter()

  useEffect(
    () => {

      fetch('http://localhost:4000/alimentos')
        .then(response => response.json())
        .then((data) => {

          console.log("La respuesta del servidor es", data)
          // alimentosServidor = data.alimentos   //  NO FUNCIONA
          setAlimentosServidor(data.alimentos)    //  SÍ FUNCIONA

        })

    },
    [] //  Array vacío quiere decir que el efecto se ejecuta sólo 1 vez al principio
  )

  return (
    <div>
      <h1>Home</h1>

      <InputBotonPunto3/>

      {
        alimentosServidor.map(
          (elemento, posicion) => {
            return <Alimento
              nombre={elemento}
              onClickBoton={() => {router.push(`/detalleAlimento?alimento=${elemento}`)}}
              key={"Alimento#" + posicion}
            />
          }
        )
      }

    </div>
  )
}

export default Home

/*
  alimentosServidor.map(
    (elemento) => { return <Alimento nombre={elemento} key={elemento} /> }
  )

  alimentosServidor.map(
    (elemento, posicion) => { return <Alimento nombre={elemento} key={posicion} /> }
  )

  alimentosServidor.map(
    (elemento, posicion) => { return <Alimento nombre={elemento} key={"Alimento#"+posicion} /> }
  )
*/