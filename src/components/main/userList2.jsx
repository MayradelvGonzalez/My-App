import React, { useState, useEffect } from 'react';
import './main.css';
import usersData2 from '../../userdata2.json'; // Importar directamente el JSON

function UserList2() {
  const [users, setUsers2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        setUsers2(usersData2);
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
     
    <div className="containerAlumnos">
  <div className="titulo">  <h1>Alumnos 6°</h1></div>
    <div id='listado' className="lista-scrollable">
      <div>
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
    </div></div>
   );
}

export default UserList2;