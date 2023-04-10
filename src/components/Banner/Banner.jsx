import React from 'react';
import banner from '../../../public/IMG_9376_copy-removebg-preview.png'

const Banner = () => {
    return (
        <div className='flex mx-14'>
            <div className='w-auto flex flex-col items-center justify-center gap-y-4'>
                <h1 className='font-bold text-5xl'>One Step Closer To Your <span className='text-violet-400'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-violet-400 text-white p-3 rounded-md	'>Get Started</button>
            </div>
            <div className=''>
<img className='mx-auto' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;