import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { reportMaterial } from "../services/materialesServices";
import logoImagen from '../../public/img.png'
import logoArchivo from '../../public/archivo.png'


const MaterialesList = ({ materiales }) => {
  const MySwal = withReactContent(Swal)

  const handleDenuncia = (materialID) => {
    MySwal.fire({
      title: '¿Este material contiene contenido erróneo u ofensivo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(async (respuesta) => {
      if (respuesta.isConfirmed) {
        try {
          const data = await reportMaterial(materialID)
          console.log(data);
          MySwal.fire(
            'Denunciado!',
            data,
            'success'
          );

        } catch (error) {
          console.error('Error al denunciar el material:', error);
        }
      }
    })
  }

  return (
    <ul className="mx-5 lg:mx-20 xl:mx-20">
      {materiales.map((material) => (

        <div key={material._id} className="hover:bg-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] m-2 flex items-center justify-between">
          <Link to={`/material/${material._id}`} className="flex items-center justify-between w-full p-3 gap-3">
            <img
              src={material.tipo === 'imagen' ? logoImagen : logoArchivo}
              alt={material.tipo === 'imagen' ? 'icono Imagen' : 'Icono Archivo'}
              className="h-9 sm:h-9 md:h-12 lg:h-16 xl:h-20 object-contain"
            />
            <p className="flex-1  font-semibold">{material.nombre}</p>
            <p className="flex-1 text-center  text-xs font-medium">{material.anio}</p>
          </Link>
          <button onClick={() => handleDenuncia(material._id)} className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white mr-5">
            Denunciar
          </button>
        </div>

      ))}
    </ul>
  );
};

export default MaterialesList;
