/*
    ¿Qué es un componente?
    Un componente es una función que cumple 4 características especiales:

    1)  El nombre de la función debe usar PascalCase (asegurarnos de que la primer letra siempre comience con mayúscula)

        PascalCase
        camelCase
        snake_case
        hyphen-case

    2)  Que siempre deben devolver (return) algo de html
        Como mínimo deben devolver etiquetas vacías entre paréntesis

        return (<></>)
        return (<div></div>)

    3)  Debemos exportar los componentes

        a.  Los "componentes comunes" (los de src/components) se pueden exporar con 1 de estos 2:
            export function...
            export default function...

        b.  Los "componentes página" (los de src/app) se DEBEN exportar con 
            export default function...

    4)  El componente recibe "props"
        Un prop es un parámetro que recibe un componente o etiqueta HTML de react

        Los props se reciben con el objeto "props"
        El objeto props puede salir en los parámetros de forma anónima o de forma nombrada

        PrimerComponente tiene el objeto "props" de forma anónima
        SegundoComponente tiene el objeto "props" de forma nombrada
*/

export function PrimerComponente( { nombre, apellido, edad } ) {
    
    //Este componente puede usar las variables
    //nombre
    //apellido
    //edad

    return (<div></div>)
}

export function SegundoComponente( props ) {

    //Este componente puede usar las variables
    //props.nombre
    //props.apellido
    //props.edad

    return (<div></div>)
}

/*
    Tipos de datos:

    Number
    Strings
    Booleanos (Lógicos)
    Objetos
    Funciones
    Arrays

    Tipos de datos que trae React:

    Html
    Componente
*/