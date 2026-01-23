export function Tarea(props) {

    // props.texto (string)
    // props.prioridad (number)
    // props.creador (string)

    return (
        <div>
            <hr />
            <h4>Tarea</h4>
            <p>
                Creador: {props.creador} <br />
                Texto: {props.texto}
            </p>
            {
                props.prioridad > 3 ?
                    <p>Prioridad alta</p> :
                    <p>Prioridad normal</p>
            }
        </div>
    )
}