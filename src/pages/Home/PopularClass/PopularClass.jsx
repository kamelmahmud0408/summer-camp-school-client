import React from 'react';
import { useState, useEffect } from 'react';

const PopularClass = () => {
    const [popular, setpopular] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setpopular(data)
            })
    }, [])

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                popular.map(item => <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.instructor}</p>
                            <p>{item.price}</p>
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