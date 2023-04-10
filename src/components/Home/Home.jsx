import React from 'react';
import Header from '../Header/Header';
import JobList from '../Joblist/JobList';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <JobList></JobList>
        </div>
    );
};

export default Home;