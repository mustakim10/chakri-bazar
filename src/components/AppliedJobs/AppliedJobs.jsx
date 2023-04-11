import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Applied from '../Applied/Applied';
import { addToDb } from '../../utilities/fakedb';


const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    
    
    
    return (
        <div>
            <h2>Applied jobs </h2>
          <div>
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