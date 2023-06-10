import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useEnrolledCart from '../../../hooks/useEnrolledCart';

const PopularClass = () => {
    const {user}=useContext(AuthContext)
    const location = useLocation()
    const navigate= useNavigate()
    const [refetch]=useEnrolledCart()


    const [popular, setpopular] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setpopular(data)
            })
    }, [])

    const handleEnroll=(item)=>{
        const {_id,name,instructor,image,price,number_of_students}=item;
        console.log(item)
        if (user && user.email) {
            const cartItem={enrolledId:_id, name, image, price ,email: user.email}
            fetch('http://localhost:5000/enrolled',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'item added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login to the order classs',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'please login'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}}) 
                }
            })
        }
    }

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                popular.slice(0,6).map(item => <>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img className='h-72 rounded' src={item.image} alt="" /></figure>
                        <div className="card-body ">
                            <h2 className="font-bold text-xl">{item.name}</h2>
                            <p className='font-semibold'>Instructor Name: {item.instructor}</p>
                            <p>Price: ${item.price}</p>
                            <p> Enrolled Student: {item.number_of_students}</p>
                            <div className="w-full mt-2 mb-0">
                                <button onClick={()=>handleEnroll(item)} className="btn btn-error w-full">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default PopularClass;