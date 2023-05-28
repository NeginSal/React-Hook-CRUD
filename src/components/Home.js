import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:8000/users")
      .then(response => {
        setUsers(response.data)
      })
    setLoading(false)
  }, [])

  const deleteUser = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    setUsers(newUser);
  }
  
  const addUser = (user)=>{
    setUsers([...users,user]) 
  }

  return (
    <div className=''>
      <UserList
        users={users}
        loading={loading}
        deleteUser={deleteUser}
      />
      <AddUser addUser={addUser}/>
    </div>
  );
}

export default Home;