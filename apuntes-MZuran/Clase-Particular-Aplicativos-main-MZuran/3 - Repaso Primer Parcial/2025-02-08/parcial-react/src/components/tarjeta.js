import React from 'react';

export function Tarjeta({ Nombre, Especie, Status, Imagen }) {
  return (
    <>
      <div className="tarjeta">
        <img src={Imagen} alt={Nombre} className="tarjeta-imagen" />
        <div className="tarjeta-info">
          <h3>{Nombre}</h3>
          <p>{Especie}</p>
          <p>Status: {Status}</p>
        </div>
      </div>

      <style jsx>{`
        .tarjeta {
          background-color: #f5f5f5;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 250px;
          text-align: center;
          margin: 20px;
        }

        .tarjeta-imagen {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .tarjeta-info {
          padding: 10px;
        }

        .tarjeta-info h3 {
          margin: 10px 0;
          font-size: 18px;
        }

        .tarjeta-info p {
          margin: 5px 0;
          color: #555;
        }
      `}</style>
    </>
  );
}
