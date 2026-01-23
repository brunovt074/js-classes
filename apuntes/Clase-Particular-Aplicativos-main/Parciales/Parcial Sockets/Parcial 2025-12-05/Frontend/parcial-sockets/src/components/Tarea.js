/*
    1.  Usar PascalCase
    2.  Debe retornar HTML
    3.  Debe ser exportado
            a.  Componentes comunes usan "export" o "export default"
            b.  Componentes página (/app) usan siempre "export default"
*/

export function Tarea(props) {

    // props.texto
    // props.prioridad
    // props.creador
    // props.contador

    return (
        <>
            <hr />

            { props.prioridad > 3 && <p>Prioridad Alta</p> }
            { props.prioridad <= 3 && <p>Prioridad Normal</p> }

            { /* props.prioridad > 3 ? <p>Prioridad Alta</p> : <p>Prioridad Normal</p> */ }

            <p>Creador: {props.creador}</p>
            <p>Texto: {props.texto}</p>
            <p>El contador es: {props.contador}</p>

        </>
    )
}