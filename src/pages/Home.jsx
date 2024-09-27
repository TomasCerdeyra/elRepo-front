import React, { useState, useEffect } from 'react';
import AreaCarreras from '../components/AreaComponets';
import axios from 'axios';

const Home = () => {
  const [carreras, setCarreras] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/carreras')
      .then(response => {
        setCarreras(response.data);  
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Agrupar carreras por área
  const carrerasPorArea = carreras.reduce((acc, carrera) => {
    if (!acc[carrera.area]) {
      acc[carrera.area] = [];
    }
    acc[carrera.area].push(carrera);
    return acc;
  }, {});

  return (
    <div className='w:]'>

      {Object.keys(carrerasPorArea).map((area, index) => (
        <AreaCarreras key={index} area={area} carreras={carrerasPorArea[area]} />
      ))}
    </div>
  );
}

export default Home;
