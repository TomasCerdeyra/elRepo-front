import React, { useEffect, useState } from 'react'
import {useParams}  from 'react-router-dom'
import { getMaterilesByMateria } from '../services/materialesServices'
import MaterialesList from '../components/MaterialesList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    <div className=' bg-[#EFF3F5]'>
      <Navbar/>

      <h1 className='uppercase text-[#16353B] text-2xl text-center my-5 font-bold font-sans'>{materia}</h1>
      <div className=" h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
      <div className='flex'>
      <p className="flex-1 text-black font-semibold">Nombre:</p>
      <p className="flex-1 text-center text-black  font-medium">Año:</p>
      </div>
      <MaterialesList materiales={materiales}/>
      <Footer/>
    </div>
  )
}

export default MaterialesPage