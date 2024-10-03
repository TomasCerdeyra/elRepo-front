import React from 'react'
import logo1 from '../../public/logo1.png'

const Navbar = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo1} className='h-20 md:h-16 lg:h-24 xl:h-32' alt="Logo" />
      <div className="w-full h-1 bg-[#959500] mt-4"></div>
      <div className="w-full h-1 bg-[#16353B] mt-1"></div>
    </div>
  )
}

export default Navbar