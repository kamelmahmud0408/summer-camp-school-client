import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const [myClass, setMyClass] = useState([])
   

    useEffect(() => {
        const url = `http://localhost:5000/myclass?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                
                setMyClass(data)
            })
    }, [user])

    return (
        <div className="overflow-x-auto w-full h-full my-10">
                <table className="table">
                    { }
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Available seates</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {myClass.map((classItem, index) => <tr key={classItem._id}>
                            <td>{index + 1}</td>
                            <td><img className='w-14 h-14 rounded-full' src={classItem.image} alt="" /></td>
                            <td>{classItem.className}</td>
                            <td>{classItem.price}</td>
                            <td>{classItem.status}</td>
                            <td>{classItem.available_seates}</td>
                            <td><button className='btn btn-error btn-sm'>Update</button></td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
    );
};

export default MyClasses;