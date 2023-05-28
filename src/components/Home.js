import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./UserList";


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

  return (
    <div className='flex justify-center my-10 mx-64 bg-slate-100'>
      <UserList
        users={users}
        loading={loading}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default Home;