import React, { useState } from 'react';

const EditUser = ({ updateUser, currentUser, setEditing }) => {
  const [user, setUser] = useState(currentUser)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex my-10">
        <input
          className='mx-2 px-5 py-2 rounded-full border border-gray-600'
          name="name" value={user.name} onChange={handleOnChange}
          type="text" placeholder="Name" />

        <input
          className='mx-2 px-5 py-2 rounded-full border border-gray-600'
          name="username" value={user.username} onChange={handleOnChange}
          type="text" placeholder="UserName" />

        <button
          className='text-white mx-2 px-5 py-2 rounded-full bg-blue-400 hover:bg-blue-500'>
          EDIT
        </button>
        <button
          className='text-white mx-2 px-5 py-2 rounded-full bg-blue-400 hover:bg-blue-500'
          onClick={() => setEditing(false)}>
          CANCEL
        </button>
      </div>
    </form>
  );
}

export default EditUser;