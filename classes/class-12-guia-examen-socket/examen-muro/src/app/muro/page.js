"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import io from "socket.io-client";

import Comentario from "@/components/Comentario";
import FormularioComentario from "@/components/FormularioComentario";

let socket;

export default function Muro() {
  const params = useSearchParams();
  const usuario = params.get("usuario");
  const alumnoId = params.get("alumnoId");

  const [comentarios, setComentarios] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [conectado, setConectado] = useState(false);
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    socket = io("http://localhost:4000");

    socket.on("joined_OK_muro", (data) => {
      setComentarios(data);
      setConectado(true);
    });

    socket.on("nuevo_comentario", (comentario) => {
      setComentarios((prev) => [...prev, comentario]);
      setHistorial((prev) => [...prev, comentario]);
      setTexto("");
    });

    socket.on("muro_lleno", () => {
      alert("Muro lleno");
      setComentarios([]);
      setHistorial([]);
      setConectado(false);
    });

    return () => socket.disconnect();
  }, []);

  const unirse = () => {
    if (!alumnoId) {
    alert("Falta el ID de alumno");
    return;
    }
    
    socket.emit("join_muro", { alumnoId });
  };

  const publicar = () => {
    if (texto.length < 10 || texto.length > 200) {
      alert("Texto inválido");
      return;
    }

    if (!categoria) {
      alert("Seleccione categoría");
      return;
    }

    socket.emit("publicar_comentario", {
      usuario,
      texto,
      categoria,
    });
  };

  const stats = {
    total: historial.length,
    info: historial.filter((c) => c.categoria === "Info").length,
    pregunta: historial.filter((c) => c.categoria === "Pregunta").length,
    respuesta: historial.filter((c) => c.categoria === "Respuesta").length,
  };

  return (
    <div>
      <h1>Muro</h1>

      {!conectado ? (
        <button onClick={unirse}>Unirse al Muro</button>
      ) : (
        <>
          {comentarios.map((c) => (
            <Comentario key={c.id} {...c} />
          ))}

          <FormularioComentario
            onChangeTexto={(e) => setTexto(e.target.value)}
            onChangeCategoria={(e) => setCategoria(e.target.value)}
            onClickPublicar={publicar}
            textoActual={texto}
          />

          <h3>Historial</h3>
          {historial.length === 0 ? (
            <p>No se recibieron comentarios aún.</p>
          ) : (
            historial.map((c, i) => (
              <p key={i}>
                {c.usuario} - {c.categoria} - {c.texto}
              </p>
            ))
          )}

          <h3>Estadísticas</h3>
          <p>Total: {stats.total}</p>
          <p>Info: {stats.info}</p>
          <p>Pregunta: {stats.pregunta}</p>
          <p>Respuesta: {stats.respuesta}</p>
        </>
      )}
    </div>
  );
}