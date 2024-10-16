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
  const MySwal = withReactContent(Swal)
  const [nameMateria, setNameMateria] = useState("");
  const [carrerasDisponibles, setCarrerasDisponibles] = useState([]);

  const { materia, buscarMateriaPorNombre, setMateria } = useMateria()

  useEffect(() => {
    cargarCarreras();
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
    await buscarMateriaPorNombre(nameMateria)
  };

  const handleDelete = async (id) => {
    MySwal.fire({
      title: '¿Estas seguro de eliminar la materia buscada?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(async (respuesta) => {
      if (respuesta.isConfirmed) {
        try {
          const response = await deleteMateria(id);
          console.log(response);
          setMateria(null);
          MySwal.fire(
            '¡Materia Eliminada Correctamente!',
            'success'
          );

        } catch (error) {
          console.error('Error al denunciar el material:', error);
        }
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
      <Navbar />
      <div className="flex-grow">
        <h1 className="text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7">
          GESTIONAR MATERIAS
        </h1>
        <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

        {/* Formulario de Búsqueda de Materia */}
        <form onSubmit={handleSearchSubmit} className="mb-6">
          <label className="block">Buscar Materia Para Eliminar o Actualizar</label>
          <input
            type="text"
            value={nameMateria}
            onChange={(e) => setNameMateria(e.target.value)}
            className="border p-2 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
            Buscar
          </button>
        </form>

        {/* Mostrar Materia Encontrada */}
        {materia && (
          <div className="p-4 bg-white shadow-md rounded mb-6">
            <h3 className="text-lg font-bold">{materia.name}</h3>
            <button
              onClick={() => handleDelete(materia._id)}
              className="bg-red-500 text-white py-2 px-4 rounded mt-2 mr-2"
            >
              Eliminar
            </button>
            <Link to={`/admin/actualizarmateria/`} className="bg-yellow-500 text-white py-2 px-4 rounded mt-2">
              Actualizar
            </Link>
          </div>
        )}

        {/* Formulario de Crear Materia */}
        <MateriaForm
          onSubmit={createMateria}
          carrerasDisponibles={carrerasDisponibles}
        />
      </div>
      <Footer />
    </div>
  );
};

export default GestionMaterias;