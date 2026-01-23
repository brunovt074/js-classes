/*
    Características:

    1) El componente siempre debe comenzar con una mayúscula

    2) Siempre deben retornar *POR LO MENOS* un tag html vacío entre paréntesis
    
        return (<></>)

    3) Si el componente recibe parámetros, estos se van a llamar "Props" y se reciben entre llaves

        PrimerComponente() // Sin props
        PrimerComponente({ nombre, apellido, edad, etc }) // Con props

    4) Siempre se deben exportar. Los componentes página se exportan sí o sí con el export default

        export
        export default

    5) Si se quiere meter lógica al componente, va adentro de la función, pero antes del return

    6) Para pasarle props al componente, se debe escribir dentro del tag la clave del prop es igual a su valor entre llaves

        <PrimerComponente nombre={"Matias"} edad={21} />
*/

export function PrimerComponente({nombre, children}) {

    console.log(`Mi nombre es ${nombre}`)

    return (
    <>
        <p>Me llamo {nombre}</p>
    </>
    )
}