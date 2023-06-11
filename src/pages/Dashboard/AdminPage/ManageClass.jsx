import React, { useEffect, useState } from 'react';

const ManageClass = () => {

    const [manageClass, setManageClass] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setManageClass(data)
            })
    }, [])

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
                            <td><button className='btn btn-error btn-xs'>Approve</button>
                            </td>
                            <td><button className='btn btn-error btn-xs'>Deny</button>
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