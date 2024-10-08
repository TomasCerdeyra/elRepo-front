import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AporteForm from "../components/forms/AporteFomr";


export const SubirAportePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className='flex-grow '>
                <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>SUBIR APORTE</h1>
                <div className="flex justify-center mt-6">
                </div>
                <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

            </div>
      <AporteForm/>
      <Footer />
    </div>
  );
};

export default SubirAportePage;
