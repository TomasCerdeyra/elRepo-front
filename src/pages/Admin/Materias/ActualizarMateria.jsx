import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MateriaForm from "../../../components/forms/MateriaForm";
import { getCarreras } from "../../../services/carrerasServices";
import { updateMateria } from "../../../services/materiasServices";
import { useMateria } from "../../../context/MateriaContext";
import { showSuccessAlert } from "../../../utils/alerts";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const ActualizarMateria = () => {
    const navigate = useNavigate();
    const { materia } = useMateria()
    const [carrerasDisponibles, setCarrerasDisponibles] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const carreras = await getCarreras();
                setCarrerasDisponibles(carreras);
            } catch (error) {
                console.error("Error al cargar las carreras", error);
            }
        };
        cargarDatos();
    }, []);

    const handleSubmit = async (data) => {
        try {
            await updateMateria(materia._id, data);
            const respuesta = await showSuccessAlert('Material Actualizado Correctamente','success', '¡Se te Rediregira al Gestor de Materias!')

            if (respuesta.isConfirmed) {
                navigate("/admin/gestionmaterias");
            }

        } catch (error) {
            console.error("Error al actualizar la materia", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#EFF3F5]">
            <Navbar />
            <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans mt-8'>
                ACTUALIZAR MATERIA
            </h1>
            <div className="h-1 bg-[#4F847C] mt-4 mx-auto mb-6 w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5"></div>

            {materia && (
                <MateriaForm
                    initialData={materia}
                    onSubmit={handleSubmit}
                    carrerasDisponibles={carrerasDisponibles}
                />
            )}
            <Footer />
        </div>
    );
};

export default ActualizarMateria;
