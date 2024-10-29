import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAdmins = ({route, text}) => {
    return (
        <Link to={`/admin/${route}`} className='text-center hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 w-3/4 max-w-[600px] bg-[#4F847C] text-white font-light py-3 text-sm sm:text-md md:text-lg lg:text-1xl xl:text-2xl'>
            <button className="">
                {text}
            </button>
        </Link>
    )
}

export default ButtonAdmins