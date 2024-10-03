import React from "react";

const MaterialDetail = ({material}) => {

    const img = ` http://localhost:8080/${material.rutaArchivo}` 

    return(
        <div>
            <h2 className="uppercase text-[#16353B] text-2xl text-center my-5 font-bold font-sans">{material.nombre}</h2>
            <p>Año: {material.anio}</p>
            <p>Descripción: {material.descripcion}</p>
            <p>Profesor: {material.profesor}</p>

            <img src={`http://localhost:8080/uploads/${material.rutaArchivo}`} alt={material.nombre} style={{ maxWidth: '100%' }} />
        </div>
    )
}

export default MaterialDetail