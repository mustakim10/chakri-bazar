import React from 'react';
import Header from '../Header/Header';
import JobList from '../Joblist/JobList';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <JobList></JobList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;