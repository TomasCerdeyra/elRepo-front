import React, { useState } from "react";
import { reportMaterial } from "../services/materialesServices";
import { showConfirmationAlert, showSuccessAlert } from "../utils/alerts";

const MaterialDetail = ({ material }) => {
  const [denunciasRealizadas, setDenunciasRealizadas] = useState(new Set()); // Almacena los IDs de los materiales denunciados

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
      <h2 className="uppercase text-[#16353B] text-3xl text-center my-5 font-bold font-sans">
        {material.nombre}
      </h2>
      <p className="flex items-center mb-2 font-semibold">Año: {material.anio}</p>
      <p className="flex items-center mb-2 font-semibold">Profesor: {material.profesor}</p>
      <p className="flex items-center mb-2 font-semibold">Descripción: {material.descripcion}</p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        {/* Mostrar múltiples archivos */}
        {material.rutasArchivos && material.rutasArchivos.map((rutaArchivo, index) => {
          const tipo = material.tipo[index]; // Obtener el tipo correspondiente
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              {tipo === 'imagen' && (
                <img
                  src={`http://localhost:8080/${rutaArchivo}`}
                  alt={material.nombre}
                  style={{ maxWidth: '100%' }}
                />
              )}
              {tipo === 'archivo' && (
                <a
                  href={`http://localhost:8080/${rutaArchivo}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hover:bg-green-400 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded">
                    Descargar archivo
                  </button>
                </a>
              )}
            </div>
          );
        })}

        <button
          onClick={() => handleDenuncia(material._id)}
          className="mt-4 hover:bg-red-600 hover:shadow-md transition duration-200 bg-red-500 text-white py-2 px-4 rounded"
        >
          Denunciar material
        </button>
      </div>
    </div>
  );
};

export default MaterialDetail;