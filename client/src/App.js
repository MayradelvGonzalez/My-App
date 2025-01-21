
// import React from 'react';
// import './index.css';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';
// import Sidebar2 from './components/sidebar2/Sidebar2';
// import Main from './components/main/Main.jsx';
// import UserList from './components/main/userList'; 
// import Sector1 from './components/main/Sector1'; 

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Sector2 from './components/sector2/Sector2'; // Import the Sector2 component
// import Carrousel from './components/carrousel/Carrousel.jsx';

// function App() {
//   return (
//     <Router> 
//       <div>
//         <div className="grid-container" id="caja">
//           <header className="header"><Header /></header> 
//           <nav className="navbar"><Navbar /></nav>
//           <aside className="sidebar"><Sidebar /></aside>
//           <aside className="sidebar2"><Sidebar2 /></aside>
//           <main className="main">
//          <UserList />  
//         </main>
//           <main className="main">
//             <Routes>
//             <Route path="/" element={<Main />} /> 
//               <Route path="/sector2" element={<Sector2 />} /> 
//               <Route path="/sector1" element={<Sector1 />} /> 
//             </Routes>
//           </main>
//           <footer className="footer"><Footer /></footer>
//         </div>
//       </div>
//     </Router>
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
import Main from './components/main/Main.jsx'; 
import UserList from './components/main/userList'; 
import Sector1 from './components/main/Sector1'; 
import Sector2 from './components/sector2/Sector2';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

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
  );
}

export default App;