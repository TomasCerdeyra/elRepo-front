import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMaterilesByMateria } from '../../services/materialesServices';
import MaterialesList from '../../components/MaterialesList';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const GestionAportes = () => {
    const { id } = useParams();
    const [materia, setMateria] = useState(null);
    const [materiales, setMateriales] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarMateriales = async () => {
            try {
                const data = await getMaterilesByMateria(id);
                setMateria(data.materia);
                setMateriales(data.materiales);
                setLoading(false);
            } catch (error) {
                console.log('Error al cargar componente');
                setLoading(false);
            }
        };
        cargarMateriales();
    }, [id]);

    if (loading) {
        return <p>Cargando materiales...</p>;

    }

    return (
        <div className='min-h-screen flex flex-col bg-[#EFF3F5]'>
            <Navbar />
            <div className='flex-grow '>
                <h1 className='text-[#16353B] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold font-sans uppercase mt-7'>APORTES DENUNCIADOS</h1>
                <div className="flex justify-center mt-6">
                    <button className="hover:bg-[#3b6b5e] hover:shadow-md transition duration-200 bg-[#4F847C] text-white py-2 px-4 rounded">Buscar Aporte</button>
                </div>
                <div className="h-1 bg-[#4F847C] mt-8 mx-9 mb-6"></div>

                <MaterialesList materiales={materiales} />
            </div>
            <Footer />
        </div>
    )
}

export default GestionAportes