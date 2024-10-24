import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const NewCarrera = () => {
  const [nombreCarrera, setNombreCarrera] = useState('');
  const [areaCarrera, setAreaCarrera] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (por ejemplo, enviar datos a una API)
    console.log({ nombreCarrera, areaCarrera });
  };

  return (
    <div className='min-h-screen flex flex-col bg-[#EFF3F5]'>
      <Navbar />
      <div className='flex-grow'>
        <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>AÑADIR CARRERA</h1>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

        <div className="flex justify-center mt-6">
          <form onSubmit={handleSubmit} className="bg-[#EFF3F5]  ">
            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2 px-20" htmlFor="nombreCarrera">
                Nombre de la Carrera
              </label>
              <input
                type="text"
                id="nombreCarrera"
                value={nombreCarrera}
                onChange={(e) => setNombreCarrera(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingresa el nombre de la carrera"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="areaCarrera">
                Área de la Carrera
              </label>
              <select
                id="areaCarrera"
                value={areaCarrera}
                onChange={(e) => setAreaCarrera(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Selecciona un área</option>
                <option value="Ciencias Sociales">Informatica</option>
                <option value="Ciencias Sociales">Salud</option>
                <option value="Ciencias Sociales">Agronomia</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="hover:bg-green-500 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded"
              >
                Añadir Carrera
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewCarrera;