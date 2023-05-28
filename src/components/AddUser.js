import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const AddUser = ({ addUser }) => {
	const [name, setName] = useState("")
	const [userName, setUserName] = useState("")
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			id: uuidv4(),
			name,
			userName
		}
		addUser(newUser)
		setName('');
		setUserName('');
		navigate('/')
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex my-5">
				<input
					className='mx-2 px-5 py-2 rounded-full border border-gray-600'
					value={name} onChange={(e) => setName(e.target.value)} required
					type="text" placeholder="Name" />
				<input
					className='mx-2 px-5 py-2 rounded-full border border-gray-600'
					value={userName} onChange={(e) => setUserName(e.target.value)} required
					type="text" placeholder="UserName" />
				<button
					className='text-white mx-2 px-5 py-2 rounded-full bg-blue-400 hover:bg-blue-500'
				>
					Add User
				</button>
			</div>
		</form>

	);
}
 
export default AddUser;