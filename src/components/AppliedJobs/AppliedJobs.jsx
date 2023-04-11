import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AppliedJobs = () => {
    const details = useLoaderData();
    
    console.log(details);
    return (
        <div>
            <h2>Applied jobs are comming </h2>
          
        </div>
    );
};

export default AppliedJobs;