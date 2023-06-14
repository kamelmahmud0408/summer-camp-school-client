import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import CustomerReview from './CustomerReview/CustomerReview';

const Home = () => {
  
    return (
        <div  >
            
          <Banner></Banner>
          <PopularClass></PopularClass>
          <PopularInstructor></PopularInstructor>
          <CustomerReview></CustomerReview>
           
        </div>
    );
};

export default Home;