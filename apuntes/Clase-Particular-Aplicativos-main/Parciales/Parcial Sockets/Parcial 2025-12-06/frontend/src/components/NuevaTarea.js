"use client"

import React from 'react'

function NuevaTarea(props) {

    // props.onChangeTarea
    // props.onClickCrearTarea
    // props.onChangePrioridad

    return (
        <div>
            <h4>Crear nueva tarea</h4>

            <input
                type={"text"}
                onChange={props.onChangeTarea}
            ></input>

            <input
                type={"number"}
                onChange={props.onChangePrioridad}
                min={1}
                max={5}
                defaultValue={1}
            ></input>

            <button onClick={props.onClickCrearTarea} >Crear Tarea</button>
            
        </div>
    )
}

export default NuevaTarea
