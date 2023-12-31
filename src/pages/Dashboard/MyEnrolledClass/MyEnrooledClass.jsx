import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';


const MyEnrooledClass = () => {
 const {user}=useContext(AuthContext)
    const [enRolledClass, setEnrooledClass] = useState([])
    useEffect(() => {
        fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setEnrooledClass(data)
            })
    }, [])

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
                            <th>Status</th>
                            <th>Payment Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enRolledClass.map((rowData, index) => <tr key={rowData._id} >
                                <td>
                                    {index + 1}
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
                                {rowData.status} 
                                </td>
                                <td>
                                   {rowData.date}
                                </td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrooledClass;