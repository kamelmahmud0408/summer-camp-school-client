import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';


const ManageClass = () => {

    const [btnDisible, setBtnDisible] = useState(false)
   
  const [showModal, setShowModal] = useState(false); 
    // const [manageClass, setManageClass] = useState([])
    // const [refetch] = useselectedCart()
    // useEffect(() => {
    //     fetch('http://localhost:5000/class')
    //         .then(res => res.json())
    //         .then(data => {
    //             setManageClass(data)
    //         })
    // }, [])

    const { refetch, data: manageClass = [] } = useQuery({
        queryKey: ['class',],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/mangeclass')
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

    {/* You can open the modal using ID.showModal() method */ }

    const handleSendFeedback = (id) => {
        setShowModal(true); // Open the modal
      };


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
                            classItem.status === 'approved' ? 'Approved' : <button onClick={() => handleApproved(classItem)} disabled={btnDisible} className='btn btn-error btn-xs'>Approve</button>
                        }
                        </td>
                        <td>{
                            classItem.status === 'denied' ? 'Denied' : <button onClick={() => handleDeny(classItem)} className='btn btn-error btn-xs'>Deny</button>
                        }
                        </td>
                        <td>
                            {showModal && (
                                <dialog id="my_modal_3" className="modal">
                                    <form method="dialog" className="modal-box">
                                        <button
                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                            onClick={() => setShowModal(false)} // Close the modal
                                        >
                                            ✕
                                        </button>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </form>
                                </dialog>
                            )}

                            <button className="btn" onClick={()=>handleSendFeedback(classItem._id)}>
                                Open Modal
                            </button>
                        </td>


                    </tr>)}


                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;