import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export const NewMateria = () => {
  return (
    <div className='min-h-screen flex flex-col bg-[#EFF3F5]'>
    <Navbar />
    <div className='flex-grow '>
        <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>AÑADIR MATERIA</h1>

        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
        <button className="hover:bg-green-500 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded">
                        Añadir Materia
                    </button>
    </div>
    <Footer />
</div>
  )
};

export default NewMateria
