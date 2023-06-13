import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status }=useRouteError()
    return (
        <div className='flex items-center h-screen p-16 text-gray-900'>
           <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <img className='h-96 mb-8' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=2000" alt="" />
                <div className='max-w-md text-center'>
                 <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                    <span className='sr-only'>Error</span>
                    {status || 404}
                 </h2>
                 <p className='text-2xl font-semibold md:text-3xl text-red-500 mb-8'>{error?.message}</p>
                 <Link  to='/' className='btn btn-error'>Back to Home page </Link>
                </div>
           </div>

        </div>
    );
};

export default ErrorPage;