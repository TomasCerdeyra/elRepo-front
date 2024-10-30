import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Funcion para deslogear
  const handleLogout = () => {
    window.location.href = 'http://localhost:8080/api/auth/logout/'
  }

  const handleBack = () => {
    navigate(-1);
  };

return (
  <div>
    <div className="flex justify-between items-center p-4 bg-white">
      <div className="flex-1 flex justify-center items-center">
        <div className="flex justify-center items-center">
         {/* Mostrar el botón "Volver" solo si la ruta no es '/' (login) */}
          {location.pathname !== '/' ? (
            <Link to="/home">
              <img src={logo1} className="ml-20 w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain" alt="Logo" />
            </Link>
          ) : (
            <img src={logo1} className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain" alt="Logo" />
          )}
        </div>
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