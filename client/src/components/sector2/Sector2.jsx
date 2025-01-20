import React from 'react';
// import './main.css';
import UserList2 from '../main/userList2.jsx';

function Sector2({ users }) {
  return (
    <div className="main-container">
      {/* Otros componentes como Header, Navbar, etc. */}
      <UserList2 users={users} />
    </div>
  );
}

export default Sector2;