import React, { useEffect, useState } from 'react';

const PopularInstructor = () => {

    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/usersInstructor')
            .then(res => res.json())
            .then(data => {
                setPopularInstructor(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-3xl my-10 text-orange-500 font-bold  text-center '>Popular Instructors</h1>
            <div className='grid grid-cols-3 gap-5 mt-20'>
                {
                    popularInstructor.slice(0,6).map(item => <>
                        <div key={item._id} className="card w-full bg-base-100 shadow-md">
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

export default PopularInstructor;