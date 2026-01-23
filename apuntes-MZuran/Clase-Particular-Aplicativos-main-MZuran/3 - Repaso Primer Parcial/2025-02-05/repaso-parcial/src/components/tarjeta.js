// Hay que recordar que los componentes comunes SIEMPRE deben comenzar con mayúscula

import React from "react";

export function Tarjeta({ Nombre, Especie, Status, Imagen }) {
    return (
        <div style={styles.card}>
            <p>{Nombre}</p>
            <p><b>{Status}</b> {Especie}</p>
            <img src={Imagen} alt={Nombre} style={styles.image} />
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#fff"
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px",
        maxHeight: "150px", // Limita la altura de la imagen
        objectFit: "cover"
    }
};
