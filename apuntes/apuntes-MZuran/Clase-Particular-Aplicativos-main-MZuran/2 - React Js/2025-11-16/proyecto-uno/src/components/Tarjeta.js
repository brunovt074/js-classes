/*
    ¿Qué es un componente de react?
    Un componente de react es UNA FUNCIÓN DE JS QUE CUMPLE CIERTAS CARACTERÍSTICAS
*/

/*
    1) Debe usar PascalCase para el nombre

    2) SIEMPRE POR LO MENOS DEVUELVEN UN TAG HTML VACÍO ENTRE PARÉNTESIS

    3) El componente puede recibir parámetros. 
       Un parámetro recibido por un componente se llama "prop"

       Los props se reciben "en forma de objeto"
       Generalmente usamos 1 de 2 sintaxis posibles para los props:

    4) Los componentes se deben EXPORTAR
        a. Los componentes comunes (los que están en components) se pueden 
           exportar con "export" o "export default"

        b. Los componentes página (los que están dentro de app) SÓLO SE EXPORTAN CON
           "export default"

    5) Si queremos ejecutar lógica (código) adentro de el componente, va dentro de la funcion
       pero antes del return

    6) Si queremos renderizar (mostrar en pantalla) alguna cosa, debe ir dentro de las etiquetas
       del return

       Si queremos renderizar el CONTENIDO de una variable, la variable se debe poner entre llaves
*/

export function Tarjeta1({ nombre, apellido, edad }) {

    const nombreProp = nombre
    const edadProp = edad

    return (
        <>
            <p>Soy el componente tarjeta</p>
            <p>El contenido de nombreProp es: {nombreProp}</p>
        </>
    )
}

export function Tarjeta2(prop) {

    const nombreProp = prop.nombre
    const edadProp = prop.edad

    return (<></>)
}