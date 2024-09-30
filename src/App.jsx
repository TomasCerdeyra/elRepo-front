import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import MateriasPage from "./pages/MateriasPage"
import MaterialesPage from "./pages/MaterialesPage"
import MaterialPage from "./pages/MaterialPage"



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/carrera/:id" element={<MateriasPage />} />{/* Lista de Materias */}
        <Route path="/materia/:id" element={<MaterialesPage />} />{/* Lista de Materiales */}
        <Route path="/material/:id" element={<MaterialPage />} /> {/* Vista de material seleccionado */}
      </Routes>
    </Router>
  )
}

export default App
