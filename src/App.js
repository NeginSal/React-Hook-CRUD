import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/users' element={<UserList />} /> */}
      <Route path='/edit/:id' element={<EditUser />} />
      <Route path='/create' element={< AddUser />} />
    </Routes>
  );
}

export default App;