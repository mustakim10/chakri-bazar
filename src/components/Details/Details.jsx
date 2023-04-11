import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

const Details = (props) => {
    // const detail = useLoaderData();
    // console.log(detail);

    const detail = props.detail;
   const {jobTitle,company,location,salary,requirements,timeStatus,responsibility,experiences,description,status,companyImage} = detail;

   const handleAddToApplied = props.handleAddToApplied ;

   
    return (
        <div>
            <section className='grid grid-cols-2 gap-5'>
                <div className='border p-10'>
                    <h2>Job Description :{description}</h2>
                    <h2 className='my-3'>Job Responsibility : {responsibility}</h2>
                    <h2>Education Requirements : {requirements}</h2>
                    <h2 className='my-3'>Experiences : {experiences}</h2>
                </div>
                <div className='border p-10'>
                    <div>
                    <h2>Job Detail</h2>
                    <p className='my-3'>Salary : {salary}</p>
                    <p>Job-Title : {jobTitle}</p>
                    <p className='my-3'>Contact Information</p>
                    <p className='my-3'>Phone :</p>
                    <p>Email :</p>
                    <p className='my-3'>Address : {location}</p>
                    </div>
                    <Link to="/jobs"><button  onClick={()=>handleAddToApplied(detail)} className='bg-violet-400 text-white px-3 rounded-md w-1/2 text-center p-2 font-bold	mx-auto'>Apply Now</button></Link>
                </div>
            </section>
          
        </div>
    );
};

export default Details;

/*
  
*/ 