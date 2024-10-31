import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { seleccionarLogo } from "../../utils/functions";

const MaterialesList = ({ materiales }) => {

  return (
    <div className="mx-5 lg:mx-20 xl:mx-20">
      {materiales.length === 0 ? (
        <p className="text-center text-lg font-medium text-gray-500 mt-10">
          No hay aportes disponibles.
        </p>
      ) : (
        <ul>
          {materiales.map((material) => {
            const { src, alt } = seleccionarLogo(material.tipo)
            return (
              <div key={material._id} className="hover:bg-[#EFF3F5] ring-4 ring-[#EFF3F5] hover:ring-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] m-2 flex items-center justify-between">
                <Link to={`/material/${material._id}`} className="flex items-center justify-between w-full p-3 gap-3">
                  <img
                    src={src}
                    alt={alt}
                    className="h-9 sm:h-9 md:h-12 lg:h-16 xl:h-20 object-contain"
                  />
                  <p className="flex-1 font-semibold text-xl">{material.nombre}</p>
                  <p className="flex-1 text-center text-lg font-medium">Año: {material.anio}</p>
                </Link>
              </div>
            )
          })}
        </ul>
      )}
    </div>
  );
};

export default MaterialesList;
