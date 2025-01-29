import React from 'react';
import './main.css';
import UserList from './userList';

function Sector1({ users }) {
  return (
    <div className="main-container">

      <UserList users={users} />
    </div>
  );
}

export default Sector1;

