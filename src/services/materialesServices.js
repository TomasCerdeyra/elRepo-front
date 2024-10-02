import axios from "axios";

const API_URL = "http://localhost:8080/api/materiales";

export const getMaterilesByMateria = async (materiaId) => {
  try {
    const response = axios.get(`${API_URL}/${materiaId}`);
    return (await response).data;
  } catch (error) {
    throw new Error("Erro al obtener los materiales");
  }
};
