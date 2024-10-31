import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMateriasByCarrera } from '../../services/materiasServices';
import MateriasList from '../../components/lists/MateriasList'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { AppContext } from '../../context/AppContext';

const MateriasPage = () => {
  const { id } = useParams();
  const { carrera, logo, area } = useContext(AppContext)
  /* const [carrera, setCarrera] = useState({}) */
  const [materias, setMaterias] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarMaterias = async () => {
      try {
        const data = await getMateriasByCarrera(id)

        setMaterias(data)
        setLoading(false)
      } catch (error) {
        setError('Error al cargar las materias');
        setLoading(false);
      }
    }
    cargarMaterias()
  }, [id])

  if (loading) {
    return <div className="h-screen flex items-center justify-center">
      <p className="text-center font-semibold text-[#16353B]">Cargando Aporte...</p>
    </div>;
  }


  return (
    <div className=' bg-[#EFF3F5]'>
      <Navbar />
      <div className='flex flex-col items-center py-5'>
        <img src={logo} className="h-9 md:h-12 lg:h-16 xl:h-20 object-contain" alt="Logo del área" />
        <p className='text-[#16353B] font-medium'>{area}</p>
        <h2 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>{carrera}</h2>
        <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
        <h2 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-8'></h2>
        <h2 className='text-[#16353B] md:py-2  sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans'>Materias:</h2>
      </div>

      <MateriasList materias={materias} />
      <Footer />
    </div>
  )
}

export default MateriasPage