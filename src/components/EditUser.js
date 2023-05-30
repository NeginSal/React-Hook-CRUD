import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const [data, setData] = useState([])
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/users/" + id)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8000/users/" + id, data)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex my-10">
        <input
          className='mx-2 px-5 py-2 rounded-full border border-gray-600'
          type="text" placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className='mx-2 px-5 py-2 rounded-full border border-gray-600'
          type="text" placeholder="UserName"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />

        <button
          className='text-white mx-2 px-5 py-2 rounded-full bg-blue-400 hover:bg-blue-500'>
          EDIT
        </button>
        <button
          className='text-white mx-2 px-5 py-2 rounded-full bg-blue-400 hover:bg-blue-500'
        >
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default EditUser;