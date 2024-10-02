import React, { useEffect, useState } from 'react'
import {useParams}  from 'react-router-dom'
import { getMaterilesByMateria } from '../services/materialesServices'
import MaterialesList from '../components/MaterialesList'

const MaterialesPage = () => {
  const {id} = useParams()
  const [materia, setMateria] = useState(null)
  const [materiales, setMateriales] = useState([]);
  const [loadin, setLoading] = useState(true)

  useEffect(() => {
    const cargarMateriales = async () => {
      try {
        const data = await getMaterilesByMateria(id)
        setMateria(data.materia)
        setMateriales(data.materiales)
        setLoading(false)
      } catch (error) {
        console.log('Erro al cargar componente');
        setLoading(false)
      }
    }
    cargarMateriales()
  },[id])

  if(loadin) { 
    return <p>Cargando materiales...</p>
  }

  return (
    <div>
      <h1 className=' text-center'>{materia}</h1>
      <MaterialesList materiales={materiales}/>
    </div>
  )
}

export default MaterialesPage