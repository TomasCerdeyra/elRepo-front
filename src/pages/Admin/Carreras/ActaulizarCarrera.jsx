import React, { useEffect, useState } from 'react'
import { showSuccessAlert } from '../../../utils/alerts.js';
import ActualizarCarrearaForm from '../../../components/forms/ActualizarCarrearaForm'
import { getCarreraById, updateCarreraById } from '../../../services/carrerasServices.js'
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../../components/Footer.jsx';
import Navbar from '../../../components/Navbar.jsx';

const ActaulizarCarrera = () => {
    const [carrera, setCarrera] = useState({ name: '', area: '' })
    const { id } = useParams()
    const navigate = useNavigate();

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
            const data = await updateCarreraById(newCarrera, id);
            const confirm = await showSuccessAlert('¡Carrera Actualizada Correctamente!','success')

            if(confirm.isConfirmed){
                navigate('/admin/gestioncarreras')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#EFF3F5]">
            <Navbar />
            <div className='flex-grow'>
                <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>Actualizar CARRERA</h1>
                <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

                {carrera ? (
                    <ActualizarCarrearaForm 
                    onSubmit={handleSubmit} 
                    initialData={{ name: carrera.name, area: carrera.area }} />                                  
                    
                ) : (
                    <p>Cargando datos de la carrera...</p>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default ActaulizarCarrera