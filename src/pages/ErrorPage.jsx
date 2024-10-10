import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../public/error.webp'


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
            <img src={error} alt="" className='w-52 mx-auto' />
            <h1 className="text-red-700 md:py-2 sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-5xl text-center font-bold font-sans">
                ACCESO DENEGADO
            </h1>
            <div className="h-1 bg-red-700 mt-8 w-full sm:w-96 mb-6"></div>

            <p className='text-[#16353B] md:py-2 sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans'>
                Estás intentando acceder al sitio web con un correo que no pertenece a la institución.
            </p>
            <p className='text-[#16353B] md:py-2 sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans'>
                Lo sentimos, solo los usuarios con un correo electrónico
                <strong className='mx-3'>
                    @unsada.edu.ar
                </strong>
                pueden acceder a esta página.
            </p>
            <Link to={'/'} className='mt-20 hover:bg-red-800 hover:shadow-md transition duration-200 bg-red-700 border-2 border-red-700 rounded text-white font-semibold text-2xl w-fit mx-auto block px-4 py-2'>
                Volver al Inicio de Sesión
            </Link>
        </div>
    )
}

export default ErrorPage