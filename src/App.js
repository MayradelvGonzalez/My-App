
import React, { useState } from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Sidebar2 from './components/sidebar2/Sidebar2.jsx';
import Main from './components/main/Main.jsx'; 
import Sector1 from './components/main/Sector1.jsx'; 
import Sector2 from './components/sector2/Sector2.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import GradeContext from './context/GradeContext.jsx'; // Import GradeContext here

function App() {
  const [grade, setGrade] = useState('home'); // Estado inicial: 'home'

  return (
    <GradeContext.Provider value={{ grade, setGrade }}>
      <Router> 
        <div>
          <div className="grid-container" id="caja">
            <header className="header"><Header /></header> 
            <nav className="navbar"><Navbar /></nav>
            <aside className="sidebar"><Sidebar /></aside>
            <aside className="sidebar2"><Sidebar2 /></aside>
            <main className="main"> 
              <Routes>
                <Route path="/" element={<Main />} /> 
                <Route path="/sector2" element={<Sector2 />} /> 
                <Route path="/sector1" element={<Sector1 />} /> 
              </Routes>
            </main>
            <footer className="footer"><Footer /></footer>
          </div>
        </div>
      </Router>
    </GradeContext.Provider>
  );
}

export default App;