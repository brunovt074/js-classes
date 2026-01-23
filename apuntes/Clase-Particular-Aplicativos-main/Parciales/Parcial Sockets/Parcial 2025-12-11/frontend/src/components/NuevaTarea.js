import React from 'react'

export function NuevaTarea(props) {

    // props.onChangeTarea (funcion)
    // props.onClickCrearTarea (funcion) (callback)
    // props.onChangePrioridad (funcion)

    return (
        <div>
            <h4>Crear nueva tarea</h4>

            <input
                type={"text"}
                onChange={props.onChangeTarea}
            ></input>

            <input
                type={"number"}
                min={1}
                max={5}
                defaultValue={1}
                onChange={props.onChangePrioridad}
            ></input>

            <button onClick={props.onClickCrearTarea} >Crear Tarea</button>

        </div>
    )
}