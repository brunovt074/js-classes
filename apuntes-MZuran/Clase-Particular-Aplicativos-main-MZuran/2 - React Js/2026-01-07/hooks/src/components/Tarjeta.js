/*
    Hacer un componente que reciba por props:
    nombre, apellido y mensaje

    Y que los renderice en pantalla
*/

export default function Tarjeta( { nombre, apellido, mensaje } ){

    return(
        <div>
            <hr/>
            <b>{nombre} {apellido}</b>
            <p>{mensaje}</p>
        </div>
    )
}