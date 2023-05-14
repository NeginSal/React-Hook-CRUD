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
		<form onSubmit={handleSubmit} className='flex mx-auto my-16 w-full max-w-xs'>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className=" px-3 mb-6 ">
					<input
						value={name} onChange={(e) => setName(e.target.value)} required
						className="appearance-none  bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Name" />
				</div>
				<div className="px-3 mb-6">
					<input
						value={username} onChange={(e) => setUserName(e.target.value)} required
						className="appearance-none  bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="UserName" />
				</div>
				<div className="px-3 mb-6">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 rounded"
						onClick={() => addUser}>
						Add User
					</button>
				</div>
			</div>
		</form>

	);
}

export default AddUser;