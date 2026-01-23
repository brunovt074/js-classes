import React from 'react'
import Swal from 'sweetalert2'

export function BotonSwal() {
    function buttonHandler() {
        Swal.fire({
            title: "Alert mas lindo!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    return (

        <button onClick={buttonHandler} >Boton</button>
    )
}
