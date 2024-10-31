import React, { useState, useEffect } from "react";
import { getCarreras, deleteCarrera } from "../../services/carrerasServices";
import { showConfirmationAlert, showSuccessAlert } from "../../utils/alerts";
import { Link } from "react-router-dom";

const CarrerasList = () => {
  const [carreras, setCarreras] = useState([]);

  // Obtener lista de carreras
  useEffect(() => {
    const cargarCarreras = async () => {
      try {
        const data = await getCarreras();
        setCarreras(data);
      } catch (error) {
        console.log("Error al cargar las carreras");
      }
    };
    cargarCarreras();
  }, []);

  // Función para eliminar carrera
  const handleDelete = async (id) => {

    const respuesta = await showConfirmationAlert('¿Estás seguro de eliminar esta carrera?', 'Si la eliminas, no podrás recuperarla. ¿Deseas continuar?')
      if (respuesta.isConfirmed) {
        try {
          const data = await deleteCarrera(id);
          setCarreras(carreras.filter(carrera => carrera._id !== id));

          showSuccessAlert('¡Carrera Eliminada Correctamente!', 'success')
        } catch (error) {
          showSuccessAlert('Error', 'error', error.message)
        }
      }
  };

  return (
    <ul className="mx-5 lg:mx-20 xl:mx-20">
      {carreras.map((carrera) => (
        <div key={carrera._id} className="hover:bg-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] p-3 m-2 flex items-center justify-between gap-5">
          <p className="flex-1 font-semibold text-2xl">{carrera.name}</p>
          <Link to={`/admin/actualizarcarrera/${carrera._id}`} className="rounded text-xs font-medium ring ring-green-500 text-right bg-green-500 text-white mr-5">
            Actualizar
          </Link>
          <button
            className="rounded text-xs font-medium ring ring-red-500 text-right bg-red-500 text-white mr-5"
            onClick={() => handleDelete(carrera._id)}>
            Eliminar
          </button>
        </div>
      ))}
    </ul>
  );
};

export default CarrerasList;