import React, { useEffect, useState } from 'react';
import { getMaterialesReportados } from '../services/materialesServices';

const DenunciasCounter = () => {
  const [reportCount, setReportCount] = useState(0);

  // Función para obtener el conteo de materiales denunciados
  const fetchReportedMaterials = async () => {
    try {
      const reportes = await getMaterialesReportados();
      setReportCount(reportes.length);
    } catch (error) {
      console.error('Error al obtener reportes:', error.message);
    }
  };

  // Actualización automática cada 30 segundos
  useEffect(() => {
    fetchReportedMaterials();
    const interval = setInterval(fetchReportedMaterials, 30000);
    return () => clearInterval(interval);
  }, []);

  // Si no hay denuncias, no mostrar nada
  if (reportCount === 0) return null;

  return (
    <span className="bg-red-600 text-white text-sm font-bold rounded-full h-6 w-6 flex  justify-center">
      {reportCount}
    </span>
  );
};

export default DenunciasCounter;