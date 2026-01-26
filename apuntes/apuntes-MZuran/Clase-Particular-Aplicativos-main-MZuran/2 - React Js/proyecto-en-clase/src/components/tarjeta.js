/*
    Quiero que tarjeta reciba por prop un nombre, un apellido y una edad
*/

export function Tarjeta({nombre, apellido, edad}) {

    return(
        <>
            <p>Hola mi nombre es {nombre} {apellido} y tengo {edad} años</p>
        </>
    )
}