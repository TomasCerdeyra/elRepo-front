import React from 'react'
import { Link } from 'react-router-dom';

const MateriasList = ({ materias }) => {
    return (
        <ul>
            {materias.map((materia) => (
                <li key={materia._id}>
                    <Link to={`/materia/${materia._id}`}>
                        {materia.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MateriasList