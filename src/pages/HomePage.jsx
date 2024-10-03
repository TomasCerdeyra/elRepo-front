import React, { useState, useEffect } from 'react';
import { getCarreras } from '../services/carrerasServices';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logos from '../services/logosServices';

const HomePage = () => {
  const [carreras, setCarreras] = useState([]);

  // Agrupar carreras por área
  const agruparCarrerasPorArea = (carreras) => {
    return carreras.reduce((acc, carrera) => {
      const area = carrera.area;
      if (!acc[area]) {
        acc[area] = [];
      }
      acc[area].push(carrera);
      return acc;
    }, {});
  };

  useEffect(() => {
    const cargarCarreras = async () => {
      try {
        const data = await getCarreras();
        setCarreras(agruparCarrerasPorArea(data));
      } catch (error) {
        console.log('Error al cargar las carreras');
      }
    };
    cargarCarreras();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-[#EFF3F5]'>
      <Navbar />
      <div className='py-4 flex-grow'>
        <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans'>
          ELIGE TU CARRERA UNIVERSITARIA:
        </h1>
        {Object.keys(carreras).map((area) => (
          <div className='text-white text-1xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-bold font-sans px-5' key={area}>
            <div className="h-[.13rem] mt-7 mb-5 bg-[#4F847C]"></div>
            <div className='flex flex-col items-center'>
              <img src={logos[area]} className="h-9 md:h-12 lg:h-16 xl:h-20 object-contain" alt={area} />
            </div>
            <h2 className='text-[#16353B] text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5'>{area}</h2> {/* Título del área */}
            <ul className='flex flex-col gap-2 px-6'>
              {carreras[area].map((carrera) => (
                <div className='bg-[#4F847C] font-light px-3 md:px-4 lg:px-5 xl:px-6' key={carrera._id}>
                  <Link to={`/carrera/${carrera._id}`}>
                    {carrera.name}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;