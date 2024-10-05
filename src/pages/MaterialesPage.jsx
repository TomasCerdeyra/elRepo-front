import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMaterilesByMateria } from '../services/materialesServices';
import MaterialesList from '../components/MaterialesList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MaterialesPage = () => {
  const { id } = useParams();
  const [materia, setMateria] = useState(null);
  const [materiales, setMateriales] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarMateriales = async () => {
      try {
        const data = await getMaterilesByMateria(id);
        setMateria(data.materia);
        setMateriales(data.materiales);
        setLoading(false);
      } catch (error) {
        console.log('Error al cargar componente');
        setLoading(false);
      }
    };
    cargarMateriales();
  }, [id]);

  if (loading) {
    return <p>Cargando materiales...</p>;

  }

  const handleSubirAporte = () => {
    navigate('/subiraporte');
  };


  return (
    <div className='min-h-screen flex flex-col bg-[#EFF3F5]'>
      <Navbar />
      <div className='flex-grow '>
        <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>{materia}</h1>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubirAporte}
            className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded mr-4">
            Añadir aporte
          </button>
          <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded">Buscar Aporte</button>
        </div>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
        <div className='flex'>
          <p className="flex-1 text-black font-semibold ml-9">Nombre:</p>
          <p className="flex-1 text-center text-black font-medium">Año:</p>
        </div>
        <MaterialesList materiales={materiales} />
      </div>
      <Footer />
    </div>
  );
}

export default MaterialesPage;