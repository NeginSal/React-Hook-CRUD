import React from 'react';

const Users = ({ users, deleteUser, editRow, addUser }) => {
  return (
    <div className='py-5'>
      {users.length > 0 ?
        <div>
          {
            users.map((user) => {
              return (
                <ul key={user.id}>
                  <li className='flex justify-evenly border-b-2'>
                    <p className='mx-5 my-3 px-5'>{user.name}</p>
                    <p className='mx-5 my-3 px-5'>{user.username}</p>
                    <button
                      className='mx-5 my-3 px-5 py-1 text-green-800
                      hover:bg-green-400 hover:rounded-md hover:border hover:border-green-800'
                      onClick={() => editRow(user)}
                    >EDIT</button>
                    <button
                      className='mx-5 my-3 px-5 py-1 text-red-800
                       hover:bg-red-400 hover:rounded-md hover:border hover:border-red-800'
                      onClick={() => deleteUser(user.id)}
                    >Delete</button>
                  </li>
                </ul>
              )
            })
          }
        </div>
        :
        <div className='text-center text-2xl font-semi-bold my-5'>
          <p>Ooops! There is no user !</p>
        </div>
      }
    </div>
  )
}

export default Users;