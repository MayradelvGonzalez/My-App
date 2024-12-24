// import React, { useEffect, useState } from 'react';
// import './index.css';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import Main from './components/main/Main';
// import Sidebar from './components/sidebar/Sidebar';
// function App() {
//   const [backendData, setBackendData] = useState([{}])
//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])
//   return (
//     <div>

      
//         <div className='grid-container' id='caja'>
//           <header className='header'><Header /></header>
//           <nav className='navbar'>  <Navbar /></nav>
//           <aside className='sidebar'><Sidebar /></aside>
//           <article className='main'><Main backendData={backendData} /></article>
//           <footer className='footer'><Footer /></footer>
//         </div>
//       </div>


    
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [backendData, setBackendData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid-container" id="caja">
        <header className="header"><Header /></header>
        <nav className="navbar"><Navbar /></nav>
        <aside className="sidebar"><Sidebar /></aside>
        <article className="main">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <Main backendData={backendData} />
          )}
        </article>
        <footer className="footer"><Footer /></footer>
      </div>
    </div>
  );
}

export default App;