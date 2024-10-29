import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png';


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Funcion para desloguear
  const handleLogout = () => {
    window.location.href = 'http://localhost:8080/api/auth/logout/'
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white">

        {/* Mostrar el botón "Volver" solo si la ruta no es '/' (loguin) */}
        <div className="flex md:h-16 lg:h-24 justify-center items-center">
          {location.pathname !== '/' ? (
            <Link to="/home">
              <img src={logo1} className="w-40 object-contain sm:object-fill sm:h-20 " alt="Logo" />
            </Link>
          ) : (
            <img src={logo1} className="object-contain px-20 sm:px-40 sm:object-fill md:h-20 md:px-0 " alt="Logo" />
          )}
        </div>
        <div className='flex flex-col gap-2'>
          {location.pathname !== '/' && (
            <div className="">
              <button
                onClick={handleLogout}
                className="hover:bg-red-700 hover:shadow-md transition duration-200 rounded text-xs font-medium bg-red-500 text-white py-1 px-1 "
              >
                Cerrar Sesión
              </button>
            </div>
          )}
          {location.pathname !== '/' && location.pathname !== '/home' && location.pathname !== '/admin' && (
            <button
              onClick={handleBack}
              className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 rounded text-xs font-medium bg-[#4F847C] text-white py-1 px-1 "
            >
              Volver atrás
            </button>
          )}
        </div>

      </div>
      <div className="w-full h-1 bg-[#959500] -mt-3"></div>
      <div className="w-full h-1 bg-[#16353B] mt-1"></div>
    </div>
  );
};

export default Navbar;