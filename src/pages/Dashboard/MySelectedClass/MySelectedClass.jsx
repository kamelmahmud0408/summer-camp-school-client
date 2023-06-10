import React from 'react';
import useEnrolledCart from '../../../hooks/useEnrolledCart';

const MySelectedClass = () => {

    const [refetch, enrolledData] = useEnrolledCart()
    console.log(enrolledData)
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
                            enrolledData.map((rowData,index)=> <tr key={rowData._id} >
                            <td>
                               {index+1} 
                            </td>
                            <td>
                               <img className='w-14 h-14 rounded-full' src={rowData.image} alt="" />
                            </td>
                            <td>
                                {rowData.name}
                            </td>
                            <td>{rowData?.instructor}</td>
                            <td>{rowData.price}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">Pay</button>
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