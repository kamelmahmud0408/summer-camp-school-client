import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel className='text-center relative'>
            <div className='h-[700px]' >
                <img src='https://i.ibb.co/rQbbmRy/football-banner.jpg' />
                <div className='absolute top-60 w-1/2 left-72 text-white text-start'> 
                    <h2 className='text-3xl text-orange-600 font-bold mb-2'>Summer Holiday Tennis Camps for Kids</h2>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quia vero atque eligendi, quam veritatis, similique nobis harum inventore reprehenderit modi maxime, corrupti dolorem eum dolorum deserunt. Illo debitis vitae enim esse provident facere eligendi eius! Alias est nulla qui?</p>
                </div>

            </div>
            <div className='h-[700px]'>
                <img  src='https://i.ibb.co/18FcFfH/cricket-banner.jpg' />

            </div>
            <div className='h-[700px]'>
                <img  src='https://i.ibb.co/M50dpQ3/hocky-banner-2.jpg' />

            </div>
            <div className='h-[700px]' >
                <img src='https://www.cheamtennisclub.co.uk/wp-content/uploads/2020/08/Camps-2020-752x440.jpeg'/>

            </div>
            <div className='h-[700px]'>
                <img   src='https://t3.ftcdn.net/jpg/00/90/01/44/360_F_90014458_fR48dBcf1KuoMTJV48vTl9dGyhQ8kYqF.jpg' />

            </div>
        </Carousel>
    );
};

export default Banner;