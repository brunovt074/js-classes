"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Inicio() {
  const [votante, setVotante] = useState(""); // Input "votante" [cite: 195]
  const [alumnoId, setAlumnoId] = useState(""); // Input "alumnoId" [cite: 196]
  const [error, setError] = useState("");
  const router = useRouter();

  const acceder = () => {
    // Validación: Mínimo 3 caracteres [cite: 200]
    if (votante.length < 3) {
      setError("El nombre debe tener al menos 3 letras");
      return;
    }
    // Redirección con Query Params [cite: 204]
    router.push(`/votacion?votante=${votante}&alumnoId=${alumnoId}`);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Sistema de Votación</h1>
      
      <input 
        placeholder="Nombre Votante" 
        value={votante} 
        onChange={e => setVotante(e.target.value)} 
      />
      
      <input 
        type="number" 
        placeholder="ID Alumno" 
        value={alumnoId} 
        onChange={e => setAlumnoId(e.target.value)} 
      />

      {/* Conditional Rendering del error [cite: 201] */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={acceder}>Acceder a la Votación</button>
    </div>
  );
}