import React, { useContext, useState } from "react";
import { reportMaterial } from "../services/materialesServices";
import { showConfirmationAlert, showSuccessAlert } from "../utils/alerts";
import { AppContext } from "../context/AppContext";

const MaterialDetail = ({ material }) => {
  const [denunciasRealizadas, setDenunciasRealizadas] = useState(new Set()); // Almacena los IDs de los materiales denunciados
  const { materia } = useContext(AppContext)

  const handleDenuncia = async (materialID) => {
    if (denunciasRealizadas.has(materialID)) {
      showSuccessAlert('Ya has denunciado este aporte', "warning")
      return;
    }

    const respuesta = await showConfirmationAlert('¿Este material contiene contenido erróneo u ofensivo?')

    if (respuesta.isConfirmed) {
      try {
        const data = await reportMaterial(materialID);
        showSuccessAlert(`¡${data}!`, "success")

        setDenunciasRealizadas((prev) => new Set(prev).add(materialID)); // Agregar el ID a la lista de denunciados
      } catch (error) {
        console.error('Error al denunciar el material:', error);
      }
    }
  };

  return (
    <div className="mb-4 mt-8 bg-white p-6 rounded shadow-md w-full max-w-5xl mx-auto">
      <h2 className="uppercase text-[#16353B] text-2xl font-semibold font-sans">
        {material.nombre}
        <div className="w-full h-[1px] bg-[#16353B] mt-2"></div>
      </h2>
      <div className="flex flex-col gap-1 py-3">
        <p ><span className="font-bold">Asignatura: </span>{materia}</p>
        <p className=""><span className="font-bold">Año: </span>{material.anio}</p>
        {material.profesor && <p className=""><span className="font-bold">Profesor: </span>{material.profesor}</p>}
        <p className=""><span className="font-bold">Archivo: </span>{material.tipo.length}</p>
        {material.descripcion && <p className=""><span className="font-bold">Descripción: </span>{material.descripcion}</p>}
      </div>
      <div className="w-full h-[1px] bg-[#16353B] mt-1"></div>

      <div className="mt-10 flex flex-col items-center justify-center gap-8">
        {/* Mostrar múltiples archivos */}
        {material.rutasArchivos && material.rutasArchivos.map((rutaArchivo, index) => {
          const tipo = material.tipo[index]; // Obtener el tipo correspondiente
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              {tipo === 'imagen' && (
                <div className="flex flex-col gap-3">
                  <p className="w-full text-xs">Imagen - {material.nombre} ({index})</p>
                  <img
                    className=" rounded-lg"
                    src={`http://localhost:8080/${rutaArchivo}`}
                    alt={material.nombre}
                    style={{ maxWidth: '100%' }}
                  />
                  <a
                    href={`http://localhost:8080/${rutaArchivo}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="hover:bg-green-400 hover:shadow-md transition duration-200 bg-green-600 text-white py-1 px-4 rounded">
                      Descargar imagen
                    </button>
                  </a>
                </div>
              )}
              {tipo === 'archivo' && (
                <div className="flex flex-col gap-3">
                  <p className="w-full text-xs">Archivo - {material.nombre} ({index})</p>
                  <a
                    href={`http://localhost:8080/${rutaArchivo}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="hover:bg-green-400 hover:shadow-md transition duration-200 bg-green-600 text-white py-1 px-4 rounded">
                      Descargar archivo
                    </button>
                  </a>
                </div>

              )}
            </div>
          );
        })}
        <div className="w-full h-[1px] bg-[#16353B] mt-2"></div>
      </div>
      <button
        onClick={() => handleDenuncia(material._id)}
        className="mt-4 hover:bg-red-600 hover:shadow-md transition duration-200 bg-red-500 text-white py-2 px-4 rounded"
      >
        Denunciar material
      </button>
    </div>
  );
};

export default MaterialDetail;