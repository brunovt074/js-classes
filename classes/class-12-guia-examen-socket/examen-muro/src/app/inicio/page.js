"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Inicio() {
  const [usuario, setUsuario] = useState("");
  const [alumnoId, setAlumnoId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const irAlMuro = () => {
    if (usuario.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return;
    }
    router.push(`/muro?usuario=${usuario}&alumnoId=${alumnoId}`);
  };
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Muro de Comentarios</h1>
      <input
        placeholder="Nombre de usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        placeholder="ID Alumno"
        value={alumnoId}
        onChange={(e) => setAlumnoId(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={irAlMuro}>Ir al Muro</button>
    </div>
  );
}
