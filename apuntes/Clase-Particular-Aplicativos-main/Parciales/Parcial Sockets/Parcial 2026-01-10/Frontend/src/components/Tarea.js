import React from 'react'

function Tarea({ texto, prioridad, creador }) {
  return (
    <div>
      <hr/>
      <p>
        El creador es: {creador} <br/>
        El texto es: {texto}
      </p>
      { prioridad > 3 ? <p>Prioridad alta</p> : <p>Prioridad normal</p> }
    </div>
  )
}

export default Tarea
// { condicion ? caso true : caso false }