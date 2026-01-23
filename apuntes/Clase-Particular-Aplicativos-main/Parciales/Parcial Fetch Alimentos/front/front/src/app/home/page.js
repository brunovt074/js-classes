"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alimento from "../components/Alimento";

function ListaAlimentos() {
  const [alimentos, setAlimentos] = useState([]);
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/alimentos")
      .then(res => res.json())
      .then(data => setAlimentos(data.alimentos));
  }, []);

  return (
    <div>
      <h2>Lista de alimentos</h2>

      {alimentos.map((a, index) => (
        <Alimento
          key={index}
          nombre={a}
          onClick={() => navigate(`/detalle/${a}`)}
        />
      ))}

      <input
        type="text"
        placeholder="Nombre del alimento"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <button onClick={() => navigate(`/detalle/${nombre}`)}>
        Buscar
      </button>
    </div>
  );
}

export default ListaAlimentos;
