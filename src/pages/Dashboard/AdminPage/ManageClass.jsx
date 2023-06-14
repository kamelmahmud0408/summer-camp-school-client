import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';


const ManageClass = () => {


    const { refetch, data: manageClass = [] } = useQuery({
        queryKey: ['class',],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/mangeclass')
            return res.json()
        }

    })

    const handleApproved = (item) => {
        fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/class/approved/${item._id}`, {
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
                        title: 'Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })


    }

    const handleDeny = (item) => {
        fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/class/deny/${item._id}`, {
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
                        title: 'Denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }

    
   


    return (
        <div className="overflow-x-auto w-full h-full my-10">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>Class Name</th>
                        <th>instructor Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>seates</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {manageClass.map((classItem, index) => <tr key={classItem._id}>
                        <td>{index + 1}</td>
                        <td><img className='w-14 h-14 rounded-full' src={classItem.image} alt="" /></td>
                        <td>{classItem.className}</td>
                        <td>{classItem.instructorName}</td>
                        <td>{classItem.email}</td>
                        <td>{classItem.price}</td>
                        <td>{classItem.status}</td>
                        <td>{classItem.available_seates}</td>
                        <td>{
                            classItem.status === 'approved' ? 'Approved' : <button onClick={() => handleApproved(classItem)} disabled={classItem.status ==='denied'} className='btn btn-error btn-xs'>Approve</button>
                        }
                        </td>
                        <td>{
                            classItem.status === 'denied' ? 'Denied' : <button onClick={() => handleDeny(classItem)} className='btn btn-error btn-xs' disabled={classItem.status ==='approved'}>Deny</button>
                        }
                        </td>
                        <td>
                        <button onClick={() => handleFeedback(classItem)} className='btn btn-error btn-xs' disabled={classItem.status ==='approved'}>Feedback</button> 
                        </td>


                    </tr>)}


                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;