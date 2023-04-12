import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationPin} from '@fortawesome/free-solid-svg-icons'

const Feature = (props) => {
const {jobTitle,id,company,location,salary,requirements,timeStatus,responsibility,experiences,description,status,companyImage} = props.feature ;

const handleAddToCart = props.handleAddToCart ;

    return (
        <div className='border p-3'>
            <img className='mx-auto' src={companyImage} alt="" />
            <h2 className='font-bold text-xl' >{jobTitle}</h2>
            <p className='my-2 text-slate-600'>{company}</p>
            <div className='flex gap-5'>
                <button className='text-violet-400  border px-3 rounded-md	'>{status}</button>
                <button className='text-violet-400  border px-3 rounded-md	'>{timeStatus}</button>
            </div>
            <div className='flex gap-5 my-2'>
                <p className='text-slate-400'><FontAwesomeIcon className='text-violet-300' icon={faLocationPin} /> {location}</p>
                <p className='text-slate-400'>{salary}</p>
            </div>
            <Link to="/details"><button onClick={()=>handleAddToCart(props.feature)} className='bg-violet-400 text-white px-3 rounded-md	'>View Details</button></Link>
        </div>
    );
};

export default Feature;