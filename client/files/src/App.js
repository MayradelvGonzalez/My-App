

// import React, { useEffect, useState } from 'react';
// import './index.css';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';
// import Sidebar2 from './components/sidebar2/Sidebar2';
// import UserList from './components/main/userList'; // Import the UserList component


// function App() {

//   return (
//     <div>
//       <div className="grid-container" id="caja">
//         <header className="header"><Header /></header>
//         <nav className="navbar"><Navbar /></nav>
//         <aside className="sidebar"><Sidebar /></aside>
//         <aside className="sidebar2"><Sidebar2 /></aside>
//         <main className="main">
//           <UserList /> {/* Render the UserList component */}
//         </main>
//         <footer className="footer"><Footer /></footer>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Sidebar2 from './components/sidebar2/Sidebar2';
import Main from './components/main/Main';
import UserList from './components/main/userList'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Sector2 from './components/sector2/Sector2'; // Import the Sector2 component

function App() {
  return (
    <Router> 
      <div>
        <div className="grid-container" id="caja">
          <header className="header"><Header /></header> 
          <nav className="navbar"><Navbar /></nav>
          <aside className="sidebar"><Sidebar /></aside>
          <aside className="sidebar2"><Sidebar2 /></aside>
          <main className="main">
         <UserList /> {/* Render the UserList component */}
        </main>
          <main className="main">
            <Routes>
            <Route path="/" element={<Main />} /> 
              <Route path="/sector2" element={<Sector2 />} /> 
            </Routes>
          </main>
          <footer className="footer"><Footer /></footer>
        </div>
      </div>
    </Router>
  );
}

export default App;