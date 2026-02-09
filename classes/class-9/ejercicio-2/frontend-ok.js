const URL_API = 'http://localhost:4000/tareas';

function traerTareas() {
    fetch(URL_API)
        .then(r => r.json())
        .then(data => {
            const tabla = document.getElementById('tablaTareas');
            const select = document.getElementById('selectTareas');

            tabla.innerHTML = '';
            select.innerHTML = '';

            data.tareas.forEach(t => {
                tabla.innerHTML += `
                    <tr>
                        <td>${t.id}</td>
                        <td>${t.descripcion}</td>
                        <td>${t.estado}</td>
                    </tr>
                `;
                
            select.innerHTML += `
                    <option value="${t.id}">
                        ${t.descripcion}
                    </option>
                `;
            });
        });
}

function crearTarea() {
    const descripcion = document.getElementById('descripcionInput').value;
    const estado = document.getElementById('estadoInput').value;

    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descripcion, estado })// BUG 1 (POST): falta enviar el estado
    })
    .then(r => r.json())
    .then(() => traerTareas());
}

function modificarTarea() {
    const id = document.getElementById('selectTareas').value;
    const nuevoEstado = document.getElementById('nuevoEstadoInput').value;

    fetch(URL_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, nuevoEstado })// BUG 2: nombre de propiedad incorrecto
    })
    .then(r => r.json())
    .then(() => traerTareas());
}

function eliminarTarea() {
    const id = document.getElementById('selectTareas').value;

    fetch(URL_API, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }) // BUG 3 (DELETE): no se envía el body
    })
    .then(r => r.json())
    .then(() => traerTareas());
}

traerTareas();

