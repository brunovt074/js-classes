fetch('http://localhost:3001/estudiantes',  //Url del backend
        {
            method: 'POST',             // El tipo de request   
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})    // Body (Borrar en caso de hacer GET)
        })

        .then(response => response.json())

        .then(data => {
            // En este punto la respuesta del servidor está en la variable recibida data
            // Acá escribimos lo que sea que querramos hacer con la respuesta
        })