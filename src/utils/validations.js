import { tiposPermitidos } from "./conts";

// Función para validar el archivo
export const validarArchivos = (files) => {
  if (!files || files.length === 0) {
    return "Por favor, seleccione al menos un archivo.";
  }

  for (const file of files) {
    const extension = file.name.split(".").pop().toLowerCase();
    if (!tiposPermitidos.includes(`.${extension}`)) {
      return `El archivo ${file.name} no es de un tipo permitido.`;
    }
  }
  
  return null;
};

// validar el nombre
export const validarNombre = (nombre) => {
  if (!nombre) {
    return "Por favor, ingrese un nombre.";
  }
  if (nombre.length > 50) {
    return "El nombre del material no debe exceder los 20 caracteres.";
  }
  return null;
};

// validar el año
export const validarAnio = (anio) => {
  const anioActual = new Date().getFullYear();
  if (!anio) {
    return "Por favor, ingrese un año.";
  }
  if (anio < 2008 || anio > anioActual) {
    return `El año debe estar entre 2008 y ${anioActual}.`;
  }
  return null;
};

// validar la descripción
export const validarDescripcion = (descripcion) => {
  if (descripcion.length > 500) {
    return "La descripción no debe exceder los 20 caracteres.";
  }
  return null;
};

//validar Profesor
export const validarProfesor = (profesor) => {
  if (profesor.length > 20) {
    return "El Profesor no debe exceder los 500 caracteres.";
  }
};
