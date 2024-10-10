import React, { useState, useEffect } from "react";
import { getCarreras, deleteCarrera } from "../services/carrerasServices"; 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CarrerasList = () => {
  const [carreras, setCarreras] = useState([]);
  const MySwal = withReactContent(Swal);

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
    // Alerta de confirmación antes de eliminar
    MySwal.fire({
      title: '¿Estás seguro de eliminar esta carrera?',
      text: "Si la eliminas, no podrás recuperarla. ¿Deseas continuar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (respuesta) => {
      if (respuesta.isConfirmed) {
        try {
          await deleteCarrera(id);
          setCarreras(carreras.filter(carrera => carrera._id !== id));

          MySwal.fire(
            '¡Carrera eliminada!',
            'La carrera ha sido eliminada correctamente.',
            'success'
          );
        } catch (error) {
          console.error('Error al eliminar la carrera:', error);
          MySwal.fire(
            'Error',
            'Hubo un problema al eliminar la carrera.',
            'error'
          );
        }
      }
    });
  };

  return (
    <ul className="mx-5 lg:mx-20 xl:mx-20">
      {carreras.map((carrera) => (
        <div key={carrera._id} className="hover:bg-[#4F847C] hover:shadow-md transition duration-200 bg-[#ffff] p-3 m-2 flex items-center justify-between gap-5">
          <p className="flex-1 font-semibold text-2xl">{carrera.name}</p>
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