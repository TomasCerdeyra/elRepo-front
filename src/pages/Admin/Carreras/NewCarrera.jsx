import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { createCarrera } from '../../../services/carrerasServices';
import ActualizarCarrearaForm from '../../../components/forms/ActualizarCarrearaForm';


export const NewCarrera = () => {
  const MySwal = withReactContent(Swal)

  const handleSubmit = async (newCarrera) => {
    try {
      const data = await createCarrera(newCarrera)
      MySwal.fire({
        title: '¡Carrera creada correctamente!',
        icon: 'success', 
        confirmButtonText: 'Aceptar'
    });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-[#EFF3F5]'>
      <Navbar />
      <div className='flex-grow'>
        <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>AÑADIR CARRERA</h1>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

        <div className="flex justify-center mt-6">
          <ActualizarCarrearaForm 
          onSubmit={handleSubmit}
          
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewCarrera;