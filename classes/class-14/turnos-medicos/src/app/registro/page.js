"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Registro() {
  const [username, setUsername] = useState("");
  const [alumnoId, setAlumnoId] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const irATurnos = () => {
    if (username.length < 4) {
      setError("El nombre debe tener al menos 4 caracteres");
      return;
    }

    router.push(`/turnos?username=${username}&alumnoId=${alumnoId}`);
  };

  return (
    <div style={{ padding: 40 }}>
      {" "}
      Registro de Paciente
      <input
        type="text"
        placeholder="Nombre del paciente"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="ID Alumno"
        value={alumnoId}
        onChange={(e) => setAlumnoId(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={irATurnos}>Ir a Turnos</button>
    </div>
  );
}
