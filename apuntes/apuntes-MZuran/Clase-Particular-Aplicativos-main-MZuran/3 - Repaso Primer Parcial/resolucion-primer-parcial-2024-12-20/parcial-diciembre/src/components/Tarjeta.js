import React from 'react';

export function Tarjeta({ nombre, raza, foto, status }) {
    // Estilos CSS en línea
    const tarjetaEstilo = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        margin: '10px',
    };

    const imagenEstilo = {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '10px',
    };

    const estadoEstilo = {
        padding: '5px 10px',
        backgroundColor: status === 'activo' ? '#4CAF50' : '#f44336',
        color: 'white',
        borderRadius: '5px',
        marginTop: '10px',
    };

    return (
        <div style={tarjetaEstilo}>
            <img src={foto} alt={nombre} style={imagenEstilo} />
            <h2>{nombre}</h2>
            <p>{raza}</p>
            <div style={estadoEstilo}>{status}</div>
        </div>
    );
}
