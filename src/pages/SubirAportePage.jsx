import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Función para generar un array de años desde 1900 hasta el año actual
const getYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

export const SubirAportePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-7">AÑADE UN APORTE AL REPO</h1>
        <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
        <h2 className='text-[#16353B] md:py-2 sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans'>Completa los campos:</h2>

        <div className="mb-4 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreAporte">
    Nombre del Aporte
  </label>
  <input
    type="text"
    id="nombreAporte"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Ingresa el nombre del aporte"
  />
</div>


{/* Agrupamos los combobox en un contenedor flex para alinearlos horizontalmente */}
<div className="mb-4 flex space-x-4 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
  {/* Combobox para tipo de aporte */}
  <div className="w-1/2">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoAporte">
      Tipo de Aporte
    </label>
    <select
      id="tipoAporte"
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="" disabled selected hidden>Tipo de Aporte</option>
      <option value="parcial">Parcial</option>
      <option value="final">Final</option>
      <option value="trabajo_practico">Trabajo Práctico</option>
      <option value="resumen">Resumen</option>
    </select>
  </div>

  {/* Combobox para año */}
  <div className="w-1/2">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="anio">
      Seleccionar año del aporte
    </label>
    <select
      id="anio"
      required
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="" disabled selected hidden>Año</option>
      {getYears().reverse().map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
</div>

{/* Campo de entrada para nombre del docente */}
<div className="mb-4 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreDocente">
    Nombre del Docente (opcional)
  </label>
  <input
    type="text"
    id="nombreDocente"
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Ingresa el nombre del Docente"
  />
</div>


        <button className="hover:bg-green-500 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded">
          Subir Aporte
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SubirAportePage;
