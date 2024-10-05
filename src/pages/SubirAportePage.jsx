
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export const SubirAportePage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-7">AÑADE UN APORTE AL REPO</h1> 
        <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
        <h2 className='text-[#16353B] md:py-2  sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans'>Completa los campos:</h2>


        <h2>tipo de aporte: parcial, final, trabajo practico o resumen</h2>
        <h2>anio:</h2>
        <h2>profesor: opcional</h2>
        <h2>Aniade tu aporte aqui</h2>
        <h2>no se q mas</h2>

        <button className="mt-5 hover:bg-green-800 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded">
                        Subir Aporte
                    </button>
        </div>
        <Footer />
      </div>
    )
}

export default SubirAportePage