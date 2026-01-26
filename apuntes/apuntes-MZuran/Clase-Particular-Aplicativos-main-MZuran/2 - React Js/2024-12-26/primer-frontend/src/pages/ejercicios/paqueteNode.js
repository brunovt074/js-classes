import Swal from "sweetalert2"

export default function EjPaquete() {

    
    const botonHandler = () => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }

    return(
    <>
    <h1>Ejercicio SweetAlert</h1>

    <button onClick={botonHandler} >Alert</button>
    </>
    )
}