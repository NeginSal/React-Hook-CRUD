import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/users/" + id)
      .then(response => {
        const data = response.data;
        setName(data.name);
        setUserName(data.username);
      })
      .catch(error => console.log(error))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8000/users/" + id, {
      name,
      username
    })
      .then(response => {
        setData(response.data);
        navigate('/')
      })
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center bg-slate-100 p-10 mt-10 rounded-md'>
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text" placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text" placeholder="UserName"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="flex my-2">
            <button
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'>
              EDIT
            </button>
            <button
              onClick={goHome}
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default EditUser;