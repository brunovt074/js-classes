/*
    1)  Tiene que retornar como mínimo un HTML vacío
    2)  Se debe exportar
    3)  Puede recibir props entre los paréntesis agregando llaves
    4)  Comienzan con mayúscula
*/

// Tiene que recibir nombre, imagen, raza

// Dentro de img src={} podemos meter la ruta a nuestra carpeta public o si no metemos un url de internet

export const Tarjeta = ({nombre, imagen, raza}) => {

    // La lógica iría por acá

    return (
    <>
    <p>Nombre: {nombre}</p>
    <p>Raza: {raza}</p>
    <img src={imagen}/>
    </>
    )
}