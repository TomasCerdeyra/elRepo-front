import React, {Children, createContext, useState} from "react";

//Creo el contexto
export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [area, setArea] = useState(null);
    const [carrera, setCarrera] = useState(null);
    const [logo, setLogo] = useState(null);
    const [materia, setMateria] = useState(null)

    return (
        <AppContext.Provider value={{area,carrera,logo,materia,setArea,setCarrera,setLogo,setMateria}}>
            {children}
        </AppContext.Provider>
    )
}