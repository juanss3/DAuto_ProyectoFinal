import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Login from "./pages/login";
import RegisterUser from "./pages/RegisterUser";
import Home from "./pages/home";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

// Rutas
import routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          {/* Renderizar rutas dinámicas desde el archivo de configuración */}
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}

          {/* Rutas estáticas como respaldo */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
