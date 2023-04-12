import React, { useEffect, useState } from 'react';
import List from '../List/List';


const JobList = () => {
    const [joblist,setJoblist] = useState([]);

    useEffect(()=>{
        fetch('joblist.json')
        .then(res=>res.json())
        .then(data=> setJoblist(data))
    },[])
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-4xl'>Job Category List</h1>
            <p className='text-center my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex gap-x-3 justify-center'>
                {
                    joblist.map(list=> <List
                    key={list.id}
                    list={list}
                    ></List>)
                }
            </div>
        </div>
    );
};

export default JobList;