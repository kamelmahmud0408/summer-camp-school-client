import React from 'react';

const Banner = () => {
    return (
        <>

            <div className="carousel w-full  h-[400px] lg:h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/rQbbmRy/football-banner.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                            <h2 className=' text-xl lg:text-6xl  font-bold'>Keeping Your Body Fit and  <span className='text-orange-500'>Healthy</span></h2>
                            <p>Engaging in sports activities is not only enjoyable but also offers numerous benefits for maintaining a fit and healthy body. Whether you participate in team sports or individual activities, incorporating sports into your routine can have a positive impact on your overall well-being.</p>

                            <div>
                                <button className="btn btn-error btn-outline px-8 mr-5">Explore Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle text-orange-500">❮</a>
                        <a href="#slide2" className="btn btn-circle text-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/18FcFfH/cricket-banner.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                            <h2 className=' text-xl lg:text-6xl  font-bold'>Keeping Your Body Fit and  <span className='text-orange-500'>Healthy</span></h2>
                            <p>Engaging in sports activities is not only enjoyable but also offers numerous benefits for maintaining a fit and healthy body. Whether you participate in team sports or individual activities, incorporating sports into your routine can have a positive impact on your overall well-being.</p>

                            <div>
                                <button className="btn btn-error btn-outline px-8 mr-5">Explore Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle text-orange-500">❮</a>
                        <a href="#slide3" className="btn btn-circle text-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/M50dpQ3/hocky-banner-2.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                            <h2 className=' text-xl lg:text-6xl  font-bold'>Keeping Your Body Fit and  <span className='text-orange-500'>Healthy</span></h2>
                            <p>Engaging in sports activities is not only enjoyable but also offers numerous benefits for maintaining a fit and healthy body. Whether you participate in team sports or individual activities, incorporating sports into your routine can have a positive impact on your overall well-being.</p>

                            <div>
                                <button className="btn btn-error btn-outline px-8 mr-5">Explore Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle text-orange-500">❮</a>
                        <a href="#slide4" className="btn btn-circle text-orange-500">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.cheamtennisclub.co.uk/wp-content/uploads/2020/08/Camps-2020-752x440.jpeg" className="w-full rounded-xl" />
                    <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                        <div className='text-white space-y-5 ms-12 lg:pl-12 w-1/2'>
                            <h2 className=' text-xl lg:text-6xl  font-bold'>Keeping Your Body Fit and  <span className='text-orange-500'>Healthy</span></h2>
                            <p>Engaging in sports activities is not only enjoyable but also offers numerous benefits for maintaining a fit and healthy body. Whether you participate in team sports or individual activities, incorporating sports into your routine can have a positive impact on your overall well-being.</p>

                            <div>
                                <button className="btn btn-error btn-outline px-8 mr-5">Explore Now</button>
                            </div>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle text-orange-500">❮</a>
                        <a href="#slide1" className="btn btn-circle text-orange-500">❯</a>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Banner;