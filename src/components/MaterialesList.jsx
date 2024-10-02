import React from "react";
import { Link } from "react-router-dom";

const MaterialesList = ({ materiales }) => {
  return (
    <ul>
      {materiales.map((material) => (
        <Link key={material._id} to={`/material/${material._id}`}>
          <div className="bg-green-200 p-3 m-2 flex items-center justify-between">
            <p className="flex-1">{material.nombre}</p>
            <p className="flex-1 text-center">Año: {material.anio}</p>
            {/* mas adelante cambiarlo por un icono */}
            <button className="flex-1 text-right">Denunciar</button>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default MaterialesList;
