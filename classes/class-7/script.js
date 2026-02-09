const select = document.getElementById("selectUsuarios");

// 2. Hacemos el pedido a la URL (API Real)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // A. Llega la respuesta "cruda", la convertimos a JSON
        return response.json();
    })
    .then(data => {
        // B. Acá ya tenemos los datos listos (el array de usuarios)
        console.log("Datos recibidos:", data);
        
        // C. Llamamos a una función para dibujar las opciones
        llenarSelect(data);
    })
    .catch(error => {
        console.error("Error cargando:", error);
        select.innerHTML = '<option>Error al cargar</option>';
    });

// 3. Función encargada de dibujar en pantalla
function llenarSelect(usuarios) {
    
    // Limpiamos la opción de "Cargando..."
    select.innerHTML = '<option value="">-- Seleccione un usuario --</option>';

    // Recorremos el array (similar al map, pero usamos forEach)
    usuarios.forEach(usuario => {
        
        // A. Creamos la etiqueta <option> en el aire (memoria)
        const opcion = document.createElement("option");
        
        // B. Le ponemos el valor (ID) y el texto (Nombre)
        opcion.value = usuario.id;
        opcion.textContent = usuario.name + " - " + usuario.email;
        
        // C. La "enchufamos" adentro del <select>
        select.appendChild(opcion);
    });
}

