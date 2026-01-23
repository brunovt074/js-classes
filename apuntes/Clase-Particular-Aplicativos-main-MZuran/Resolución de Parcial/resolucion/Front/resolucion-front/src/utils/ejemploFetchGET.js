const fetchFuncion = async () => {
    const url = "http://localhost:4000" // Aquí va el url del backend
    const urlFetch = url + "/personas"
    const metodo = "GET" // puede ser "GET", "POST", etc

    try {
        const response = await fetch(urlFetch, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();

        /*
            ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
            La respuesta está guardada en la variable (que no es de estado) responseData
        */

        console.log('Respuesta del servidor:', responseData);

    } catch (error) { console.error('Hubo un error en la solicitud:', error); }
}

fetchFuncion()