import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const MaterialPage = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='uppercase text-[#16353B] text-2xl text-center my-5 font-bold font-sans'>Nombre del Material</h1>
      <div className=" h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>
      <h1>Año:</h1>
      <h1>Descripcion:</h1>
      <h1>Nombre del profesor:</h1>
      <h1>Material:</h1>
      <Footer/>
    </div>
  )
}

export default MaterialPage