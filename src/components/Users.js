import React from 'react';

const Users = ({ users, deleteUser, editRow }) => {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <table class="min-w-fit text-center text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-1 py-2">Name</th>
                  <th scope="col" class="px-1 py-2">UserName</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) =>
                    <tr key={user.id}
                      class="border-b border-primary-200 bg-primary-100 text-neutral-800">
                      <td class="whitespace-nowrap px-1 py-2 font-medium">
                        {user.name}
                      </td>
                      <td class="whitespace-nowrap px-1 py-2">{user.username}</td>
                      <td class="whitespace-nowrap px-1 py-2">
                        <button
                          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                          onClick={() => editRow(user)}> edit </button></td>
                      <td class="whitespace-nowrap px-1 py-2">
                        <button
                          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  rounded'
                          onClick={() => deleteUser(user.id)}> delete </button></td>
                    </tr>
                  )
                )
                  :
                  <tr>
                    <td className='text-center'>No users</td>
                  </tr>
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default Users;