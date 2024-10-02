import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMateriasByCarrera } from '../services/materiasServices';
import MateriasList from '../components/MateriasList';


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
      <h1>{carrera.name}</h1>
      <MateriasList materias={materias}/>
    </div>
  )
}

export default MateriasPage