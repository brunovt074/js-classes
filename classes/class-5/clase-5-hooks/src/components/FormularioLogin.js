"use client";
import { useState } from "react";
import Boton from "./Boton";
import CampoTexto from "./CampoTexto";

export default function FormularioLogin() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    
    // NUEVO: Estado para el checkbox
    const [mostrarAyuda, setMostrarAyuda] = useState(false);

    const manejarClick = () => {
        alert("Ingresando...");
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "300px" }}>
            <h2>Iniciar Sesión</h2>
            
            <CampoTexto 
                label="Usuario" type="text" 
                value={usuario} onChange={(e) => setUsuario(e.target.value)}
            />

            <CampoTexto 
                label="Contraseña" type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
            />

            {/* --- ZONA NUEVA: CHECKBOX --- */}
            <div style={{ margin: "10px 0" }}>
                <input 
                    type="checkbox" 
                    onChange={() => setMostrarAyuda(!mostrarAyuda)} 
                />
                <label> Necesito Ayuda</label>
            </div>

            {/* --- ZONA NUEVA: CONDICIONAL --- */}
            {/* Si mostrarAyuda es VERDADERO, muestra el párrafo rojo. Si no, no muestra nada */}
            { 
                mostrarAyuda && (
                    <p style={{ color: "red" }}>Ojo: No compartas tu clave con nadie.</p>
                )
            }

            <Boton text="Ingresar" onClick={manejarClick} />
        </div>
    );
}