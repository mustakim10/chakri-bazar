import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex md:justify-between md:mx-14 mt-5'>
            <h2 className='font-bold text-4xl'>Chakri Bazar</h2>
            <nav className='space-x-5 md:flex md:items-center'>
                <Link className='font-bold hover:text-violet-600' to="/">Home</Link>
                <Link className='font-bold hover:text-violet-600' to="/details">Job Details</Link>
                <Link className='font-bold hover:text-violet-600' to="/statistics">Statistics</Link>
                <Link className='font-bold hover:text-violet-600' to="/jobs">Applied Jobs</Link>
                <Link className='font-bold hover:text-violet-600' to="/blog">Blog</Link>
            </nav>
            <button className='bg-violet-400 text-white px-3 rounded-md	'>Star Applying</button>
        </div>
    );
};

export default Header;