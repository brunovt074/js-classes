/*
    1)  La función se debe exportar
        a.  Los componentes página siempre se exportan con "export default" 
        b.  Los componentes comunes se exportan con "export default" o "export"

    2)  La función puede recibir parámetros. Los parámetros que reciba una función de componente,
        se llaman props.

    3)  El componente debe retornar COMO MÍNIMO una etiqueta de HTML entre paréntesis
        (<></>)

    4)  Los nombres de los componentes deben usar PascalCase
*/

export function PrimerComponente1(prop) {

    return (
        <>
            <p>Mi nombre es {prop.nombre}</p>
        </>
    )

}

export function PrimerComponente2({ nombre }) {
    
    return (
        <>
            <p>Mi nombre es {nombre}</p>
        </>
    )
}