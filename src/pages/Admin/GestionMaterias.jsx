import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getMateriaByName, createMateria, deleteMateria } from "../../services/materiasServices";
import { getCarreras } from "../../services/carrerasServices";
import { useMateria } from "../../context/MateriaContext";
import MateriaForm from "../../components/forms/MateriaForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const GestionMaterias = () => {
  const MySwal = withReactContent(Swal);
  const [nameMateria, setNameMateria] = useState("");
  const [carrerasDisponibles, setCarrerasDisponibles] = useState([]);

  const { materia, buscarMateriaPorNombre, setMateria } = useMateria();

  useEffect(() => {
    cargarCarreras();

    // Limpiar el estado de la materia cuando se carga la página
    setMateria(null);
  }, []);

  const cargarCarreras = async () => {
    try {
      const data = await getCarreras();
      setCarrerasDisponibles(data);
    } catch (error) {
      console.error("Error al cargar las carreras", error);
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    await buscarMateriaPorNombre(nameMateria);
  };

  const handleDelete = async (id) => {
    MySwal.fire({
      title: '¿Estas seguro de eliminar la materia buscada?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No'
    }).then(async (respuesta) => {
      if (respuesta.isConfirmed) {
        try {
          const response = await deleteMateria(id);
          console.log(response);
          setMateria(null);
          MySwal.fire(
            '¡Carrera eliminada!',
            'La carrera ha sido eliminada correctamente.',
            'success'
          );
        } catch (error) {
          console.error('Error al eliminar la materia', error);
        }
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7">
          GESTIONAR MATERIAS
        </h1>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">

          {/* Formulario de Búsqueda */}
          <h2 className='text-[#16353B] md:py-1 sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans'>
            ACTUALIZAR O ELIMINAR MATERIA:
          </h2>

          <form onSubmit={handleSearchSubmit} className="mb-4 bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto">
            <label className="block mb-2 text-gray-700 font-bold">Buscar Materia</label>
            <input
              type="text"
              value={nameMateria}
              onChange={(e) => setNameMateria(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button
              type="submit"
              className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded w-full"
            >
              Buscar
            </button>
          </form>

          {/* Mostrar Materia Encontrada */}
          {materia && (
            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto mb-4">
              <h3 className="text-lg font-bold mb-4">{materia.name}</h3>
              <div className="flex justify-between">
                <button
                  onClick={() => handleDelete(materia._id)}
                  className="rounded font-medium hover:ring-red-600 hover:bg-red-600 ring-red-500 text-right bg-red-500 text-white px-5 py-1"
                >
                  Eliminar
                </button>
                <Link
                  to={`/admin/actualizarmateria/`}
                  className="rounded font-medium hover:ring-blue-600 hover:bg-blue-600 ring-blue-500 text-right bg-blue-500 text-white px-5 py-1"
                >
                  Actualizar
                </Link>
              </div>
            </div>
          )}

          {/* Formulario de Crear Materia */}
          <h2 className='text-[#16353B] md:py-1 sm:px-32 text-1xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-normal font-sans mt-4'>
            AÑADIR MATERIA:
          </h2>

          <MateriaForm
            onSubmit={createMateria}
            carrerasDisponibles={carrerasDisponibles}
            className="mb-4" // Puedes agregar una clase aquí si deseas un margen en la parte inferior
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GestionMaterias;