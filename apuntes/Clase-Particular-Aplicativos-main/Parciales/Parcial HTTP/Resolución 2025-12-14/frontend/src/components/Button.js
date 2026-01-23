/*
    Sabemos que los componentes son funciones que cumplen un cierto número de características
    1.  Se debe exportar
        "export" o "export default" si son componentes comunes
        "export default" si son componentes página

    2.  Debe usar PascalCase

    3.  Debe retornar html
        Como mínimo (<></>)
*/

function ButtonEjemplo(props) {

    // props.onClick
    // props.text

    return (
        <div>
            <button
                onClick={props.onClick}
            >{props.text}</button>
        </div>
    )
}

export function Button( { onClick, text } ) {

    // onClick
    // text

    return (
        <div>
            <button
                onClick={onClick}
            >{text}</button>
        </div>
    )
}