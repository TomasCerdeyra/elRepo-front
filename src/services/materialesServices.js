import axios from "axios";

const API_URL = "http://localhost:8080/api/materiales";

//Traer todos los materiales
export const getMaterilesByMateria = async (materiaId) => {
  try {
    const response = axios.get(`${API_URL}/materia/${materiaId}`);
    return (await response).data;
  } catch (error) {
    throw new Error("Erro al obtener los materiales");
  }
};

//obtener un material por su ID
export const getMaterialById = async (materialId) => {
  try {
    const response = await axios.get(`${API_URL}/material/${materialId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el material');
  }
};

//Subir un archivos
export const uploadMaterial = async (formData) => {
  try {
    const response = axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  } catch (error) {
    throw new Error('Error al subir el material')
  }
}

//Denunciar un material
export const reportMaterial = async (materialId) => {
  try {
    const response = await axios.put(`${API_URL}/report/${materialId}`)
    return response.data
  } catch (error) {
    throw new Error('Error al denunciar el material');
  }
}

//Obtener materialies denunciados
export const getMaterialesReportados = async () => {
  try {
    const response = await axios.get(`${API_URL}/reportes`)
    console.log(response.data);
    
    return response.data
  } catch (error) {
    throw new Error('Error al obtener los materiales denunciados')
  }
}

//Eliminar denuncias
export const deleteReports = async (materialId) => {
  try {
    const response = await axios.put(`${API_URL}/deletereport/${materialId}`)
    return response.data
  } catch (error) {
    throw new Error('Error al eliminar las denuncias')
  }
}

//Eliminar Material
export const deleteMaterial = async (materiaId) => {
  try {
    const response = await axios.delete(`${API_URL}/${materiaId}`)
    return response.data
  } catch (error) {
    throw new Error('Error al eliminar Material')
  }
}