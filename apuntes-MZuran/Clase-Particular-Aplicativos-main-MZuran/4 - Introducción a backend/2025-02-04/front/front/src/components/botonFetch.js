import React from 'react'
import { useEffect } from 'react'

/*
    Las peticiones se deben hacer de MANERA CONTROLADA
    Para CONTROLAR la ejecucion de una funcion, usamos useEffect

    useEffect(
        <callback>,
        <array de dependencias>
    )

    (Recordar que el array de dependencias vacio quiere decir que solo se ejecuta 1 vez al principio)

    También, otro modo que tenemos de controlar la ejecución de un callback es utilizando el prop
    onClick

    onClick={<callback>}
*/

export function BotonFetch() {

    function botonHandler() {

        const customFetch = async () => {
            const url = "http://localhost:4000"
            const urlFetch = url + "/pruebaReq?nombre=matias&apellido=zuran"
            const metodo = "POST" // puede ser "GET", "POST", etc
            const reqBody = { nombre: "Juan", edad: 30 }; // Modificar
        
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

    }

    return (
        <button onClick={botonHandler} >Hacer Fetch</button>
    )
}
