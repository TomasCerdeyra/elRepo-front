import React, { useState, useEffect } from 'react';
import { getCarreras } from '../services/carrerasServices';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div>
      <Navbar/>
      <div className='bg-[#EFF3F5] -mt-9'>
      <h1 className=' text-[#16353B] text-2xl text-center my-9 font-bold font-sans'>ELIGE TU CARRERA UNIVERSITARIA:</h1>
      {Object.keys(carreras).map((area) => (
        <div className=' text-white text-1xl text-center font-bold font-sans' key={area}>
          <div className=" h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
          <h2 className='text-[#16353B] text-xl mb-5'>{area}</h2> {/* Título del área */}
          
          <ul>
  
            {carreras[area].map((carrera) => (
              <div className='bg-[#4F847C] mb-2 mx-5 font-sans font-medium' key={carrera._id}>
                <Link to={`/carrera/${carrera._id}`}>
                  {carrera.name}
                </Link>
                
              </div>
            ))}
          </ul>
          
        </div>
        
      ))}
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;