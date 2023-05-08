import React from 'react';

const Users = ({ users }) => {
    return (
        <div>
            {users.length > 0 ?
            (
                <div>{users.map(user =>
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <button class="bg-blue-500 mr-5">edit </button>
                        <button class="bg-blue-500 mr-5">delete</button>
                    </div>)}
                </div>
            ) :
                <div>there is no user !</div>
            }

        </div>
    );
}

export default Users;