import React from 'react';

const Feature = (props) => {
const {jobTitle,company,location,salary,requirements,timeStatus,responsibility,experiences,description,status,companyImage} = props.feature ;

    return (
        <div className='border p-3'>
            <img className='mx-auto' src={companyImage} alt="" />
            <h2 >{jobTitle}</h2>
            <p className='my-2'>{company}</p>
            <div className='flex gap-5'>
                <button className='text-violet-400  border px-3 rounded-md	'>{status}</button>
                <button className='text-violet-400  border px-3 rounded-md	'>{timeStatus}</button>
            </div>
            <div className='flex gap-5 my-2'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='bg-violet-400 text-white px-3 rounded-md	'>View Details</button>
        </div>
    );
};

export default Feature;