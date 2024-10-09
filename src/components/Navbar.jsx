import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../services/authServices';
import logo1 from '../../public/logo1.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/')
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  }

  return (
    <div>
    <div className="flex justify-between items-center p-4 bg-white"> {/* Contenedor principal */}
      <div className="flex-grow flex justify-center ml-24"> {/* Contenedor para centrar el logo */}
        {location.pathname !== '/' ? (
          <Link to="/home">
            <img src={logo1} className='h-20 md:h-16 lg:h-24 xl:h-24 -mt-3 ' alt="Logo" />
          </Link>
        ) : (
          <img src={logo1} className='h-20 md:h-16 lg:h-24 xl:h-24 mt-4' alt="Logo" />
        )}
      </div>

      <div className="flex-shrink-0"> {/* Asegura que el botón esté alineado a la derecha */}
        <button onClick={handleLogout} className=" hover:bg-red-700 hover:shadow-md transition duration-200 rounded text-xs font-medium   bg-red-500 text-white py-1 px-3">Cerrar Sesión</button>
      </div>
    </div>
    <div className="w-full h-1 bg-[#959500] -mt-3"></div>
    <div className="w-full h-1 bg-[#16353B] mt-1"></div>
  </div>
  );
}

export default Navbar;