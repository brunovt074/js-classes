export default function FormularioVehiculo({ 
    onClickEntrada, 
    onClickSalida, 
    onChangePatente, 
    onChangeSelectTipo 
}) {
    return (
        <div style={{ border: "2px solid #0070f3", padding: "20px", marginTop: "20px", borderRadius: "10px" }}>
            <h2>Control de Vehículos</h2>
            
            {/* --- SECCIÓN ENTRADA (Punto 3b.2) --- */}
            <div style={{ marginBottom: "20px" }}>
                <h4>Registrar Entrada</h4>
                
                <input 
                    type="text" 
                    placeholder="Patente" 
                    onChange={onChangePatente} 
                    style={{ padding: "5px", marginRight: "10px" }}
                />
                
                <select onChange={onChangeSelectTipo} style={{ padding: "5px", marginRight: "10px" }}>
                    <option value="auto">Auto</option>
                    <option value="moto">Moto</option>
                </select>
                
                <button onClick={onClickEntrada} style={{ padding: "5px 10px", cursor: "pointer" }}>
                    Ingresar Vehículo
                </button>
            </div>

            <hr />

            {/* --- SECCIÓN SALIDA (Punto 3b.2) --- */}
            <div>
                <h4>Registrar Salida</h4>
                
                <input 
                    type="text" 
                    placeholder="Patente a liberar" 
                    onChange={onChangePatente} 
                    style={{ padding: "5px", marginRight: "10px" }}
                />
                
                <button onClick={onClickSalida} style={{ padding: "5px 10px", cursor: "pointer", backgroundColor: "#ff4d4f", color: "white", border: "none" }}>
                    Registrar Salida
                </button>
            </div>
        </div>
    );
}
