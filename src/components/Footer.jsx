import React from 'react'
import logo2 from '../../public/logo2.png'

const Footer = () => {
  return (
    <div>
      <div className="w-full h-1 bg-[#959500] mt-9"></div>
      <div className="w-full h-44 bg-[#16353B] mt-1 flex flex-col justify-center items-center">
        <img src={logo2} className='h-10 md:h-12 lg:h-16 xl:h-18' alt="Logo" />
        <div className='flex space-x-2'>
          <h2 className='text-white font-medium text-center text-sm md:text-xl lg:text-xl xl:text-xl'>Contacto: </h2>
          <a href="mailto:elrepo@gmail.com" className='text-[#959500] font-medium text-center no-underline text-sm md:text-xl lg:text-xl xl:text-xl'>elrepo@gmail.com</a>        </div>
      </div>
    </div>
  )
}

export default Footer