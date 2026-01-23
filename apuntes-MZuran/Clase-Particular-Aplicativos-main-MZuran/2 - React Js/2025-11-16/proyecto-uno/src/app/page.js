import React from 'react'
import { Tarjeta1 } from '@/components/Tarjeta'

function Home() {

  const componente = <p>Hola mundo</p>

  return (
    <div>
      <h1>Home</h1>

      <Tarjeta1 nombre={"Maximo"} ></Tarjeta1>
      <Tarjeta1 nombre={"Matias"} ></Tarjeta1>
      <Tarjeta1 nombre={"Pepe"} ></Tarjeta1>

    </div>
  )
}

export default Home
