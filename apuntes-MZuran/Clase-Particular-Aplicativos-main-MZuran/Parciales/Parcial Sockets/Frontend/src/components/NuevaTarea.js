import React from 'react'

function NuevaTarea({ onClickCrearTarea, onChangeTarea, onChangePrioridad }) {

    return (
        <div>
            <hr />
            <h4>Crear nueva tarea</h4>

            <input type='text' onChange={onChangeTarea}></input>

            <input
                type='number'
                max={5}
                min={1}
                defaultValue={1}
                onChange={onChangePrioridad}
            ></input>

            <button onClick={onClickCrearTarea} >Crear Tarea</button>
        </div>
    )
}

export default NuevaTarea
