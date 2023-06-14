import React, { useEffect, useState } from 'react';

const Instructor = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/usersInstructor')
            .then(res => res.json())
            .then(data => {
                setInstructor(data)
            })
    }, [])

    return (
        <div>
        <h1 className='text-3xl text-orange-500 font-bold  text-center '>Instructors</h1>
            <div className='grid grid-cols-3 gap-5 mt-20'>
                {
                    instructor.map(item => <>
                        <div key={item._id} className="card w-full bg-base-100 shadow">
                            <figure><img className='h-52 rounded' src={item.image} alt="" /></figure>
                            <div className="card-body ">
                                <h2 className="font-bold text-xl">{item.name}</h2>
                                <p className='font-semibold'>Email: {item.email}</p>

                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Instructor;