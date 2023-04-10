import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const FeaturedJobs = () => {
    const [featureJob, setFeatureJob] = useState([]);

    useEffect(() => {
        fetch('featurejobs.json')
            .then(res => res.json())
            .then(data => setFeatureJob(data))
    }, [])
    return (
        <div className='mt-5 mx-auto'>
            <h1 className='font-bold text-4xl text-center'>Featured Jobs</h1>

            <div className='grid grid-cols-2 gap-5 mx-auto'>
                {
                 featureJob.map(feature=> <Feature
                 key={feature.id}
                 feature = {feature}
                 ></Feature>)
                }
            </div>
            <button className='bg-violet-400 text-white px-3 rounded-md	mx-auto'>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;