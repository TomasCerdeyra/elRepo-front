import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getMaterialById } from "../services/materialesServices";
import MaterialDetail from "../components/MaterialDetail";

const MaterialPage = () => {
  const { id } = useParams(); // Obtener el ID del material desde la URL
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarMaterial = async () => {
      try {
        const data = await getMaterialById(id); 
        setMaterial(data); 
        setLoading(false);
      } catch (error) {
        setError('Error al cargar el material');
        setLoading(false);
      }
    };
    cargarMaterial();
  }, [id]);

  if (loading) {
    return <p>Cargando material...</p>;
  }

  return (
    
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">

      <MaterialDetail material={material} />
 
      </div>
      <Footer />
      </div>
    
  );
};

export default MaterialPage;
