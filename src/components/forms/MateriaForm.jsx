import React, {useState, useEffect} from 'react'

const MateriaForm = ({ initialData = {}, onSubmit, carrerasDisponibles = [] }) => {
    const [name, setName] = useState(initialData.name || "");
    const [carrerasSeleccionadas, setCarrerasSeleccionadas] = useState(initialData.carreras || []);

    useEffect(() => {
        if (initialData.name) setName(initialData.name);
        if (initialData.carreras) setCarrerasSeleccionadas(initialData.carreras);
    }, [initialData]);

    const handleCheckboxChange = (e) => {
        const carreraName = e.target.value;
        if (e.target.checked) {
            setCarrerasSeleccionadas([...carrerasSeleccionadas, carreraName]);
        } else {
            setCarrerasSeleccionadas(carrerasSeleccionadas.filter(c => c !== carreraName));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, carreras: carrerasSeleccionadas });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="mb-2">
                <label htmlFor="name" className="block">Nombre de la Materia:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block">Selecciona Carreras:</label>
                {carrerasDisponibles.map((carrera) => (
                    <div key={carrera._id} className="flex items-center">
                        <input
                            type="checkbox"
                            value={initialData._id ? carrera._id : carrera.name}
                            checked={initialData._id ? carrerasSeleccionadas.includes(carrera._id) : carrerasSeleccionadas.includes(carrera.name)}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                        />
                        <label>{carrera.name}</label>
                    </div>
                ))}
            </div>
            <button type="submit" className="bg-green-500 py-2 px-4 rounded">
                {initialData._id ? "Actualizar Materia" : "Crear Materia"}
            </button>
        </form>
    );
};

export default MateriaForm;