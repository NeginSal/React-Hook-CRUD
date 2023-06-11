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
    axios.delete(`http://localhost:8000/users/${id}`).then((response) => {
      const newUser = users.filter((user) => user.id !== id);
      console.log(response)
      setUsers(newUser);
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <div className="max-w-xl pb-8 mx-auto px-5 bg-slate-100">
      <UserList
        users={users}
        loading={loading}
        deleteUser={deleteUser}
      />
      <AddUser
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default Home;