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
                    <h2><span className='font-bold'>Job Description :</span> {description}</h2>
                    <h2 className='my-3'><span className='font-bold'>Job Responsibility :</span> {responsibility}</h2>
                    <h2><span className='font-bold'>Education Requirements :</span> {requirements}</h2>
                    <h2 className='my-3'><span className='font-bold'>Experiences :</span> {experiences}</h2>
                </div>
                <div className='border p-10 '>
                    <div className='bg-violet-100 p-5 rounded-lg mb-5'>
                    <h2 className='font-bold'>Job Detail</h2>
                    <p className='my-3'><span className='font-bold'>Salary :</span> {salary}</p>
                    <p ><span className='font-bold'>Job-Title :</span> {jobTitle}</p>
                    <p className='my-3 font-bold border-b-2 border-black'>Contact Information</p>
                    
                    <p className='my-3'><span className='font-bold'>Phone :</span> 011111111</p>
                    <p><span className='font-bold'>Email :</span> ingi@gmail.com</p>
                    <p className='my-3'><span className='font-bold'>Address :</span> {location}</p>
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