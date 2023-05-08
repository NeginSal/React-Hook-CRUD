import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Users from './components/Users';
import AddUser from './components/AddUser';

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(usersData)
  
  const addUser = (user) => {
    setUsers([...users, user])

  }

  return (
    <div>
      <h1>CRUD App with Hooks</h1>
      <div >
        <div >
          <h2>Add user</h2>
          <AddUser addUser={addUser} />
        </div>
        <div >
          <h2>View users</h2>
          <Users users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
