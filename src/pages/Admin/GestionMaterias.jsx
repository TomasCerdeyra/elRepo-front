import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const GestionMaterias = () => {

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7">
          GESTIONAR MATERIAS
        </h1>
        <div className="flex justify-center mt-6">
          <Link to={"/admin/agregarmaterias"}>
            <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded mr-4">
              Añadir Materia
            </button>
          </Link>
          <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded mr-4">
            Eliminar Materia
          </button>
          <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded">
            Actualizar Materias
          </button>
        </div>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
        <h1 className="text-center">lista de materias</h1>
      </div>
      <Footer />
    </div>
  );
};

export default GestionMaterias;
