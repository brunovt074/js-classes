export default function EspacioParking({ numero, tipo, estado, patente }) {
    
    // Estilo condicional: Verde si está libre, Rojo si está ocupado
    const estiloCard = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        backgroundColor: estado === "libre" ? "#d4edda" : "#f8d7da", // Verde o Rojo clarito
        textAlign: "center",
        width: "200px"
    };

    return (
        <div style={estiloCard}>
            <h3>Espacio N°: {numero}</h3>
            
            {/* LÓGICA PEDIDA EN EL EXAMEN (Punto 3a) */}
            
            {estado === "libre" ? (
                // Si está libre:
                <p style={{ color: "green", fontWeight: "bold" }}>LIBRE</p>
            ) : (
                // Si está ocupado:
                <div>
                    <p style={{ color: "red", fontWeight: "bold" }}>OCUPADO</p>
                    <p>Patente: {patente}</p>
                    
                    {/* Mostrar Tipo solo si es auto o moto */}
                    {(tipo === "auto" || tipo === "moto") && (
                        <p>Tipo: {tipo}</p>
                    )}
                </div>
            )}
        </div>
    );
}