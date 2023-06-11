import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const ManageClass = () => {

    // const [manageClass, setManageClass] = useState([])
    // const [refetch] = useselectedCart()
    // useEffect(() => {
    //     fetch('http://localhost:5000/class')
    //         .then(res => res.json())
    //         .then(data => {
    //             setManageClass(data)
    //         })
    // }, [])

    const {refetch, data: manageClass=[]}=useQuery({
        queryKey:['class', ],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/class')
            return res.json()
        }
        
    })

    const handleApproved = (item) => {
        fetch(`http://localhost:5000/class/approved/${item._id}`, {
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
        fetch(`http://localhost:5000/class/deny/${item._id}`, {
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
                            classItem.status === 'approved' ? 'Approved' : <button onClick={() => handleApproved(classItem)} className='btn btn-error btn-xs'>Approve</button>
                        }
                        </td>
                        <td>{
                            classItem.status === 'denied' ? 'Denied' : <button onClick={() => handleDeny(classItem)} className='btn btn-error btn-xs'>Deny</button>
                        }
                        </td>
                        <td><button className='btn btn-error btn-xs'>Feedback</button>
                        </td>


                    </tr>)}


                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;