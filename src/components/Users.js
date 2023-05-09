import React from 'react';

const Users = ({ users, deleteUser }) => {
  return (
    <div>
      {users.length > 0 ?
        (
          <div>
            {users.map((user) => {
              return (
                <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                  <button onClick={() => deleteUser(user.id)}>delete </button>
                  <button >edit</button>
                </div>
              );
            })}
          </div>
        ) :
        <div>there is no user !</div>
      }
    </div>
  );
}

export default Users;