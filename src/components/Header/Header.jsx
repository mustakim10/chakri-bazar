import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between mx-14 mt-5'>
            <h2 className='font-bold text-4xl'>Chakri Bazar</h2>
            <nav className='space-x-5 flex items-center'>
                <Link to="/">Home</Link>
                <Link to="/details">Job Details</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/jobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button className='bg-violet-400 text-white px-3 rounded-md	'>Star Applying</button>
        </div>
    );
};

export default Header;