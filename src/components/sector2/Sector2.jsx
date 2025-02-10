import React from 'react';
import '../../index.css';
import UserList2 from '../main/userList2.jsx';

function Sector2({ users }) {
  return (
    <div className="main-container">
      <div className="alumnos">
      <UserList2 users={users} />
      </div>
     
    </div>
  );
}

export default Sector2;