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
    <div>
      <h1>CRUD App with Hooks</h1>
      <div >
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUser
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUser addUser={addUser} />
            <h2>View users</h2>
            <Users
              users={users}
              deleteUser={deleteUser}
              editRow={editRow} />
          </div>
        )}
        {/* <div >
          <h2>Add user</h2>
          <AddUser addUser={addUser} />
          <EditUser
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
        <div >
          <h2>View users</h2>
          <Users
            users={users}
            deleteUser={deleteUser}
            editRow={editRow} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
