import React, { useState } from 'react';
import axios from "axios";

const AddUser = ({ setUsers, users }) => {
	const [name, setName] = useState("")
	const [username, setUserName] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:8000/users`, { name, username })
			.then((res) => {
				setUsers([...users, res.data])
				setName('');
				setUserName('');
			});
	};

	return (
			<form onSubmit={handleSubmit}>
				<div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly'>
					<div className='mb-2'>
						<input
							className='px-3 py-1 rounded-full border border-gray-600'
							value={name} onChange={(e) => setName(e.target.value)} required
							type="text" placeholder="Name" />
					</div>
					<div className='mb-2'>
						<input
							className='px-3 py-1 rounded-full border border-gray-600'
							value={username} onChange={(e) => setUserName(e.target.value)} required
							type="text" placeholder="UserName" />
					</div>
					<div className='mb-2'>
						<button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
							Add
						</button>
					</div>
				</div>
			</form>


	);
}

export default AddUser;