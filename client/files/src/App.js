
// import React, { useEffect, useState } from 'react';
// import './index.css';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';

// function App({backendData}) {


//   return (
//     <div>
//       <div className="grid-container" id="caja">
//         <header className="header"><Header /></header>
//         <nav className="navbar"><Navbar /></nav>
//         <aside className="sidebar"><Sidebar /></aside>
//         <main className="main"><main backendData={backendData} /></main>
      
//         <footer className="footer"><Footer /></footer>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import UserList from './components/main/userList'; // Import the UserList component


function App() {

  return (
    <div>
      <div className="grid-container" id="caja">
        <header className="header"><Header /></header>
        <nav className="navbar"><Navbar /></nav>
        <aside className="sidebar"><Sidebar /></aside>
        <main className="main">
          <UserList /> {/* Render the UserList component */}
        </main>
        <footer className="footer"><Footer /></footer>
      </div>
    </div>
  );
}

export default App;