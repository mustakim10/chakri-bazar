import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const JobDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>Job Details: {details.length}</h1>
            <div>
               {/* {
                details.map(detail => <Details 
                key={detail.id}
                detail={detail}
                ></Details>)
               } */}
            </div>
        </div>
    );
};

export default JobDetails;