import React from 'react'
import { Link } from 'react-router-dom';
import ButtonName from './buttons/ButtonName';

const MateriasList = ({ materias }) => {
    return (

        <div className="flex flex-col justify-center items-center">
             <div className="h-[.13rem] mt-7 w-4/5 mb-5 bg-[#4F847C]"></div>
             <ul className='grid grid-cols-2 w-full md:w-3/4 lg:w-3/4 xl:2/4 gap-y-8 gap-x-8 md:gap-x-14 lg:gap-x-32 xl:gap-x-44 px-6 py-20'>
            {materias.map((materia) => (
                <Link to={`/materia/${materia._id}`} key={materia._id}>
                    <ButtonName materia={materia.name}/>
                </Link>
            ))}
        </ul>
        </div>
       
    )
}

export default MateriasList