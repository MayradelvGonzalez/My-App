import React from 'react';
import './main.css';
import UserList from './userList';

function Sector1({ users }) {
  return (
    <div className="main-container">
<div className='alumnos'><UserList users={users} /></div>
      
    </div>
  );
}

export default Sector1;

