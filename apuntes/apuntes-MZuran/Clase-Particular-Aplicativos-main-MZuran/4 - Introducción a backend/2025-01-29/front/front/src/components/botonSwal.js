import React from 'react'
import Swal from 'sweetalert2';

function BotonSwal() {

    function buttonHandler() {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }

    return (
        <button onClick={buttonHandler} >Saludame</button>
    )
}

export default BotonSwal
