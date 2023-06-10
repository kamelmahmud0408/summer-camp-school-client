import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <>
            <h3>All user: {users.length}</h3>

            <div className="overflow-x-auto w-full h-full my-10">
                <table className="table">
                    { }
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <td>{index+1}</td>
                            <td><img className='w-14 h-14 rounded-full' src={user.image} alt="" /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>Admin</td>
                            <td>Instructor</td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageUser;