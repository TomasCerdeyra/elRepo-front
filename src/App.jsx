import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Materias from "./pages/Materias"
import Materiales from "./pages/Materiales"
import Admin from "./pages/Admin"
import Material from "./pages/Material"



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/carrera/:id" element={<Materias />} />{/* Lista de Materias */}
        <Route path="/materia/:id" element={<Materiales />} />{/* Lista de Materiales */}
        <Route path="/material/:id" element={<Material />} /> {/* Vista de material seleccionado */}
      </Routes>
    </Router>
  )
}

export default App
