"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Inicio() {
  // 1. Estados para los inputs y errores
  const [empleado, setEmpleado] = useState("");
  const [alumnoId, setAlumnoId] = useState("");
  const [error, setError] = useState("");

  // 2. Inicializamos el Router para navegar
  const router = useRouter();

  // 3. Función del botón "Acceder"
  const manejarIngreso = () => {
    // Requisito: Validar que el nombre tenga al menos 3 caracteres
    if (empleado.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return; 
    }

    // Si pasa la validación, navegamos pasando datos en la URL (Query Params)
    router.push(`/parking?empleado=${empleado}&alumnoId=${alumnoId}`);
  };

  return (
    <div style={{ padding: "50px", maxWidth: "400px", fontFamily: "sans-serif" }}>
      <h1>Sistema de Parking</h1>

      {/* Input Empleado */}
      <div style={{ marginBottom: "15px" }}>
        <label>Nombre Empleado:</label>
        <input 
          type="text" 
          placeholder="Ingrese nombre"
          value={empleado}
          onChange={(e) => setEmpleado(e.target.value)}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Input ID Alumno */}
      <div style={{ marginBottom: "15px" }}>
        <label>ID Alumno:</label>
        <input 
          type="number" 
          placeholder="Nro de lista"
          value={alumnoId}
          onChange={(e) => setAlumnoId(e.target.value)}
          style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Requisito: Renderizado Condicional del Error */}
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>Error: {error}</p>
      )}

      {/* Botón de Acceso */}
      <button 
        onClick={manejarIngreso}
        style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", cursor: "pointer" }}
      >
        Acceder al Parking
      </button>
    </div>
  );
}