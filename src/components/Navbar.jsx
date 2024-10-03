import React from 'react'
import logorepo from '../../public/elRepo_logo.png'

const Navbar = () => {
  return (
    <div className='flex flex-col'>
      <img src={logorepo} className='w-30 h-16 object-contain' alt="" />
      <div class="h-1 bg-[#959500]"></div>
      <div class="h-1 bg-[#16353B] mt-[.1rem]"></div>
    </div>
  )
}

export default Navbar