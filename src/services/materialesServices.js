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
    const response = await axios.get(`${API_URL}/${materialId}`);
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