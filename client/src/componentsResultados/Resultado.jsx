import React from "react";

const ResultadosComponent = ({ vuelos }) => {
  return (
    <div className="results">
      {vuelos.length > 0 ? (
        <ul>
          {vuelos.map((vuelo) => (
            <li key={vuelo.id}>
              {vuelo.origen} &gt; {vuelo.destino} ({vuelo.fecha_salida})
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron vuelos.</p>
      )}
    </div>
  );
};

export default ResultadosComponent;