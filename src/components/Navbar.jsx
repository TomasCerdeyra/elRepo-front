import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import cerrar from '../assets/cerrar.png'
import volver from '../assets/volver.png'
import logoAdmin from '../assets/FotoAdmin.png'
import logoHome from '../assets/FotoHome.png'
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useAuth()

  useEffect(() => {
    console.log(auth.user);

  })
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

        <div>
          {location.pathname !== '/' && location.pathname !== '/home' && location.pathname !== '/admin' && (
            <button
              onClick={handleBack}            >
              <img src={volver} alt="Volver Atrás" className="h-8 w-8 sm:w-8  sm:h-8 md:w-10 lg:w-10 md:h-10 lg:h-10  sm:ml-2 md:ml-8 lg:ml-8 " />
            </button>
          )}
          {location.pathname !== '/' && location.pathname === '/home' && auth.user.isAdmin && (
            //Si admin esta en  HOME
            <Link to={"/admin"}>
              <button>
                <img src={logoAdmin} alt="Administrador" className="h-8 w-8 sm:w-8  sm:h-8 md:w-10 lg:w-10 md:h-10 lg:h-10  sm:ml-2 md:ml-8 lg:ml-8 " />
              </button>
            </Link>
          )}
          {location.pathname !== '/' && location.pathname === '/admin' && auth.user.isAdmin && (
            //Si admin esta en ADMIN
            <Link to={"/home"}>
              <button>
                <img src={logoHome} alt="Home" className="h-8 w-8 sm:w-8  sm:h-8 md:w-10 lg:w-10 md:h-10 lg:h-10  sm:ml-2 md:ml-8 lg:ml-8 " />
              </button>
            </Link>
          )}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex justify-center items-center">
            {/* Mostrar el botón "Volver" solo si la ruta no es '/' (login) */}
            {location.pathname !== '/' ? (
              <Link to="/home">
                <img src={logo1} className=" w-48 sm:w-56 md:w-64 lg:w-72  h-auto object-contain" alt="Logo" />
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
                onClick={handleLogout}            >
                <img src={cerrar} alt="Cerrar Sesión" className="h-8 w-8 sm:w-8  sm:h-8 md:w-10 lg:w-10 sm:h-8  md:h-10 lg:h-10 sm:mr-2 md:mr-8 lg:mr-8" />
              </button>
            </div>
          )}

        </div>

      </div>
      <div className="w-full h-1 bg-[#959500] -mt-3"></div>
      <div className="w-full h-1 bg-[#16353B] mt-1"></div>
    </div >
  );
};

export default Navbar;