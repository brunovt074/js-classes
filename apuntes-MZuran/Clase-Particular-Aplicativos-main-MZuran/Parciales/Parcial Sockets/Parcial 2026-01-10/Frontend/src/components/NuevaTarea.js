import React from 'react'

function NuevaTarea({ onChangeTarea, onClickCrearTarea, onChangePrioridad }) {
    return (
        <div>
            <h4>Crear nueva tarea</h4>

            <input
                type='text'
                onChange={onChangeTarea}
                placeholder='Ingresar Tarea'
            ></input>

            <input
                type='number'
                onChange={onChangePrioridad}

                min={1}
                max={5}
                defaultValue={1}

                placeholder='Ingresar Prioridad'
            ></input>

            <button onClick={onClickCrearTarea} >Crear Tarea</button>

        </div>
    )
}

export default NuevaTarea
