import React from 'react';

function Main({ backendData }){
   
    
    return (
      <div>
         
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}

</div>

)
    
}

export default Main;