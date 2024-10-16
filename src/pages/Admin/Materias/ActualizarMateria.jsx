import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MateriaForm from "../../../components/forms/MateriaForm";
import { getCarreras } from "../../../services/carrerasServices";
import { updateMateria } from "../../../services/materiasServices";
import { useMateria } from "../../../context/MateriaContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ActualizarMateria = () => {
    const navigate = useNavigate();
    const { materia } = useMateria()
    const [carrerasDisponibles, setCarrerasDisponibles] = useState([]);

    const MySwal = withReactContent(Swal)

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
            MySwal.fire({
                title: 'Material Actualizado Correctamente, se te Rediregira al Gestor de Materias',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entendido',
              }).then(async (respuesta) => {
                if (respuesta.isConfirmed) {
                    navigate("/admin/gestionmaterias"); 
                }
              }) 
        } catch (error) {
            console.error("Error al actualizar la materia", error);
        }
    };

    return (
        <div>
            <h1>Editar Materia</h1>
            {materia && (
                <MateriaForm
                    initialData={materia}
                    onSubmit={handleSubmit}
                    carrerasDisponibles={carrerasDisponibles}
                />
            )}
        </div>
    );
};

export default ActualizarMateria;
