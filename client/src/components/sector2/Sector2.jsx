import React from 'react';
// import './main.css';
import UserList2 from '../main/userList2.jsx';

function Sector2({ users }) {
  return (
    <div className="main-container">
      <UserList2 users={users} />
    </div>
  );
}

export default Sector2;