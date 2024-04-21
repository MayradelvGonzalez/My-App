import React, { useEffect, useState } from 'react';
import './index.css';
function App(){
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
<div>
  <div className='grid-container' id='caja'>
  <header className='header'>HEADER</header>
  <nav className='navbar'>NAVBAR</nav>
  <aside className='sidebar'>SIDEBAR</aside>
  <article className='main'>MAIN</article>
  <footer className='footer'>FOOTER</footer>
  </div>
</div>


    </div>
  );
}

export default App;