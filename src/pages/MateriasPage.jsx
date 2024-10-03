import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMateriasByCarrera } from '../services/materiasServices';
import MateriasList from '../components/MateriasList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MateriasPage = () => {
  const { id } = useParams();
  const [carrera, setCarrera] = useState({})
  const [materias, setMaterias] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarMaterias = async () => {
      try {
        const data = await getMateriasByCarrera(id)
        setCarrera(data.carrera)
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
    <div>
      <Navbar/>
      <h1 className=''>{carrera.name}</h1>
      <MateriasList materias={materias}/>
      <Footer/>
    </div>
  )
}

export default MateriasPage