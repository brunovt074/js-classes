"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import io from "socket.io-client";
import ResultadosVotacion from "@/components/ResultadosVotacion"; // Importamos el componente de lista

let socket;

export default function VotacionPage() {
  const searchParams = useSearchParams();
  const votante = searchParams.get("votante");
  const alumnoId = searchParams.get("alumnoId");

  // Estado para guardar TODA la info de la votación
  const [votacion, setVotacion] = useState(null); 
  const [conectado, setConectado] = useState(false);

  useEffect(() => {
    // 1. Conexión [cite: 261]
    socket = io("http://localhost:4000");

    // 2. Escuchar ingreso exitoso [cite: 268]
    socket.on("joined_OK_votacion", (data) => {
      setVotacion(data.votacion); // Guardamos la info inicial
      setConectado(true);
    });

    // 3. Escuchar actualizaciones en vivo [cite: 274]
   socket.on("votacion_actualizada", (data) => {
      setVotacion(data.votacion); // Actualizamos gráficos
    });

    return () => socket.disconnect();
  }, []);

  const conectar = () => {
    // Emitir join_votacion con alumnoId [cite: 267]
    socket.emit("join_votacion", { alumnoId });
  };

  const votar = (opcionElegida) => {
    // Emitir voto con votante y opción ("A", "B", "C" o "D") [cite: 271]
    socket.emit("emitir_voto", { votante, opcion: opcionElegida });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sala de Votación: {alumnoId}</h1>
      <p>Usuario: {votante}</p>

      {!conectado ? (
        <button onClick={conectar}>Conectarse a la Votación</button>
      ) : (
        <>
          {/* Muestra la Pregunta [cite: 279] */}
          <h2>{votacion?.pregunta}</h2>
          <p>Total Votos: {votacion?.totalVotos}</p>

          <hr />

          {/* BOTONES DE VOTACIÓN [cite: 270] */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
             <button onClick={() => votar("A")}>Votar Opción A</button>
             <button onClick={() => votar("B")}>Votar Opción B</button>
             <button onClick={() => votar("C")}>Votar Opción C</button>
             <button onClick={() => votar("D")}>Votar Opción D</button>
          </div>

          <hr />

          {/* COMPONENTE DE RESULTADOS (Con .map adentro) [cite: 274] */}
          {votacion && (
             <ResultadosVotacion opciones={votacion.opciones} />
          )}
        </>
      )}
    </div>
  );
}