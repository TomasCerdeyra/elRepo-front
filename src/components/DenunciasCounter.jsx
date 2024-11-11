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
  }, []);

  // Si no hay denuncias, no mostrar nada
  if (reportCount === 0) return null;

  return (
    <span className="bg-red-600 text-white text-sm text-center font-light rounded-full h-4 w-4 flex items-center justify-center ml-2">
      {reportCount}
    </span>
  );
};

export default DenunciasCounter;