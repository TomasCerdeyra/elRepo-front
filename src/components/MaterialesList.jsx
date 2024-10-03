import React from "react";
import { Link } from "react-router-dom";

const MaterialesList = ({ materiales }) => {
  return (
    <ul>
      {materiales.map((material) => (
        <Link key={material._id} to={`/material/${material._id}`}>
          <div className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] p-3 m-2 flex items-center justify-between">
            <p className="flex-1 text-white font-semibold">{material.nombre}</p>
            <p className="flex-1 text-center text-white text-xs font-medium">{material.anio}</p>
            {/* mas adelante cambiarlo por un icono */}
            <button className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white ">Denunciar</button>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default MaterialesList;
