import React from 'react'

function TarjetaPersona({name, age, job, city}) {
  return (
    <>
      <p> Me llamo {name} y tengo {age} años. Trabajo de {job} en la ciudad de {city} </p>
    </>
  )
}

export default TarjetaPersona
