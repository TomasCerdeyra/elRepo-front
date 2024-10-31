import React from "react";
import { Link } from "react-router-dom";
import ButtonName from "../buttons/ButtonName";

const MateriasList = ({ materias }) => {
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 py-5 gap-5">
        {materias.map((materia) => (
          <Link to={`/materia/${materia._id}`} key={materia._id}>
            <ButtonName materia={materia.name} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MateriasList;
