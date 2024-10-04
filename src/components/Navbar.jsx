import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../../public/logo1.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center">
      {location.pathname !== '/' ? (
        <Link to="/home">
          <img src={logo1} className='h-20 md:h-16 lg:h-24 xl:h-24' alt="Logo" />
        </Link>
      ) : (
        <img src={logo1} className='h-20 md:h-16 lg:h-24 xl:h-24' alt="Logo" />
      )}
      <div className="w-full h-1 bg-[#959500] "></div>
      <div className="w-full h-1 bg-[#16353B] mt-1"></div>
    </div>
  );
}

export default Navbar;