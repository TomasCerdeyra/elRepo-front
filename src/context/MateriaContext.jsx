import React, { createContext, useContext, useState } from "react";
import { getMateriaByName } from "../services/materiasServices";

const MateriaContext = createContext();

export const MateriaProvider = ({ children }) => {
  const [materia, setMateria] = useState(null);

  // obtener la materia por nombre y guardarla en el estado
  const buscarMateriaPorNombre = async (name) => {
    try {
      const response = await getMateriaByName(name);
      
      setMateria(response);
    } catch (error) {
      console.error("Error al traer la materia", error);
    }
  };

  return (
    <MateriaContext.Provider value={{ materia, setMateria, buscarMateriaPorNombre }}>
      {children}
    </MateriaContext.Provider>
  );
};

// Hook para usar el contexto de Materia
export const useMateria = () => useContext(MateriaContext);