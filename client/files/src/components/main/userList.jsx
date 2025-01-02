import React, { useState, useEffect } from 'react';
import axios from 'axios';
import userdata from '../../data/userdata'; // 

function UserList() {
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api');
//         setUsers(response.data.users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;

// function UserList() {
//     const [users, setUsers] = useState([]);
  
    useEffect(() => {
      setUsers(userdata); // Simplemente asigna los datos directamente al estado
    }, []);
  
    return (
      <div>
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li> // Ajusta el nombre de las propiedades según tu estructura de datos
          ))}
        </ul>
      </div>
    );
  }

  export default UserList; 