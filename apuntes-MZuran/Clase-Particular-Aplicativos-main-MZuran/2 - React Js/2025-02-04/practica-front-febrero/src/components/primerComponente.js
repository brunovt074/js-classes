/*
    Los componentes de react no son ni más ni menos que funciones de javascript
    Estas funciones deben cumplir ciertas características especiales:

        1) Comienzan en mayúscula
        2) Como mínimo, siempre devuelven esto: (<></>)

        3) Si reciben parámetros, estos también deben ir entre llaves. 
           Estos parámetros ahora los llamaremos "props"
           Los componentes página NO reciben props

        4) Deben exportarse.
            a. Si es un componente común, se puede exportar de cualquier forma
            b. Si es un componente página, se debe exportar con "export default"

        5) Si se quiere anidar lógica en el componente, debe ir dentro de la funcion pero antes del return

        6) Las variables (normales) NO PUEDEN CAMBIAR SU VALOR JAMÁS

        7) Para pasarles props a los componentes comunes, se debe hacer de la siguiente forma:
           <Componente nombreDelProp={valorDelProp} nombreDelProp={valorDelProp} />
*/

export function PrimerComponenteComun({nombre, apellido}) {

    // Acá se escribe JavaScript

    return (
    <>
        <h3>Soy el primer Componente</h3>
        <p>Me llamo {nombre} y mi appelido es {apellido}</p>
    </>
    )
}