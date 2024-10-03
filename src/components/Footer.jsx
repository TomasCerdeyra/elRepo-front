import React from 'react'
import logo2 from '../../public/logo2.png'

const Footer = () => {
  return (
    <div>

    <div class="w-full h-1 bg-[#959500] mt-9"></div>
    <div class="w-full h-20 bg-[#16353B] mt-1 flex flex-col justify-center items-center">
  <img src={logo2} className='size-10' alt="" />
  <div className='flex space-x-1'>
  <h2 className='text-white font-medium text-center text-sm'>Contacto:  </h2>
  <h2 className='text-[#959500] underline font-medium text-center text-sm'>elrepo@gmail.com</h2>
  </div>
</div>
    </div>
  )
}

export default Footer