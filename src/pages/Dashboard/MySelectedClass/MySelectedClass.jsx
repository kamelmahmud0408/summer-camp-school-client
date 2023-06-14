import React from 'react';
import useselectedCart from '../../../hooks/useselectedCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {

    const [refetch, selectedData] = useselectedCart()
    console.log(selectedData)

    const handleDelete=(item)=>{
         console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/selecteddelete/${item}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success')
                        }
                    })
            }
        })

    }

    return (
        <div className='w-full h-full my-10'>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                  #
                            </th>
                            <th>image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedData.map((rowData,index)=> <tr key={rowData._id} >
                            <td>
                               {index+1} 
                            </td>
                            <td>
                               <img className='w-14 h-14 rounded-full' src={rowData.image} alt="" />
                            </td>
                            <td>
                                {rowData.className}
                            </td>
                            <td>{rowData?.instructorName}</td>
                            <td>${rowData.price}</td>
                            <td>
                                <button onClick={()=>handleDelete(rowData._id)} className="btn btn-ghost btn-sm"><FaTrash></FaTrash></button>
                            </td>
                            <td>
                                <Link to={`/dashboard/payment/${rowData._id}`}><button className="btn btn-error btn-xs">Pay</button></Link>
                            </td>
                        </tr>)  
                        }
                        
                      
                    
                       
                  
                   </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;