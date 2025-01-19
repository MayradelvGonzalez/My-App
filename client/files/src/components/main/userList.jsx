import React, { useState, useEffect } from 'react';
import './main.css';
import usersData from '../../userdata.json'; // Importar directamente el JSON

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
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
        <p>Cargando datos de usuarios...</p>
      ) : error ? (
        <p>Error al cargar los usuarios: {error}</p>
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