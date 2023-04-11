import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';
import { addToDb } from '../../utilities/fakedb';


const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    
    
    
    return (
        <div>
            <h2 className='fond-semibold text-4xl text-center my-20'>Applied jobs </h2>
          <div className='border w-1/2 mx-auto p-5'>
            {
                appliedJobs.map(applied => <Applied
                key={applied.id}
                applied={applied}
               
                ></Applied>)
            }
          </div>
        </div>
    );
};

export default AppliedJobs;