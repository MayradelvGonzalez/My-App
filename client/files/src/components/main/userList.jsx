// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import userdata from '../../data/userdata'; // 
// import './main.css';

// function UserList() {
//   const [users, setUsers] = useState([]);

  
//     useEffect(() => {
//       setUsers(userdata); // Simplemente asigna los datos directamente al estado
//     }, []);
  
//     return (
//       <div id='listado'>
//         <h1>Lista de Usuarios</h1>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>{user.name}</li> // Ajusta el nombre de las propiedades según tu estructura de datos
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   export default UserList; 
import React, { useState, useEffect } from 'react';
import './main.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('tu_archivo_json.json'); // Reemplaza con la ruta correcta
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='listado'>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;