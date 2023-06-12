import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';

const CustomerReview = () => {
    return (
        <div className='my-20'>
        <div className='text-center'>
            <h1 className='text-5xl font-bold text-orange-500 '>What They Say</h1>
            <h3 className='text-xl font-semibold mt-2'>Customer Testimonials</h3>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
            <div className="card card-compact w-full bg-base-100 shadow">
                <div className='flex  items-center'>
                    <img className='w-28 h-28 rounded-full ms-8' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000" alt="" />
                    <div className='ms-8'>
                        <h2 className='text-xl font-bold'>Mr. Kamel</h2>
                        <p className='mt-2'><Rating style={{ maxWidth: 100 }} readOnly /></p>
                    </div>
                </div>
                <div className="card-body mt-8">

                    <p>The service at this academy is exeptional.They  to help me find the perfect toy. Appriciate the focus on sustainable and eco-freindly toys at this shop. Its so important our kids</p>

                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow">
                <div className='flex  items-center'>
                    <img className='w-28 h-28 rounded-full ms-8' src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393645.jpg" alt="" />
                    <div className='ms-8'>
                        <h2 className='text-xl font-bold'>Mr. Badsha</h2>
                        <p className='mt-2'><Rating style={{ maxWidth: 100 }} readOnly /></p>
                    </div>
                </div>
                <div className="card-body mt-8">

                    <p>I am always impressive by the wide range of toys this store has to offer. It's my go to for all things playtime.The customer service at this shop is exeptional.They went above and beyond to help me find the perfect toy </p>

                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow">
                <div className='flex  items-center'>
                    <img className='w-28 h-28 rounded-full ms-8' src="https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=" alt="" />
                    <div className='ms-8'>
                        <h2 className='text-xl font-bold'>Mr. Nahid</h2>
                        <p className='mt-2'><Rating style={{ maxWidth: 100 }} readOnly /></p>
                    </div>
                </div>
                <div className="card-body mt-8">

                    <p>In this shop, The customer service is exeptional.They went above and beyond to help me find the perfect toy. Appriciate the focus on sustainable and eco-freindly toys at this shop. Its so important our kids</p>

                </div>
            </div>
        </div>
    </div>
    );
};

export default CustomerReview;