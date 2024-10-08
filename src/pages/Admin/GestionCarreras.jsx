import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarrerasList from "../../components/CarrerasList";
import { getCarreras } from "../../services/carrerasServices"; // Importar el servicio

export const GestionCarreras = () => {
  const [carreras, setCarreras] = useState([]);

  // Cargar carreras al montar el componente
  useEffect(() => {
    const cargarCarreras = async () => {
      try {
        const data = await getCarreras(); // Obtener lista de carreras desde el servicio
        setCarreras(data); // Asignar las carreras al estado
      } catch (error) {
        console.log("Error al cargar las carreras");
      }
    };
    cargarCarreras();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7">
          GESTIONAR CARRERAS
        </h1>
        <div className="flex justify-center mt-6">
          <Link to={"/admin/agregarcarreras"}>
            <button
              className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded mr-4"
            >
              Añadir Carrera
            </button>
          </Link>
          <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded mr-4">
            Eliminar Carrera
          </button>
          <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded">
            Actualizar Carreras
          </button>
        </div>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
        <h1 className="text-center font-medium text-2xl text-[#16353B] mb-6">LISTA DE CARRERAS:</h1>
        {/* Pasar las carreras obtenidas al componente CarrerasList */}
        <CarrerasList carreras={carreras} />
      </div>
      <Footer />
    </div>
  );
};

export default GestionCarreras;