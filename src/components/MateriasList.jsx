import React from "react";
import { Link } from "react-router-dom";
import ButtonName from "./buttons/ButtonName";

const MateriasList = ({ materias }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[.13rem]  w-4/5 bg-[#4F847C]"></div>
      <ul className="flex flex-col py-5 gap-3">
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
