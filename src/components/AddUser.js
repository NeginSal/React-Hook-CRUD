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
        <>
            <div class="w-full max-w-xs">
                <form onSubmit={handleSubmit}
                    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label>
                            name
                        </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>
                            Username
                        </label>
                        <input value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div >
                        <button onClick={addUser}>
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}

export default AddUser;