import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadMaterial } from "../../services/materialesServices";
import { useParams } from "react-router-dom";
import { validarAnio, validarArchivos, validarDescripcion, validarNombre, validarProfesor } from "../../utils/validations";
import { showSuccessAlert } from "../../utils/alerts";

const AporteForm = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [anio, setAnio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [profesor, setProfesor] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Final");
  const [archivos, setArchivos] = useState([]);  // Ahora manejamos múltiples archivos
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Manejar la selección de múltiples archivos
  const handleFileChange = (e) => {
    setArchivos(e.target.files);  // Guardamos múltiples archivos en el estado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    let errorMessage =
      validarNombre(nombre) ||
      validarAnio(anio) ||
      validarDescripcion(descripcion) ||
      validarArchivos(archivos) ||  // Aquí también validamos los archivos
      validarProfesor(profesor);
    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    const formData = new FormData();
    formData.append("tipoAporte", tipoSeleccionado);
    formData.append("nombre", nombre);
    formData.append("anio", anio);
    formData.append("descripcion", descripcion);
    formData.append("profesor", profesor);
    formData.append("materia", id);

    // Adjuntar múltiples archivos al FormData
    for (let i = 0; i < archivos.length; i++) {
      formData.append("archivos", archivos[i]);  // Cambiamos 'archivo' por 'archivos'
    }

    setLoading(true);
    try {
      await uploadMaterial(formData);
      // Mostrar mensaje de éxito con SweetAlert2
      const respuesta = await showSuccessAlert("¡El aporte se ha subido exitosamente!", "success")

      if (respuesta.isConfirmed) {
        navigate(`/materia/${id}`);
      }

    } catch (error) {
      setMessage("Error al subir el archivo");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white p-6 rounded shadow-md w-full max-w-lg mx-auto mb-4">
      <div className="mb-2">
        <label htmlFor="tipo" className="block font-semibold">
          Tipo de Aporte:
        </label>
        <select
          id="tipo"
          value={tipoSeleccionado}
          onChange={(e) => setTipoSeleccionado(e.target.value)}
          className="w-full border p-2"
        >
          <option value="Final">Final</option>
          <option value="Parcial">Parcial</option>
          <option value="Trabajo Practico">Trabajo Práctico</option>
          <option value="Apunte">Apunte</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="nombre" className="block font-semibold">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border p-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="anio" className="block font-semibold">
          Año:
        </label>
        <input
          type="number"
          id="anio"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          className="w-full border p-2"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="descripcion" className="block font-semibold">
          Descripción (Opcional):
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border p-2"
          rows="3"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="profesor" className="block font-semibold">
          Profesor (Opcional):
        </label>
        <input
          type="text"
          id="profesor"
          value={profesor}
          onChange={(e) => setProfesor(e.target.value)}
          className="w-full border p-2"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="archivo" className="block font-semibold">
          Archivos:
        </label>
        <input
          type="file"
          id="archivo"
          onChange={handleFileChange}
          multiple
          className="w-full"
          required
        />
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          className="hover:bg-green-400 hover:shadow-md transition duration-200 bg-green-600 text-white py-2 px-6 rounded mt-5"
          disabled={loading}
        >
          {loading ? "Subiendo..." : "Subir Aporte"}
        </button>
      </div>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </form>
  );
};

export default AporteForm;
