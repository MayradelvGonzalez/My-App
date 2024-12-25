import React from 'react';

function Main({ backendData }) {
  return (
    <div>
      {backendData && backendData.users ? (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      ) : backendData === null ? (
        <p>Error al cargar los datos.</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Main;