import React, { useState, useEffect } from 'react';
import { getCarreras } from '../services/carrerasServices';
import { Link } from 'react-router-dom'
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
        const data = await getCarreras()
        setCarreras(agruparCarrerasPorArea(data))
      } catch (error) {
        console.log('Error al cargar las carreras');
      }
    }
    cargarCarreras();
  }, []);

  return (
    <div className='bg-[#EFF3F5]'>
      <Navbar />
      <div className='py-4'>
        <h1 className=' text-[#16353B] text-2xl text-center font-bold font-sans'>ELIGE TU CARRERA UNIVERSITARIA:</h1>
        {Object.keys(carreras).map((area) => (
          <div className=' text-white text-1xl text-center font-bold font-sans px-5' key={area}>
            <div className=" h-[.13rem] mt-7 mb-5 bg-[#4F847C]"></div>
            <div className='flex flex-col items-center'>
              <img src={logos[area]} class="h-9 object-contain" alt="d" />
            </div>
            <h2 className='text-[#16353B] text-xl mb-5'>{area}</h2> {/* Título del área */}

            <ul className='flex flex-col gap-2 px-6'>
              {carreras[area].map((carrera) => (
                <div className='bg-[#4F847C] font-light px-3' key={carrera._id}>
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