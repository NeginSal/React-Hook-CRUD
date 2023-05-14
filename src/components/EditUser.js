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
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <input
                        name="name" value={user.name} onChange={handleOnChange}
                        class="appearance-none  bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Name" />
                </div>
                <div class="mb-6">
                    <input
                        name="username" value={user.username} onChange={handleOnChange}
                        class="appearance-none  bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="UserName" />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-5 border-green-700 rounded">
                        EDIT USER
                    </button>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 rounded"
                        onClick={() => setEditing(false)}>
                        CANCEL
                    </button>

                </div>
            </form>
        </div>
    );
}

export default EditUser;