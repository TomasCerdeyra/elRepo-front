import React from "react";
import { Link } from "react-router-dom";
import logoImagen from '../../public/img.png'
import logoArchivo from '../../public/archivo.png'

const MaterialesList = ({ materiales }) => {
  return (
    <ul>
      {materiales.map((material) => (
        <Link key={material._id} to={`/material/${material._id}`}>
          <div className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#ffff] p-3 m-2 flex items-center justify-between gap-5">
            <img
              src={material.tipo === 'imagen' ? logoImagen : logoArchivo}
              alt={material.tipo === 'imagen' ? 'icono Imagen' : 'Icono Archivo'}
              className="h-9 sm:h-9 md:h-12 lg:h-16 xl:h-20 object-contain"
            />
            <p className="flex-1  font-semibold">{material.nombre}</p>
            <p className="flex-1 text-center  text-xs font-medium">{material.anio}</p>
            {/* mas adelante cambiarlo por un icono */}
            <button className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white ">Denunciar</button>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default MaterialesList;
