/*
    ¿Qué es un componente?
    Un componente es una FUNCIÓN que cumple ciertas características

    1.  El nombre del componente debe usar PascalCase
        PascalCase
        camelCase
        snake_case

    2.  El componente se debe exportar
        a.  Los componentes comunes (/components/) se pueden exportar con
            "export" o "export default"

        b.  Los componentes página (/app/) se DEBEN exportar con
            "export default"

    3.  Como mínimo, el componente tiene que devolver (hacer return) de una etiqueta HTML
        vacía entre paréntesis

        (<></>)

    4.  Si el componente recibe parámetros, los recibe en forma del objeto props
        ¿Qué es un prop?
        Un prop es un parámetro recibido por la función del componente
*/

export function PrimerComponente(props) {


    // props.nombre
    // props.apellido
    // props.edad

    return (
    <div>
        <p>
            Hola mundo <br/>
            Mi nombre es {props.nombre} {props.apellido} <br/>
            Tengo {props.edad} años
        </p>
    </div>)
}

/*
    Tipos de datos:

    1.  Numbers
    2.  Strings
    3.  Booleanos (Lógicos)
    4.  Funciones
    5.  Objetos
    6.  Arrays

    React nos brinda 2 nuevos tipos de datos que podemos usar:

    7.  Etiqueta HTML <div></div>
    8.  Componente
*/