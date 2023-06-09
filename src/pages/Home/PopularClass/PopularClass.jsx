import React from 'react';
import { useState, useEffect } from 'react';

const PopularClass = () => {
    const [popular, setpopular] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setpopular(data)
            })
    }, [])

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                popular.slice(0,6).map(item => <>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img className='h-72' src={item.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.instructor}</p>
                            <p>${item.price}</p>
                            <p>{item.number_of_students}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default PopularClass;