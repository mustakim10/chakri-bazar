import React from 'react';

const List = (props) => {
    const {name,capacity,img} = props.list ;
    
    return (
        <div className='border'>
            <img className='w-1/2 mx-auto' src={img} alt="" />
            <h2 className='font-semibold ps-3'>{name}</h2>
            <p className='text-slate-400 mt-3 ps-3'>{capacity}</p>
        </div>
    );
};

export default List;