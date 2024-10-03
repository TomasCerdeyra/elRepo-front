import React from 'react'
import { Link } from 'react-router-dom';
import ButtonName from './buttons/ButtonName';

const MateriasList = ({ materias }) => {
    return (
        <ul className='flex flex-col gap-3 px-6'>
            {materias.map((materia) => (
                <Link to={`/materia/${materia._id}`} key={materia._id}>
                    <ButtonName materia={materia.name}/>
                </Link>
            ))}
        </ul>
    )
}

export default MateriasList