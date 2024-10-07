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
import { NewCarrera } from "./pages/Admin/Carreras/NewCarrera";
import { NewMateria } from "./pages/Admin/Materias/NewMateria";




function App() {

  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Login */}
         <Route path="/" element={<LoginPage />} />
         {/* Admin */}
         <Route path="/admin" element={<AdminPage />} />
         <Route path="/admin/gestionaportes" element={<GestionAportes />} />{/* Gestion de Aportes (AdminPage)*/}
         <Route path="/admin/gestioncarreras" element={<GestionCarreras />} />{/* Gestion de Carreras (AdminPage)*/}
         <Route path="/admin/gestionmaterias" element={<GestionMaterias />} />{/* Gestion de Materias (AdminPage)*/}
         <Route path="/admin/agregarcarreras" element={<NewCarrera />} />{/* Agregar carrera (GestionCarreras)*/}
         <Route path="/admin/agregarmaterias" element={<NewMateria />} />{/* Agregar materia (GestionMaterias)*/}
          {/* Admin */}
          {/* Principal */}
         <Route path="/home" element={<HomePage />} />
         <Route path="/carrera/:id" element={<MateriasPage />} />{/* Lista de Materias */}
         <Route path="/materia/:id" element={<MaterialesPage />} />{/* Lista de Materiales */}
         <Route path="/subiraporte" element={<SubirAportePage />} /> {/* Subir Aportes */}
         <Route path="/material/:id" element={<MaterialPage />} /> {/* Vista de material seleccionado */}
          {/* Principal */}        
        </Routes>
     </Router>
    </AppProvider>
  )
}

export default App
