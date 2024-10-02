import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LoginPage = () => {

  //Funcion para manejar el clik en el boton de inicio sesion
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/'
  }

  return (
    <div>
      <Navbar/>

      <h1 className='text-[#16353B] text-2xl text-center font-bold font-sans mt-8'>INICIAR SESIÓN</h1>
      <div className=" h-1 bg-[#4F847C] mt-4 mx-9 mb-6"></div>
      <div class="flex justify-center">
      <button className='mt-4 rounded text-white bg-red-600 hover:bg-red-700' onClick={handleLogin}>
        Iniciar Sesion con Gogle
      </button>
      </div>
    </div>
  )
}

export default LoginPage