import React from 'react'

export function BotonAñadirPersona() {

    function botonHandler() {

        const customFetch = async () => {
            const url = "http://localhost:4000"
            const urlFetch = url + "/personas"
            const metodo = "POST" // puede ser "GET", "POST", etc
            const reqBody = { nombre: prompt("Ingrese nombre"), edad: prompt("Ingrese edad"), ciudad: prompt("Ingrese ciudad") }; // Modificar
        
            try {
                const response = await fetch(urlFetch, {
                    method: metodo,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqBody),
                });
        
                const responseData = await response.json();
        
                /*
                    ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
                */
        
                console.log('Respuesta del servidor:', responseData);
        
            } catch (error) { console.error('Hubo un error en la solicitud:', error); }
        }
        
        customFetch()

        location.reload()
    }

    return (
        <button onClick={botonHandler} >Añadir persona</button>
    )
}
