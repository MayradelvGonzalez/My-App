import React, { useEffect, useState } from 'react';

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
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;