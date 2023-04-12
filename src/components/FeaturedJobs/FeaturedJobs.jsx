import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import { addToDb } from '../../utilities/fakedb';

const FeaturedJobs = () => {
    const [featureJob, setFeatureJob] = useState([]);

    useEffect(() => {
        fetch('featurejobs.json')
            .then(res => res.json())
            .then(data => setFeatureJob(data))
    }, []);

const handleAddToCart = (feature) => {
  addToDb(feature.id);
}

    return (
        <div className='mt-10 mx-auto'>
            <h1 className='font-bold text-4xl text-center'>Featured Jobs</h1>
<p className='text-center text-slate-600 my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:grid md:grid-cols-2 gap-5 mx-auto'>
                {
                 featureJob.map(feature=> <Feature
                 key={feature.id}
                 feature = {feature}
                 handleAddToCart={handleAddToCart}
                 ></Feature>)
                }
            </div>
            <button className='bg-violet-400 text-white px-3 rounded-md	mx-auto'>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;