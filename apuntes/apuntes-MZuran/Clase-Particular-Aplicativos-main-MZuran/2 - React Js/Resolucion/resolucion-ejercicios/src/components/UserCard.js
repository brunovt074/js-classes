export function UserCard({name, age, isPremium}) {

    let tipoDeUsuario

    if (isPremium == true) {
        tipoDeUsuario = "Premium"
    }   else    {
        tipoDeUsuario = "Basico"
    }

    return (
    <>
    <p> Hola, me llamo {name} y tengo {age} años. <b> Usuario {tipoDeUsuario} </b> </p>
    </>
    )
}