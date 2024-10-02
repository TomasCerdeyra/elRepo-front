import React, { useState, useEffect } from 'react';
import { getCarreras } from '../services/carrerasServices';
import { Link } from 'react-router-dom'

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
      <h1 className=' text-2xl'>ELIGE TU CARRERA UNIVERSITARIA:</h1>
      {Object.keys(carreras).map((area) => (
        <div className=' m-4' key={area}>
          <h2 className=' text-xl mb-2'>{area}</h2> {/* Título del área */}
          <ul>
            {carreras[area].map((carrera) => (
              <div key={carrera._id}>
                <Link to={`/carrera/${carrera._id}`}>
                  {carrera.name}
                </Link>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HomePage;