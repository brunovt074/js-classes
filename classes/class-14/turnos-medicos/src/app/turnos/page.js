"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import io from "socket.io-client";
import Turno from "@/components/Turno";
import AgendarNuevoTurno from "@/components/AgendarNuevoTurno";

let socket;

export default function TurnosPage() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const alumnoId = searchParams.get("alumnoId");

  const [turno, setTurno] = useState(null);
  const [numeroTurno, setNumeroTurno] = useState("");
  const [conectado, setConectado] = useState(false);
  const [mensajeFinal, setMensajeFinal] = useState("");

  useEffect(() => {
    socket = io("http://localhost:4000");

    socket.on("joined_OK_turnos", (data) => {
      setTurno(data);
      setConectado(true);
      setMensajeFinal("");
    });

    socket.on("nueva_reserva", (data) => {
      setTurno(data);
    });

    socket.on("turnos_completos", (data) => {
      setTurno(null);
      setConectado(false);
      setMensajeFinal("Los turnos del día se han completado.");
    });

    return () => socket.disconnect();
  }, []);

  const unirseASala = () => {
    socket.emit("join_turnos", { alumnoId });
  };

  const reservarTurno = () => {
    if (numeroTurno <= turno.turnoActual) {
      alert("El turno debe ser mayor al actual");
      return;
    }

    socket.emit("realizar_reserva", {
      paciente: username,
      numeroTurno,
    });
  };

  return (
    <div style={{ padding: 30 }}>
      {" "}
      Sala de Turnos
      {!conectado && (
        <button onClick={unirseASala}>Unirse a la sala de turnos</button>
      )}
      {mensajeFinal && <p>{mensajeFinal}</p>}
      {conectado && turno && (
        <>
          <p>Número de sala: {alumnoId}</p>
          <Turno {...turno} />
          <AgendarNuevoTurno
            onChangeNumeroTurno={(e) => setNumeroTurno(e.target.value)}
            onClickRealizarReservaDeTurno={reservarTurno}
          />
        </>
      )}
    </div>
  );
}
