import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../routes/Router';

const Layout = () => {
    return (
        <>
        <Header />
        <div>
            <Router />
        </div>
        <Footer />
        </>
    );
}

export default Layout;
