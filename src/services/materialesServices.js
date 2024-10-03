import axios from "axios";

const API_URL = "http://localhost:8080/api/materiales";

export const getMaterilesByMateria = async (materiaId) => {
  try {
    const response = axios.get(`${API_URL}/materia/${materiaId}`);
    return (await response).data;
  } catch (error) {
    throw new Error("Erro al obtener los materiales");
  }
};


// Función para obtener un material por su ID
export const getMaterialById = async (materialId) => {
  try {
    const response = await axios.get(`${API_URL}/${materialId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el material');
  }
};