import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ActualizarCarrearaForm from '../../../components/forms/ActualizarCarrearaForm'
import { getCarreraById, updateCarreraById } from '../../../services/carrerasServices.js'
import { useParams } from 'react-router-dom';

const ActaulizarCarrera = () => {
    const [carrera, setCarrera] = useState({ name: '', area: '' })
    const MySwal = withReactContent(Swal)
    const { id } = useParams()

    useEffect(() => {
        const getCarrera = async () => {
            try {
                const carreraById = await getCarreraById(id)
                setCarrera(carreraById)
                console.log(carrera);

            } catch (error) {
                console.error("Error al cargar la carrera", error);
            }
        }
        getCarrera()
    }, [id])


    const handleSubmit = async (newCarrera) => {
        try {
            const data = await updateCarreraById(newCarrera, id)

            MySwal.fire('Carrea Actualizada Correctamente')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>Actualizar CARRERA</h1>
            {carrera ? (
                <ActualizarCarrearaForm onSubmit={handleSubmit} initialData={{ name: carrera.name, area: carrera.area }} />
            ) : (
                <p>Cargando datos de la carrera...</p>
            )}
        </div>
    )
}

export default ActaulizarCarrera