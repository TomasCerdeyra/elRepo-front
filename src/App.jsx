import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import LoginPage from "./pages/LoginPage"
import AdminPage from "./pages/AdminPage"
import GestionCarreras from './pages/Admin/GestionCarreras';
import GestionMaterias from './pages/Admin/GestionMaterias';
import GestionAportes from './pages/Admin/GestionAportes';
import HomePage from "./pages/HomePage"
import MateriasPage from "./pages/MateriasPage"
import MaterialesPage from "./pages/MaterialesPage"
import MaterialPage from "./pages/MaterialPage"
import SubirAportePage from "./pages/SubirAportePage"




function App() {

  return (
    <AppProvider>
      <Router>
        <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/admin" element={<AdminPage />} />
         <Route path="/gestionaportes" element={<GestionAportes />} />{/* Gestion de Aportes (AdminPage)*/}
         <Route path="/gestioncarreras" element={<GestionCarreras />} />{/* Gestion de Carreras (AdminPage)*/}
         <Route path="/gestionmaterias" element={<GestionMaterias />} />{/* Gestion de Materias (AdminPage)*/}
         <Route path="/home" element={<HomePage />} />
         <Route path="/carrera/:id" element={<MateriasPage />} />{/* Lista de Materias */}
         <Route path="/materia/:id" element={<MaterialesPage />} />{/* Lista de Materiales */}
         <Route path="/subiraporte" element={<SubirAportePage />} /> {/* Subir Aportes */}
         <Route path="/material/:id" element={<MaterialPage />} /> {/* Vista de material seleccionado */}
        </Routes>
     </Router>
    </AppProvider>
  )
}

export default App
