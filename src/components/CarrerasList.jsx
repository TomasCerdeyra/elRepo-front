import React, { useState, useEffect } from "react";
import { getCarreras } from "../services/carrerasServices"; 

const CarrerasList = () => {
  const [carreras, setCarreras] = useState([]);

  //obtiene lista de carreras
  useEffect(() => {
    const cargarCarreras = async () => {
      try {
        const data = await getCarreras(); 
        setCarreras(data); 
      } catch (error) {
        console.log("Error al cargar las carreras");
      }
    };
    cargarCarreras();
  }, []);

  return (
    <ul className="mx-5 lg:mx-20 xl:mx-20">
      {carreras.map((carrera) => (
        <div key={carrera._id} className="hover:bg-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] p-3 m-2 flex items-center justify-between gap-5">
          <p className="flex-1 font-semibold text-2xl">{carrera.name}</p>
          <button className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white mr-5">Eliminar</button>

        </div>
      ))}
    </ul>
  );
};

export default CarrerasList;