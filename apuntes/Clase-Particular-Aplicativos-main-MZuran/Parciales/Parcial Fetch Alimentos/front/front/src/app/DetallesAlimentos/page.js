"use client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetalleAlimento from "../components/DetalleAlimento";

function DetallePage() {
  const { nombre } = useParams();
  const [detalle, setDetalle] = useState(null);
  const [stock, setStock] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/detalleAlimento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre })
    })
      .then(res => res.json())
      .then(data => setDetalle(data.detalle));
  }, [nombre]);

  function actualizarStock() {
    fetch("http://localhost:4000/stockAlimento", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, stock })
    }).then(() => alert("Stock actualizado"));
  }

  if (!detalle || detalle === "No se encontro el alimento") {
    return <p>No se encontró el alimento</p>;
  }

  return (
    <div>
      <DetalleAlimento
        nombre={detalle.nombre}
        stock={detalle.stock}
        precio={detalle.precio}
      />

      <input
        type="number"
        placeholder="Nuevo stock"
        value={stock}
        onChange={e => setStock(e.target.value)}
      />
      <button onClick={actualizarStock}>Actualizar stock</button>
    </div>
  );
}

export default DetallePage;
