

export function Tarea(props) {

    return (
    <>
    <hr/>
    <p>El texto es {props.texto}</p>
    <p>La prioridad es {props.prioridad}</p>
    <p>El creador es {props.creador}</p>

    { props.prioridad > 3 && <p>La prioridad es alta</p> }
    { props.prioridad <= 3 && <p>La prioridad es baja</p> }
    </>
    )
}

export function TareaHistorial(props) {

    return (
    <>
    <hr/>
    <p>El texto es {props.texto}</p>
    <p>La prioridad es {props.prioridad}</p>
    <p>El creador es {props.creador}</p>
    <p>El timestamp es {props.timestamp}</p>

    { props.prioridad > 3 && <p>La prioridad es alta</p> }
    { props.prioridad <= 3 && <p>La prioridad es baja</p> }
    </>
    )
}