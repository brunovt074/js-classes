/*
    Acá es donde vamos a crear nuestro componente
    ¿Qué es un componente en el código?

    Un componente es una función que cumple ciertas características especiales:

    1.  El nombre de la función debe usar PascalCase

        camelCase
        snake_case
        PascalCase

    2.  El componente se debe exportar

        a.  Los componentes (comunes) de src/components/ se exportan con:
            "export"
            "export default"

        b.  Los componentes (página) de src/app/ se exportan con:
            "export default"

    3.  El componente siempre debe exportar html
        Como mínimo debe exportar una etiqueta vacía de html entre paréntesis

        return (<></>)

    4.  El componente puede recibir parámetros
        Un parámetro recibido por un componente o un html se va a llamar un "prop"

        Existen 2 maneras de recibir props

        1)  PrimerComponente(props)
                props.nombre    --  Accedemos al prop nombre
                props.edad      --  Accedemos al prop edad

        2)  PrimerComponente({ nombre, edad })
                nombre          --  Accedemos al prop nombre
                edad            --  Accedemos al prop edad
*/

// Antes del return es donde escribimos nuestro código Js
// Dentro del return es donde escribimos nuestro html
// Para ambos casos hay excepciones

export function PrimerComponente(props) {

    return (
        <>
            <hr />
            <p>Hola Mundo, mi nombre es {props.nombre}</p>
        </>
    )
}

/*
    Tipos de datos:

    Strings
    Numbers
    Booleanos (Lógicos)
    Objeto
    Array
    Funciones

    React añade 2 tipos de datos nuevos

    Html        -   Es una etiqueta que abre y cierra
    Componente  -   Colección de js y html
*/