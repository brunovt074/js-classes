export default function Tarjeta({ nombre }) {

    return (
        <>
            <h4>Tarjeta</h4>
            <p>Mi nombre es: { nombre }</p>
        </>
    )
}

/*
    export vs export default

    export default se usa cuando ÚNICAMENTE exportamos una sóla cosa por archivo
    export puede exportar varias cosas en un mismo archivo

    Los componentes página SÓLO pueden usar export default
    Los componentes comunes pueden usar cualquiera de los dos
*/