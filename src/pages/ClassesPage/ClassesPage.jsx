import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';


const ClassesPage = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    const navigate = useNavigate();
   
    const [allClasses, setAllClasses] = useState([]);

    const [isAdmin] = useAdmin()
    const [isInstructor]=useInstructor()


    useEffect(() => {
        fetch('https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/class')
            .then((res) => res.json())
            .then((data) => {
                setAllClasses(data);
            });
    }, []);

    const handleEnroll = (item) => {
        const { _id, className, instructorName, available_seates, image, price } = item;
        console.log(item);
        if (user && user.email) {
            const cartItem = {
                selectedId: _id,
                className,
                image,
                price,
                instructorName,
                email: user.email,
            };
            fetch('https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                       
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'item added on the cart',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'please login to the order classs',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'please login',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div>
            <h1 className="text-3xl text-orange-500 font-bold  text-center ">Classes</h1>
            <div className="grid grid-cols-3 gap-5 mt-20">
                {allClasses.map((item) => (
                    <div
                        className={`card w-full bg-base-100 shadow-xl ${item.available_seates === '0' ? 'bg-red-500' : ''
                            }`}
                        key={item._id}
                    >
                        <figure>
                            <img className="h-72 rounded" src={item.image} alt="" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="font-bold text-xl">{item.className}</h2>
                            <p className="font-semibold">Instructor Name: {item.instructorName}</p>
                            <p>Price: ${item.price}</p>
                            <p> Available Seats: {item.available_seates}</p>
                            <div className="w-full mt-2 mb-0">
                                <button
                                    onClick={() => handleEnroll(item)}
                                    className={`btn btn-error w-full ${item.available_seates === '0' || isAdmin || isInstructor
                                            ? 'cursor-not-allowed'
                                            : ''
                                        }`}
                                    disabled={
                                        item.available_seates === 0 || isAdmin  || isInstructor
                                    }
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
