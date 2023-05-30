import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const AddUser = ({ addUser }) => {
	const [name, setName] = useState("")
	const [username, setUserName] = useState("")
	const navigate = useNavigate()

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
		navigate('/')
	}

	return (
		<form onSubmit={handleSubmit}
		// className='sm:flex-col md:flex-row my-5'
		>
			<input
				className='mx-2 px-3 rounded-full border border-gray-600'
				value={name} onChange={(e) => setName(e.target.value)} required
				type="text" placeholder="Name" />
			<input
				className='mx-2 px-3 rounded-full border border-gray-600'
				value={username} onChange={(e) => setUserName(e.target.value)} required
				type="text" placeholder="UserName" />
			<button
				className=' text-white mx-2 px-5 rounded-full bg-blue-400 hover:bg-blue-500'
			>
				Add
			</button>
		</form>

	);
}

export default AddUser;