import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_pk)
    return (
        <div className='w-full'>
            <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;