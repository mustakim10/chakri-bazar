import React from 'react';

const Applied = (props) => {
    const {jobTitle,company,location,salary,requirements,timeStatus,responsibility,experiences,description,status,companyImage} = props.applied ;

    
    return (
        <div className='flex gap-5'>
            <img src={companyImage} alt="" />
            <div>
            <h2>{jobTitle}</h2>
            <p>{company}</p>
            <div>
                <p>{status}</p>
                <p>{timeStatus}</p>
            </div>
            <div>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            </div>
            <button className='	'>View Details</button>
        </div>
    );
};

export default Applied;