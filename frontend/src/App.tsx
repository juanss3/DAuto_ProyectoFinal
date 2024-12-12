import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// pages 
import Login from './pages/login';
import RegisterUser from './pages/RegisterUser';
import Home from './pages/home';

//componentes
import Navbar from './components/Navbar'
import Footer from './components/footer'
import routes from './routes/routes'



const App: React.FC = () => {
  return (
    <Router>
    <Navbar />
    <div className='content'>
      <Routes>
    {routes.map((route, index) => (
      <Route key = {index} path= {route.path} element={<route.component />}/>
    ))}
        <Route path="/" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>

    </div>
    <Footer />
  </Router>
  );
};


export default App;
