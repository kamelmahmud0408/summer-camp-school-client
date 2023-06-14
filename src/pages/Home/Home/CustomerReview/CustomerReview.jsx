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

                    <p>Enrolling our child in EliteSports Academy was one of the best decisions we made. The academy offers a well-rounded program that focuses not only on technical training but also on physical fitness, mental conditioning, and character building. The coaches are knowledgeable, passionate, and dedicated to helping each child reach their full potential. Our child's confidence has soared, and they have developed a true love for the sport. We highly recommend EliteSports Academy to any guardian looking for a top-notch sports academy.</p>

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

                    <p>Our experience with EliteSports Academy has been nothing short of exceptional. The coaches and staff go above and beyond to provide a nurturing and supportive environment for our child. They focus not only on skill development but also on instilling important values like teamwork, discipline, and sportsmanship. Our child has shown tremendous growth, both on and off the field, and we couldn't be happier with the results. Thank you, EliteSports Academy, for providing such a fantastic platform for young athletes to thrive </p>

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

                    <p>EliteSports Academy has exceeded our expectations in every aspect. The academy's comprehensive approach to training, including physical conditioning, technical skills, and tactical awareness, has made a significant impact on our child's performance. The coaches create a positive and motivating atmosphere that encourages growth and pushes athletes to their limits. We appreciate the emphasis on character development and values like respect, resilience, and sportsmanship. EliteSports Academy truly goes above and beyond to foster a love for the sport and prepare young athletes for success.</p>

                </div>
            </div>
        </div>
    </div>
    );
};

export default CustomerReview;