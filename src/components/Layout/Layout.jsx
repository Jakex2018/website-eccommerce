import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../routes/Router';
import { useLocation } from 'react-router-dom';
import Adminnav from '../../admin/Adminnav';


const Layout = () => {
    const location = useLocation()
    return (
        <>
        {
            location.pathname.startsWith("/dashboard") ? <Adminnav /> : <Header />
        }

        <div>
            <Router />
        </div>
        <Footer />
        </>
    );
}

export default Layout;
