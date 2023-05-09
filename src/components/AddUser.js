import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddUser = ({ addUser }) => {
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuidv4(),
            name,
            username
        }
        addUser(newUser)
        setName('');
        setUserName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    name
                </label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>
                    Username
                </label>
                <input value={username} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div >
                <button onClick={() => addUser}>
                    Add User
                </button>
            </div>
        </form>
    );
}

export default AddUser;