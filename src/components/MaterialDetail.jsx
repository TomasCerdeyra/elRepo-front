import React from "react";

const MaterialDetail = ({ material }) => {

    return (
        <div>
            <h2 className="uppercase text-[#16353B] text-2xl text-center my-5 font-bold font-sans">{material.nombre}</h2>
            <p>Año: {material.anio}</p>
            <p>Descripción: {material.descripcion}</p>
            <p>Profesor: {material.profesor}</p>

            {material.tipo === 'imagen' && (
                <img src={`http://localhost:8080/${material.rutaArchivo}`} alt={material.nombre} style={{ maxWidth: '100%' }} />
            )}
            {material.tipo === 'archivo' && (
                <a href={`http://localhost:8080/${material.rutaArchivo}`} download target="_blank" rel="noopener noreferrer">
                    <button className="hover:bg-green-400 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded">
                        Descargar archivo
                    </button>
                </a>
            )}


        </div>
    )
}

export default MaterialDetail