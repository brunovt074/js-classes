/*
    Un componente es una función de javascript que cumple un cierto número de características
    1)  El nombre del componente debe usar PascalCase
    2)  El componente debe ser EXPORTADO

        Si el componente es de:
        src/app         -   Se debe exportar con "export default"
        src/components  -   Se puede exportar con "export" o "export default"

    3)  El componente SIEMPRE debe devolver como mínimo una etiqueta html vacía entre paréntesis
        (<></>)

    4)  El componente, al ser una función, puede naturalemente recibir parámetros
        Un parámetro que se envía a un componente se va a llamar un "prop"

        Los props siempre se reciben en forma de objeto y tenemos 2 convenciones comunes para recibirlos
        Caso 1:

            PrimerComponente(props) {
                console.log(props.nombre, props.edad)
            }

        Caso 2:

            PrimerComponente({nombre, edad}) {
                console.log(nombre, edad)
            }
    
    5)  Un componente puede tener lineas de código. Estas líneas deben estar
        dentro de la función pero antes del return
*/

//  camelCase   -   Comienza con minúscula y hace que todas las palabras tengan mayúscula
//  PascalCase  -   Lo mismo pero la primer palabra también lleva mayúscula

export function PrimerComponente({nombre}) {

    // Acá

    return (
    <>
        <hr/>
        <h4>Componente</h4>
        <p>El prop recibido bajo la clave "nombre" es {nombre}</p>
    </>
    )
}

/*
    Tipos de datos:
    objeto
    array
    funciones
    numeros
    strings
    lógico (True, False)

    React añade NUEVOS tipos de datos que podemos utilizar de la misma manera que los anteriores
    La etiqueta HTML <div></div>
    Los componentes
*/