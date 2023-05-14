import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Users from './components/Users';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    setUsers([...users, user])
  }
  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers)
  }
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div >
      {/* <h1 className='text-center text-blue-700 text-2xl font-bold my-5'>
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white mx-2"> CRUD App </span>
        </span>
          with React Hooks
      </h1> */}
      <blockquote className="text-2xl font-semibold italic text-center text-blue-700 my-10">
        <span className="mx-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-400 relative inline-block">
          <span className="relative text-white "> CRUD App </span>
        </span>
          with React Hooks
      </blockquote>
      <div className='flex justify-center m-5 bg-slate-100'>
        {editing ? (
          <div>
            <EditUser
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div >
            <Users
              users={users}
              deleteUser={deleteUser}
              editRow={editRow} />
            <AddUser addUser={addUser} />
          </div>

        )}
      </div>
    </div>
  );
}

export default App;
