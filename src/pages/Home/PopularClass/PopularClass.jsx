import React from 'react';
import { useState, useEffect } from 'react';


const PopularClass = () => {
    


    const [popular, setpopular] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setpopular(data)
            })
    }, [])

    

    return (
        <div>
            <h1 className='text-3xl my-10 text-orange-500 font-bold  text-center '>Popular Classes</h1>
            <div className='grid grid-cols-3 gap-5'>
            {
                popular.slice(0,6).map(item => <>
                    <div className="card w-full bg-base-100 shadow-md">
                        <figure><img className='h-72 rounded' src={item.image} alt="" /></figure>
                        <div className="card-body ">
                            <h2 className="font-bold text-xl">{item.className}</h2>
                            <p className='font-semibold'>Instructor Name: {item.instructorName}</p>
                            <p>Price: ${item.price}</p>
                            <p> selected Student: {item.available_seates}</p>
                            
                        </div>
                    </div>
                </>)
            }
        </div>
        </div>
    );
};

export default PopularClass;