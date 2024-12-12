import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

// Rutas de las paginas
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

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
