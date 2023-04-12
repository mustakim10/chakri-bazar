import React from 'react';
import { Link } from 'react-router-dom';

const Applied = (props) => {
    const {jobTitle,company,location,salary,requirements,timeStatus,responsibility,experiences,description,status,companyImage} = props.applied ;

    
    return (
        <div className='flex gap-5 h-52 items-center	'>
            <img src={companyImage} alt="" />
            <div>
            <h2 className='font-bold my-2'>{jobTitle}</h2>
            <p className='text-slate-400	'>{company}</p>
            <div className='flex gap-3 my-2'>
                <p className='border p-2 rounded-lg text-violet-400'>{status}</p>
                <p className='border p-2 rounded-lg text-violet-400'>{timeStatus}</p>
            </div>
            <div className='my-2'>
                <p className='text-slate-400	'>{location}</p>
                <p className='text-slate-400	'>{salary}</p>
            </div>
            </div>
            <Link to="/details"><button className='ms-7 bg-violet-400 h-10 p-2 text-white font-bold rounded-md '>View Details</button></Link>
        </div>
    );
};

export default Applied;