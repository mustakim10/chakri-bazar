import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const details = useLoaderData();
    // console.log(details);

    const handleAddToApplied = (detail) =>{
        addToDb(detail.num);
    }

    return (
        <div>
            <h1 className='font-bold text-5xl text-center my-20'>Job Details</h1>
            <div>
               {
                details.map(detail => <Details 
                key={detail.id}
                detail={detail}
                handleAddToApplied={handleAddToApplied}
                ></Details>)
               }
            </div>
        </div>
    );
};

export default JobDetails;