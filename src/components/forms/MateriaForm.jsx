import React, { useState, useEffect } from 'react';
import { showSuccessAlert } from '../../utils/alerts';

const MateriaForm = ({ initialData = {}, onSubmit, carrerasDisponibles = [] }) => {
  const [name, setName] = useState(initialData.name || "");
  const [carrerasSeleccionadas, setCarrerasSeleccionadas] = useState(initialData.carreras || []);

  useEffect(() => {
    if (initialData.name) setName(initialData.name);
    if (initialData.carreras) setCarrerasSeleccionadas(initialData.carreras);
  }, [initialData]);

  const handleCheckboxChange = (e) => {
    const carreraName = e.target.value;
    if (e.target.checked) {
      setCarrerasSeleccionadas([...carrerasSeleccionadas, carreraName]);
    } else {
      setCarrerasSeleccionadas(carrerasSeleccionadas.filter(c => c !== carreraName));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit({ name, carreras: carrerasSeleccionadas });

    showSuccessAlert('Materia Creada Correctamente', 'success')
    
    // Limpiar el formulario después de enviar
    setName(""); 
    setCarrerasSeleccionadas([]); 
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 ">
      {/* Formulario de Materia */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre de la Materia:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Selecciona las carreras que contienen la nueva materia:</label>
          {carrerasDisponibles.map((carrera) => (
            <div key={carrera._id} className="flex items-center mb-2 font-normal ">
              <input
                type="checkbox"
                value={initialData._id ? carrera._id : carrera.name}
                checked={initialData._id ? carrerasSeleccionadas.includes(carrera._id) : carrerasSeleccionadas.includes(carrera.name)}
                onChange={handleCheckboxChange}
                className="mr-3 scale-150 cursor-pointer"
              />
              <label>{carrera.name}</label>
            </div>
          ))}
        </div>

        <button type="submit" className="hover:bg-green-400 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-4 rounded w-full">
          {initialData._id ? "Actualizar Materia" : "Crear Materia"}
        </button>
      </form>
    </div>
  );
};

export default MateriaForm;