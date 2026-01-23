// Hacer un componente común que reciba los siguientes props y los renderice:
/*
    nombre
    estado
    responsable
*/

/*
    Se recomienda escribir todo dentro de etiquetas <p></p>
    Para poner un salto de línea utilizar <br/>
    Para poner negrita utilizar <b><b/>
*/

export default function Tarea({nombre, estado, responsable}) {
    return(
        <>
            <p>{nombre} <br/> {estado} <br/> {responsable}</p>
        </>
    )
}