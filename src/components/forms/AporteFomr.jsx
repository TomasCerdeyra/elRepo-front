import React, { useState } from "react";
import { uploadMaterial } from "../../services/materialesServices";
import { useParams } from "react-router-dom";
import { validarAnio, validarArchivo, validarDescripcion, validarNombre, validarProfesor } from "../../utils/validations";

const AporteForm = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [anio, setAnio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [profesor, setProfesor] = useState("");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Final");
  const [archivo, setArchivo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    let errorMessage =
      validarNombre(nombre) ||
      validarAnio(anio) ||
      validarDescripcion(descripcion) ||
      validarArchivo(archivo) ||
      validarProfesor(profesor)
    if (errorMessage) {
      setMessage(errorMessage);
      return;
    }

    const formData = new FormData();
    formData.append("nombre", `${tipoSeleccionado} - ${nombre}`);
    formData.append("anio", anio);
    formData.append("descripcion", descripcion);
    formData.append("profesor", profesor);
    formData.append("materia", id);
    formData.append("archivo", archivo);

    setLoading(true);
    try {

      await uploadMaterial(formData);
      setMessage("Archivo subido exitosamente");
      setNombre("");
      setAnio("");
      setDescripcion("");
      setProfesor("");
      setArchivo(null);
    } catch (error) {
      setMessage("Error al subir el archivo");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-2">
        <label htmlFor="tipo" className="block">
          Tipo de Aporte
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
        <label htmlFor="nombre" className="block">
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
        <label htmlFor="anio" className="block">
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
        <label htmlFor="descripcion" className="block">
          Descripción:
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border p-2"
          rows="3"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="profesor" className="block">
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
        <label htmlFor="archivo" className="block">
          Archivo:
        </label>
        <input
          type="file"
          id="archivo"
          onChange={(e) => setArchivo(e.target.files[0])}
          className="w-full"
          required
        />
      </div>
      <button
        type="submit"
        className=" bg-green-500 py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? "Subiendo..." : "Subir Aporte"}
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </form>
  );
};

export default AporteForm;
