// import React from 'react';
// import './main.css';

// function Main({ backendData }) {
//   const [backendData, setBackendData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api");
//         const data = await response.json();
//         setBackendData(data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//     {isLoading ? (
//       <p>Loading...</p>
//     ) : error ? (
//       <p>Error: {error.message}</p>
//     ) : (
//       <ul> 
//         {backendData && backendData.users && (
//           backendData.users.map((user, index) => (
//             <li key={index}>{user}</li>
//           ))
//         )}
//       </ul>
//     )}
//     </div>
//   );
// }

// export default Main;

import React from 'react';
import './main.css';
import UserList from './UserList';

function Main({ users }) {
  return (
    <div className="main-container">
      {/* Otros componentes como Header, Navbar, etc. */}
      <UserList users={users} />
    </div>
  );
}

export default Main;