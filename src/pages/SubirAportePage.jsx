import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AporteForm from "../components/forms/AporteFomr";


export const SubirAportePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Subir un Aporte</h1>
      <AporteForm/>
      <Footer />
    </div>
  );
};

export default SubirAportePage;
