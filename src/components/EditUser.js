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
            <label>Name</label>
            <input
                name="name"
                value={user.name}
                onChange={handleOnChange}
            />
            <label>Username</label>
            <input name="username" value={user.username} onChange={handleOnChange} />
            <button>Update user</button>
            <button onClick={() => setEditing(false)}>
                Cancel
            </button>
        </form>
    );
}

export default EditUser;