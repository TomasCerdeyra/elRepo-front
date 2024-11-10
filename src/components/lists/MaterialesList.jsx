import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { seleccionarLogo } from "../../utils/functions.js";
import logoReport from '../../assets/logos/exclamation-mark_3572081.png'
import logoReport2 from '../../assets/logos/file_5518183.png'
import logoReport3 from '../../assets/logos/information_17002086.png'
import logoReport4 from '../../assets/logos/icon-warning-24.png'

const MaterialesList = ({ materiales }) => {

  return (
    <div className="mx-[3%] sm:mx-[10%]">
      {materiales.length === 0 ? (
        <p className="text-center text-lg font-medium text-gray-500 mt-10">
          No hay aportes disponibles.
        </p>
      ) : (
        <ul>
          {materiales.map((material) => {
            const { src, alt } = seleccionarLogo(material.tipo)
            return (
              <div
                key={material._id}
                className="hover:bg-[#EFF3F5] ring-4 ring-[#EFF3F5] hover:ring-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] m-2 flex items-center justify-between py-3 px-4"
              >
                <Link to={`/material/${material._id}`} className="flex flex-col sm:flex-row justify-center items-center w-full gap-3">
                  <img
                    src={src}
                    alt={alt}
                    className="h-9 sm:h-9 md:h-[3rem] object-contain"
                  />
                  <p className="sm:flex-1 font-semibold text-xl truncate">{material.nombre}</p>

                  {/* Contenedor para el año y el logo de alerta */}
                  <div className="flex flex-col sm:flex-row sm:flex-1 items-center space-x-3">
                    <p className="sm:flex-1 text-center text-lg font-medium mb-2">Año: {material.anio}</p>
                    {material.denuncias > 0 && (
                      <div className="sm:flex-1 flex justify-end">
                        <img
                          src={logoReport4}
                          alt=""
                          title="Aporte Reportado"
                          className="h-10 w-10"
                        />
                      </div>
                    )}
                    {material.denuncias === 0 && (
                      <div className="sm:flex-1 ">
                      </div>
                    )}
                  </div>
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
