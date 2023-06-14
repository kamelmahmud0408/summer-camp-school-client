import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import {  useParams } from 'react-router-dom';



const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_pk)
   
    const { id } = useParams()
    const [selectedData,setselectedData]=useState([])
    useEffect(() => {
        fetch(`https://summer-camp-learning-school-server-kamelmahmud0408.vercel.app/selectedById/${id}`)
        .then(res =>res.json())
        .then(data=> {
            setselectedData(data)
        })
    }, [])

    console.log()

    return (
        <div className='w-full'>
            <Elements stripe={stripePromise}>

                <CheckoutForm selectedData={selectedData}></CheckoutForm>

            </Elements>

        </div>
    );
};

export default Payment;