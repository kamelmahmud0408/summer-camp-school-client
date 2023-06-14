import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const AddClass = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/dashboard/myclasses'


    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const {className,image,instructorName,email,price,available_seates}=data;
  const classItems={
    className,
    image,
    instructorName,
    email,
    price,
    available_seates,
    status:"pending",
    student:0,
    feedback:""
  }
        fetch('https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/class', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(classItems)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'class added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                 navigate(from, { replace: true })
            })
    }


    return (
        <div className=' w-full h-full ms-10' >
            <h1 className='text-center text-3xl text-orange-500 font-bold my-10'>Add a Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}

                <div className='grid grid-cols-2 gap-3'>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Class Name</h3>

                        <input
                            className=" w-full p-2 border"
                            {...register("className")}
                            placeholder="Class Name "

                        />

                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-3'>Class Image</h3>
                        <input
                            className="w-full p-2 border"
                            {...register("image")}
                            placeholder="image link"
                            type="url"

                        />
                    </div>

                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Instructor Name</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("instructorName")}
                            placeholder="InstructorName"
                            defaultValue={user?.displayName}

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Instrctor Email</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("email")}
                            placeholder="email"
                            defaultValue={user?.email}

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Price</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("price")}
                            placeholder="Price"

                        />

                    </div>
                    <div className='mb-3'>
                        <h3 className='text-xl font-semibold mb-3'>Available Seates</h3>

                        <input
                            className="w-full p-2 border"
                            {...register("available_seates")}
                            placeholder="Available Seates"

                        />

                    </div>
                       
                </div>


                <input className=" btn btn-error mt-5 w-full" value="Add Class" type="submit" />
            </form>
        </div>
    );
};

export default AddClass;