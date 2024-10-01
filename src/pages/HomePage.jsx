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
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>ELIGE TU CARRERA UNIVERSITARIA:</h1>
      {Object.keys(carreras).map((area) => (
        <div key={area} className="area">
          <h2>log0</h2>
          <h2>{area}</h2> {/* Título del área */}
          <ul>
            {carreras[area].map((carrera) => (
              <div key={carrera._id}>
                <Link to={`/carrera/${carrera._id}`}>
                  <button style={{ 
                    backgroundColor: 'green', 
                    color: 'white', 
                    padding: '10px 20px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    display: 'inline-block', 
                    textDecoration: 'none',
                    width: '30%', // Opcional
                    textAlign: 'center'
                  }}>
                    {carrera.name}
                  </button>
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
