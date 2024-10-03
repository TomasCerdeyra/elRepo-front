import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LoginPage = () => {

  //Funcion para manejar el clik en el boton de inicio sesion
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/google/'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>

      <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-8'>
        INICIAR SESIÓN
      </h1>
      <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>
      <div className="flex justify-center">
        <button className='mt-4 rounded text-white bg-red-600 hover:bg-red-700 p-2 md:p-4 lg:p-6 xl:p-8' onClick={handleLogin}>
          Iniciar Sesion con Google
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage