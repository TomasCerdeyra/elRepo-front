import React from 'react'
import { Link } from 'react-router-dom'
import DenunciasCounter from '../DenunciasCounter'

const ButtonAdmins = ({ route, text, isAporte }) => {
    return (
        <Link to={`/admin/${route}`} className={`flex items-center justify-center text-center hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 w-3/4 max-w-[600px] bg-[#4F847C] text-white font-light py-3 text-sm sm:text-md md:text-lg lg:text-1xl xl:text-2xl`}>
            <button className={isAporte ? "ml-6" : ""}>
                {text}
            </button>
            {isAporte && (
                <DenunciasCounter />
            )}
        </Link>
    )
}

export default ButtonAdmins