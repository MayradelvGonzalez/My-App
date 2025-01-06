// import React, { useState, useEffect } from 'react';
// import './main.css';
// function UserList() {
 

//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Use setIsLoading
//   const [error, setError] = useState(null);

//   useEffect(() => {
   
//     const fetchData = async () => {
    

//       setIsLoading(true);
    
//       try {

       
//         const response = await fetch('../data/userdata.json'); // Replace with the correct path
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         setError(error.message); // Use error.message for the error message
//         console.error('Error al obtener los datos:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div id='listado'>
//       <h1>Lista de Usuarios</h1>
//       {isLoading ? (
//         <p>Cargando...</p>
//       ) : error ? (
//         <p>Error al cargar: {error}</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default UserList;

import React, { useState, useEffect } from 'react';
import './main.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Use setIsLoading
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
       
        const response = await fetch('../userdata.json'); // 
        const data = await response.json();
        console.log('Fetched data:', data);
        setUsers(data);
      } catch (error) {
        setError(error.message);
        console.error('Error al obtener los datos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='listado'>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error al cargar: {error}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron usuarios.</p>
      )}
    </div>
  );
}

export default UserList;