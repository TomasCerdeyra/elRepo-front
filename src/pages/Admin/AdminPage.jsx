import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ButtonAdmins from "../../components/buttons/ButtonAdmins";
import DenunciasCounter from "../../components/DenunciasCounter";

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-3 mb-32">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-7">
          CUENTA ADMINISTRATIVA
        </h1>
        <div className="h-1 bg-[#4F847C] mt-10 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
        <div className="w-full flex flex-col items-center gap-2 space-y-4 mt-10">
          <ButtonAdmins route={"gestioncarreras"} text={"Gestion de Carreras"} />
          <ButtonAdmins route={"gestionmaterias"} text={"Gestion de Materias"} />

          <div className="flex w-full  items-center ">
            <ButtonAdmins route={"gestionaportes"} text={"Gestion de Aportes"} className="" />
            <div className="ml-2">
              <DenunciasCounter />
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
