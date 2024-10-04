import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMateriasByCarrera } from '../services/materiasServices';
import MateriasList from '../components/MateriasList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';


const MateriasPage = () => {
  const { id } = useParams();
  const {carrera, logo, area} = useContext(AppContext)
  /* const [carrera, setCarrera] = useState({}) */
  const [materias, setMaterias] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarMaterias = async () => {
      try {
        const data = await getMateriasByCarrera(id)
        /* setCarrera(data.carrera) */
        setMaterias(data.materias)
        setLoading(false)
      } catch (error) {
        setError('Error al cargar las materias');
        setLoading(false);
      }
    }
    cargarMaterias()
  }, [id])

  if (loading) {
    return <p>Cargando materias...</p>;
  }


  return (
    <div className=' bg-[#EFF3F5]'>
      <Navbar/>
      <div className='flex flex-col items-center py-5'>
      <img src={logo} className="h-9 md:h-12 lg:h-16 xl:h-20 object-contain" alt="Logo del área" />
      <p>{area}</p>
      <h2 className='text-xl text-center font-bold'>{carrera}</h2>
      <p className='font-bold text-lg'>MATERIAS</p>
      </div>
      {/* <h1 className=''>{carrera.name}</h1> */}
      <div className=" h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
      <div className='sm:flex justify-center gap-x-8 md:gap-x-12 lg:gap-x-24 xl:gap-x-40 2xl:gap-56'>
        <div className=''>
          <MateriasList materias={materias.slice(0, Math.ceil(materias.length / 2))}/>
        </div>
        <div className=''>
          <MateriasList materias={materias.slice(Math.ceil(materias.length / 2))}/>
        </div>
      </div>

      
      <Footer/>
    </div>
  )
}

export default MateriasPage