// URL de nuestro servidor local
const URL_API = 'http://localhost:3001/libros';

// --- PUNTO 3: FETCH GET (Traer y mostrar en tabla) ---
function traerLibros() {
    fetch(URL_API)
        .then(response => response.json())
        .then(data => {
            // El backend nos devolvía un objeto { libros: [...] }
            const lista = data.libros; 
            
            const tbody = document.getElementById('tablaCuerpo');
            const select = document.getElementById('selectLibros');
            const selectDelete = document.getElementById('selectLibrosDelete');
            
            tbody.innerHTML = '';
            select.innerHTML = '';
            if (selectDelete) selectDelete.innerHTML = '';
            
            lista.forEach(libro => {
                tbody.innerHTML += `
                    <tr>
                        <td>${libro.nombre}</td>
                        <td>${libro.valoracion}</td>
                    </tr>
                `;

                const opcion = document.createElement('option');
                opcion.text = libro.nombre;
                opcion.value = libro.nombre;
                select.appendChild(opcion);

                if (selectDelete) {
                    const opcionDelete = document.createElement('option');
                    opcionDelete.text = libro.nombre;
                    opcionDelete.value = libro.nombre;
                    selectDelete.appendChild(opcionDelete);
                }
            });
        })
        .catch(error => console.error("Error:", error));
}


// --- PUNTO 2: FETCH POST (Guardar nuevo) ---
function guardarLibro() {
    const nombre = document.getElementById('nombreInput').value;
    const valoracion = document.getElementById('valoracionInput').value;

    fetch(URL_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombre, valoracion: valoracion })
    })
    .then(res => res.json())
    .then(data => {
        alert("Guardado!");
        traerLibros(); // Recargar la tabla automáticamente
    });
}

// --- PUNTO 5: FETCH PUT (Modificar valoración) ---
// "Deberá leer el nombre seleccionado de un select y dar un input..."
function modificarValoracion() {
    const nombreSeleccionado = document.getElementById('selectLibros').value;
    const nuevoNombre = document.getElementById('nuevoNombreInput').value;
    const nuevaValoracion = document.getElementById('nuevaValInput').value;
    console.log("Modificando:", { nombreSeleccionado, nuevoNombre, nuevaValoracion });
    fetch(URL_API, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            nombre: nombreSeleccionado, 
            nuevoNombre: nuevoNombre,
            nuevaValoracion: nuevaValoracion 
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Modificado!");
        traerLibros(); // Ver el cambio en la tabla
    });
}

// Cargar los libros apenas inicia la página
traerLibros();

function borrarLibro() {
    const nombreSeleccionado = document.getElementById('selectLibrosDelete').value;

    if (!nombreSeleccionado) {
        alert('Seleccioná un libro');
        return;
    }

    fetch(URL_API, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: nombreSeleccionado })
    })
    .then(res => res.json())
    .then(data => {
        alert('Libro borrado');
        traerLibros();
    })
    .catch(error => console.error('Error:', error));
}