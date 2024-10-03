import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ButtonName = ({ carrera, logo, area, materia, onClick }) => {
  const { setArea, setCarrera, setLogo, setMateria } = useContext(AppContext);

  const handleClick = () => {
    if (area && logo && carrera) {
      // Si recibe área, logo y carrera, actualiza esas propiedades
      setArea(area);
      setLogo(logo);
      setCarrera(carrera);
    }
    
    if (materia) {
      // Si recibe una materia, solo actualiza la materia
      setMateria(materia);
    }

    // Si hay una acción adicional proporcionada, la ejecutamos
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="bg-[#4F847C] text-white w-full font-light py-1 px-1 sm:py-2" onClick={handleClick}>
      {carrera ? carrera : materia}
    </button>
  );
};

export default ButtonName;

