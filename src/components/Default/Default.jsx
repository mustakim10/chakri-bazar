import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Default = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;