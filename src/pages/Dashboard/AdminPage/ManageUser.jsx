import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('users')
        return res.data;
    })

    const handleAdmin = user => {
        console.log(user)
        fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleInstructor = user => {
        fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is instrucor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

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
                            <td>{index + 1}</td>
                            <td><img className='w-14 h-14 rounded-full' src={user.image} alt="" /></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin now' : <button onClick={() => handleAdmin(user)} className='btn btn-error btn-sm' disabled={user.role==='instructor'}>Admin</button>
                            }</td>
                            <td>{user.role === 'instructor' ? 'instructor now' :<button onClick={() => handleInstructor(user)} className='btn btn-error btn-sm' disabled={user.role==='admin'}>Instructor</button>
                                }</td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageUser;