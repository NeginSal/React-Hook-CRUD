import { Link } from "react-router-dom";

const UserList = ({ users, loading, deleteUser }) => {
  
  return (
    <div className='py-5'>
      {loading && <p>loading ...</p>}
      {users &&
        <ul>
          {(users.map((user) =>
            <li className='flex justify-between border-b-4' key={user.id}>
              <div className="flex ">
                <p className='my-3 px-3'>{user.name}</p>
                <p className='my-3 px-3'>{user.username}</p>
              </div>
              <div>
                <Link to={`/edit/${user.id}`}>
                  <button
                    className='mx-2 my-3 px-2 py-1 text-green-800
                       hover:bg-green-400 hover:rounded-md hover:border hover:border-green-800'
                  >EDIT</button>
                </Link>
                <button
                  className='my-3 px-2 py-1 text-red-800 
                        hover:bg-red-400 hover:rounded-md hover:border hover:border-red-800'
                  onClick={() => deleteUser(user.id)}
                >Delete</button>
              </div>
            </li>
          ))}
        </ul >
      }
    </div >
  )
}

export default UserList;