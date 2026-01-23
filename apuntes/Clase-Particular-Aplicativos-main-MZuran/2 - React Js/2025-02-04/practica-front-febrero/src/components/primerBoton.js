export function PrimerBoton() {

    function buttonHandler() {
        console.log("Me Hiciste Click")
    }

    // Para asignarle una función al click de un botón, le debemos pasar
    // el PROP "onClick"

    return (
    <>
    <button onClick={buttonHandler} >Haceme Click</button>
    </>
    )
}