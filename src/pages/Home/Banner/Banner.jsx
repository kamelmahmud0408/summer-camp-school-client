import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel className='text-center'>
            <div>
                <img src='https://www.shutterstock.com/image-photo/female-hands-typing-on-laptop-260nw-1729282783.jpg' />

            </div>
            <div>
                <img src='https://www.shutterstock.com/image-photo/female-hands-typing-on-laptop-260nw-1729282783.jpg' />

            </div>
            <div>
                <img src='https://www.shutterstock.com/image-photo/female-hands-typing-on-laptop-260nw-1729282783.jpg' />

            </div>
            <div>
                <img src='https://www.shutterstock.com/image-photo/female-hands-typing-on-laptop-260nw-1729282783.jpg'/>

            </div>
            <div>
                <img src='https://www.shutterstock.com/image-photo/female-hands-typing-on-laptop-260nw-1729282783.jpg' />

            </div>
        </Carousel>
    );
};

export default Banner;