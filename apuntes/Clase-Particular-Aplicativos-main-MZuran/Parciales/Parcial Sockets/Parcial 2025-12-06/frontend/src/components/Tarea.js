/*
    1.  Los componentes se deben exportar.
        a.  Los componentes comunes (los de /components) se exportan con "export" o "export default"
        b.  Los componentes página (los de /app) se exportan con "export default"

    2.  Los componentes deben devolver HTML

    3.  Los componentes deben usar PascalCase

    4.  Los componentes pueden recibir el objeto props
*/

export function Tarea(props) {

    // props.texto
    // props.prioridad
    // props.number

    return (
        <div>
            <hr/>
            <p>
                Texto: {props.texto} <br/>
                Prioridad: {props.prioridad} <br/>
                Number: {props.number}
            </p>
            { props.prioridad > 3 && <p>Prioridad alta</p> }
            { props.prioridad <= 3 && <p>Prioridad normal</p> }
        </div>
    )
}