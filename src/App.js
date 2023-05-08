import React from 'react';
import Users from './components/Users';
function App() {
  return (
    <div>
      <h1>CRUD App with Hooks</h1>
      <div >
        <div >
          <h2>Add user</h2>
        </div>
        <div >
          <h2>View users</h2>
          <Users/>
        </div>
      </div>
    </div>
  );
}

export default App;
