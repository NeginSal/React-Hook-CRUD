import { Link } from "react-router-dom";

const UserList = ({ users, loading, deleteUser }) => {



  return (
    <div className='py-5'>
      {loading && <p>loading ...</p>}
      {!loading &&
        <div>
          {(users.map((user) =>
            <div  >
              <ul key={user.id}>
                <li className='flex justify-evenly border-b-2'>
                  <p className='mx-5 my-3 px-5'>{user.name}</p>
                  <p className='mx-5 my-3 px-5'>{user.username}</p>
                  <Link to={`/edit/${user.id}`}>
                    <button
                      className='mx-5 my-3 px-5 py-1 text-green-800
                       hover:bg-green-400 hover:rounded-md hover:border hover:border-green-800'
                    >EDIT</button>
                  </Link>

                  <button
                    className='mx-5 my-3 px-5 py-1 text-red-800
                        hover:bg-red-400 hover:rounded-md hover:border hover:border-red-800'
                    onClick={() => deleteUser(user.id)}
                  >Delete</button>
                </li>
              </ul>
            </div >
          ))}
        </div >
      }
    </div>
  )
}

export default UserList;