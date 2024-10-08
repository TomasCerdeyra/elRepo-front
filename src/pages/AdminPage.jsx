import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-7">
          CUENTA ADMINISTRATIVA
        </h1>
        <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
        
        <Link to={"/admin/gestioncarreras"}>
          <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white w-full font-light py-3 px-32 text-sm sm:text-md md:text-lg lg:text-1xl xl:text-2xl">
            Gestion de Carreras
          </button>
        </Link>

        <Link to={"/admin/gestionmaterias"}>
          <button className="hover:bg-[#3b6b5e] mt-5 hover:shadow-md transition duration-200 bg-[#4F847C] text-white w-full font-light py-3 px-32 text-sm sm:text-md md:text-lg lg:text-1xl xl:text-2xl">
            Gestion de Materias
          </button>
        </Link>

        <Link to={"/admin/gestionaportes"}>
          <button className="hover:bg-[#3b6b5e] mt-5 hover:shadow-md transition duration-200 bg-[#4F847C] text-white w-full font-light py-3 px-32 text-sm sm:text-md md:text-lg lg:text-1xl xl:text-2xl">
            Gestion de Aportes
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPage;
